<?php

namespace App\Http\Controllers\Api;

use DB;
use Auth;
use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class UserController extends Controller
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
            'name', 'phone', 'email', 'address','city_id', 'district_id', 'ward_id', 'payment', 'image', 'role', 'device', 'location', 'money', 'notify'
        );
        $password = $request->password;
        if(!isset($data['email']) && isset($data['phone'])){
          $data['email'] = $data['phone'];
        }
        if(isset($request->password)){
          $data['password'] = Hash::make($request->password);
        }
        if($request->id){
          return DB::table('users')->where('id', $request->id)->update($data);
        }else {
          User::create($data);
          if(Auth::attempt(['email' => $data['email'], 'password' => $password])){
              $user = Auth::user();
              return response()->json(['accessToken' => 'accessToken', 'user' => $user], 200);
          }
          else{
              return response()->json(['error'=>'Unauthorised'], 401);
          }
        }
    }

    public function login(Request $request)
    {
        $email = $request->email;
        if(!isset($email)){
          $email = $request->phone;
        }
        if(Auth::attempt(['email' => $email, 'password' => $request->password])){
            $user = Auth::user();
            //$accessToken =  $user->createToken('authToken')->accessToken;
            //return response()->json(['accessToken' => 'accessToken', 'user' => $user], $this->successStatus);
            return response()->json(['accessToken' => 'accessToken', 'user' => $user], 200);
        }
        else{
            return response()->json(['error'=>'Unauthorised'], 401);
        }
    }

    public function api_user(Request $request)
    {
        if(isset($request->district_id)){
          $user = User::where('district_id', $request->district_id)->where('role', 'vendor')->first();
        }else{
          $user = User::find($request->id);
        }
        return response()->json($user);
    }

    /**
     * email find
     *
     * @return \Illuminate\Http\Response
     */
    public function email(Request $request){
        $user =  User::where('email', $request->email)->first();
        if($user){
            return response()->json($user);
        }
        else{
            return response()->json([]);
        }
    }

    public function password(Request $request)
    {
        $data = [];
        $user =  User::where('email', $request->email)->first();
        $password = $request->password;
        if(isset($password)){
          $data['password'] = Hash::make($password);
        }
        if($user->id){
          return DB::table('users')->where('id', $user->id)->update($data);
        }
    }

    public function api_device(Request $request)
    {
        DB::table('users')->where('id', $request->id)->update(['device'=>$request->device]);
    }
}
