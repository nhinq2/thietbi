<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Auth;
use App\User;

class SettingsController extends Controller
{
  function password()
   {
       $account = Auth::id();
       return view('auth.password', compact('account'));
   }

   function password_store(Request $request) {
       $request->validate([
           'password'=>'required|min:6',
       ]);
       $account = Auth::id();
       $user = User::find($account);
       $user->update([
           'password'=>bcrypt($request->password)
       ]);
       return redirect('/admin');
   }

    function list() {
        $lang     = \Session::get('locale', 'vi');
        $settings = Setting::whereLanguage($lang)->get();

        return view('settings.list', compact('settings'));
    }

    public function store(Request $request)
    {
        // dd($request->all());
        $locale    = $request->locale;
        $content   = $request->content;
        $checks    = $request->checkbox;
        $languages = array('vi', 'en', 'cn');

        foreach ($request->name as $key => $value) {
            $menu = Setting::find($key);

            if (!$menu) {
                if ($value != null) {
                    foreach ($languages as $language) {
                        $setting = new Setting();
                        if ($language == $locale) {
                            $setting = Setting::create([
                                'name'     => $value,
                                'content'  => $content[$key],
                                'language' => $language,
                            ]);
                        } else {
                            $setting = Setting::create([
                                'name'     => $value,
                                'language' => $language,
                            ]);
                        }
                        $setting->key .= '-' . $language;
                        $setting->save();
                    }
                }
            } else {
                $menu->update([
                    'name'    => $value,
                    'content' => $content[$key],
                ]);
            }
        }
        if (is_array($checks)) {
            foreach ($checks as $id => $value) {
                $menu = Setting::find($id);
                $menus = Setting::whereName($menu->name)->delete();
            }
        }
        return redirect('admin/settings');
    }
}
