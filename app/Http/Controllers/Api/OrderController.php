<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use PDF;
use DB;
use Notification;
use Carbon\Carbon;
use App\Notifications\InvoicePaid;

class OrderController extends Controller
{
  public function api_post(Request $request)
  {

      $data = $request->only(
          'phone', 'email', 'address', 'district', 'city', 'country', 'zip', 'note', 'user_id', 'shop_id', 'total', 'status', 'read', 'show'
      );

      $data['firstname'] = $request->name;
      $data['shopping'] = json_encode($request->items);
      $data['status'] = "new";

      $order = Order::create($data);

      $info = [
        'name' => $request->name,
        'phone' => $request->phone,
        'address' => $request->address .', '.$request->district .', '.$request->city,
        'note' => $request->note,
        'date' => Carbon::now('Asia/Ho_Chi_Minh')->format('d/m/Y H:m')
      ];

      return $order;
      /*
      $from    = $request->email;
      $to      = $this->email ?? "ketcaupro@gmail.com";
      Notification::route('mail', $to)
            ->notify(new InvoicePaid($order));
      */
  }

  public function api_update(Request $request)
  {
      $data = $request->only(
          'phone', 'email', 'address', 'district', 'city', 'country', 'zip', 'note', 'user_id', 'shop_id', 'total', 'status', 'read', 'show'
      );
      return DB::table('orders')->where('id', $request->id)->update($data);
  }

  public function api_list(Request $request)
  {
      //Vendor Orders
      if (!empty($request->shop_id)) {
        return Order::where('shop_id',$request->shop_id)->orderBy('created_at', 'desc')->paginate(20);
      }elseif(!empty($request->user_id)){
          //User orders
          return Order::where('user_id',$request->user_id)->orderBy('created_at', 'desc')->paginate(20);
      }
      else {
          //Admin Orders
          return Order::orderBy('created_at', 'desc')->paginate(50);
      }

  }
}
