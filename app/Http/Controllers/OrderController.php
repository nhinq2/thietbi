<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Order;
use App\Models\Product;
use App\Models\Setting;
use App\User;
use File;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Cart;
use Auth;
use PDF;
use App\Notifications\InvoicePaid;
use Illuminate\Support\Facades\Hash;
use Notification;
use Session;
use URL;
use Mike42\Escpos\PrintConnectors\FilePrintConnector;
use Mike42\Escpos\Printer;

class OrderController extends BaseController
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
     public function __construct()
     {
         parent::__construct();
         $locale = Session::get('locale', 'vi');
         $setting  = Setting::where('key','admin-email-'.$locale)->first();
         $this->email = @$setting->content;
     }

    function list(Request $request) {
        $ids = $request->date;
        //init
        $dt = Carbon::now('Asia/Ho_Chi_Minh');
        $period = $dt->daysInMonth;
        $m = $dt->format('m');
        $y = $dt->format('Y');
        $now = $dt->format('Y-m-d');

        $orders = Order::when($ids, function ($query, $ids) {
            if (isset($ids)) {
               $query->whereDate('created_at', $ids);
            }else{
              $query->whereMonth('created_at', $m);
              $query->whereYear('created_at', $y);
            }
        })->orderBy('created_at', 'desc')->paginate(20);


        $days = [];
        for($i=1; $i<=$period; $i++) {
            $time = Carbon::create($y,$m,$i);
            $days[$time->format('Y-m-d')] = $time->format('d/m/Y');
        }
        return view('order.list', compact('orders', 'days', 'now'));
    }

    public function show($id)
    {
        $order = Order::where('id', $id)->first();
        return view('order.show', compact('order'));
    }

    public function addCart(Request $request)
    {   if(!empty($request->qty)){
          $product = Product::where('id', $request->id)->first();
          $qty = $request->qty;
          if($qty >= $product->discount && $product->price2){
            $price = $product->price2;
          }else{
            $price = $product->price;
          }
          $cart = Cart::instance('shopping')->add($product, $product->title, $qty, $price);
        }
        return redirect()->back()->with('status', $product->title. ', Đã thêm vào giỏ!');
    }

    public function updateCart(Request $request)
    {
         foreach ($request->qty as $key => $value) {
           Cart::instance('shopping')->remove($key);
           $discount = $request->discount[$key];
           $id = $request->id[$key];
           $product = Product::where('id', $id)->first();
           if($value >= $discount && $product->price2){
             $price = $product->price2;
           }else{
             $price = $product->price;
           }
           $cart = Cart::instance('shopping')->add($product, $product->title, $value, $price);
         }

        return redirect()->back();
    }

    public function removeCart(Request $request)
    {
        Cart::instance('shopping')->remove($request->id);
        return redirect()->back();
    }

    public function cart()
    {
        $cartcontent = Cart::instance('shopping')->content();
        $cartsubtotal = Cart::instance('shopping')->subtotal();
        $carttax = Cart::instance('shopping')->tax();
        $carttotal = Cart::instance('shopping')->total();

        return view('order.cart', compact('cartcontent', 'cartsubtotal','carttax','carttotal'));
    }

    public function checkout()
    {
        $cartcontent = Cart::instance('shopping')->content();
        $cartsubtotal = Cart::instance('shopping')->subtotal();
        $carttax = Cart::instance('shopping')->tax();
        $carttotal = Cart::instance('shopping')->total();

        $user_id = Auth::id();

        $order = Order::where('user_id',$user_id)->first();
        return view('order.checkout', compact('cartcontent', 'cartsubtotal','carttax','carttotal','order'));
    }

    public function order(Request $request)
    {
        $cartcontent = Cart::instance('shopping')->content();
        $cartsubtotal = Cart::instance('shopping')->subtotal();
        $carttax = Cart::instance('shopping')->tax();
        $carttotal = Cart::instance('shopping')->total();

        $info = [
          'name' => $request->lastname . ' '. $request->firstname,
          'phone' => $request->phone,
          'address' => $request->address .', '.$request->district .', '.$request->city,
          'note' => $request->note,
          'date' => Carbon::now('Asia/Ho_Chi_Minh')->format('d/m/Y H:m')
        ];

        $email = $request->phone.'@chonhanh.net';

        $user = User::where('email', $email)->first();
        $password = '123456';
        $datauser = [
            'name' => $request->firstname,
            'email' => $email,
            'password' => Hash::make($password),
        ];
        if(!$user){
          $user = User::create($datauser);
        }

        //Make login
        $datauser['password'] = $password;
        if (Auth::attempt($datauser)) {
            // The user is active, not suspended, and exists.
        }

        $data = $request->only(
            'firstname', 'lastname', 'phone', 'email', 'address', 'district', 'city', 'country', 'zip', 'note', 'user_id'
        );
        $data['status'] = 'new';
        $string = explode(' ', $data['firstname']);
        $data['firstname'] = last ($string);
        $data['lastname'] =  @$string[0];
        $data['user_id'] =  $user->id;

        foreach ($cartcontent as $key => $value) {
          // code...
        }

        $data['shopping'] = json_encode($cartcontent);

        $order = Order::create($data);

        $pdf = PDF::loadView('order.pdf', compact('cartcontent', 'cartsubtotal','carttax','carttotal','info'))
        ->setOptions(['dpi' => 150, 'defaultFont' => 'sans-serif', 'defaultPaperSize' => 'a4']);
        $pdf->save(public_path('upload/order/order-'.$order->id.'.pdf'));//download //stream

        //Empty order
        Cart::destroy();

        $from    = $request->email;
        $to      = $this->email ?? "ketcaupro@gmail.com";
        /*
        if (filter_var($from, FILTER_VALIDATE_EMAIL)) {
          Notification::route('mail', $from)
                ->notify(new InvoicePaid($order));
        }*/

        Notification::route('mail', $to)
              ->notify(new InvoicePaid($order));

        return redirect(route('order.show', [$order->id]));
    }

    function create_order($id) {
      $order = Order::find($id);
      $cartcontent = json_decode($order->shopping);
      foreach ($cartcontent as $value) {
        $product = Product::where('id', $value->id->id)->first();
        Cart::instance('shopping')->add($product, $value->name, $value->qty, $value->price);
      }
      return redirect(route('cart'));
    }

    function user_order(Request $request) {
        $user_id = Auth::id();
        $ids = $request->date;
        $phone = Session::get('phone_from_order');
        //init
        $dt = Carbon::now('Asia/Ho_Chi_Minh');
        $period = $dt->daysInMonth;
        $m = $dt->format('m');
        $y = $dt->format('Y');
        $now = $dt->format('Y-m-d');

        $orders = Order::where('user_id', $user_id)->when($ids, function ($query, $ids) {
            if (isset($ids)) {
               $query->whereDate('created_at', $ids);
            }else{
              $query->whereMonth('created_at', $m);
              $query->whereYear('created_at', $y);
            }
        })->orderBy('created_at', 'desc')->paginate(20);


        $days = [];
        for($i=1; $i<=$period; $i++) {
            $time = Carbon::create($y,$m,$i);
            $days[$time->format('Y-m-d')] = $time->format('d/m/Y');
        }

        return view('order.userorder', compact('orders', 'days', 'now','phone'));
    }

    function printBill() {
      $connector = new FilePrintConnector("php://stdout");
      $printer = new Printer($connector); dd($printer);
      $printer ->text("Hello World!\n");
      $printer ->cut();
      $printer ->close();
    }

    public function delete($id)
    {
        $order = Order::find($id);
        $order->delete();
        return back()->with('notifi', 'Đã xóa thành công');
    }
}
