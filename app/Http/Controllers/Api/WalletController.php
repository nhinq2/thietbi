<?php
namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Wallet;
use DB;

class WalletController extends Controller
{
    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    public function api_post(Request $request)
    {
        $data = $request->only(
            'name', 'amount', 'paymentMethod', 'user_id', 'status'
        );
        if($request->id){
          DB::table('wallets')->where('id', $request->id)->update($data);
        }else {
          $wallet = Wallet::create($data);
        }
        return $wallet;
    }

    public function api_list(Request $request)
    {
        return Wallet::where('status',$request->status)->get();
    }
}
