<?php

namespace App\Http\Controllers;

use App\Models\Business;
use File;
use Illuminate\Http\Request;

class BusinessController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $giaothuong = Business::orderBy('id')->paginate(6);

        return view('business.index', [
            'active_menu' => 'ket-noi-business',
            'giaothuong'  => $giaothuong,
        ]);
    }

    function list() {
        $businesses = Business::orderBy('id')->paginate(25);

        return view('business.list', [
            'businesses' => $businesses,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('business.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'     => 'required',
            'address'  => 'required',
            'business' => 'required',
        ]);

        $data = $request->except('_token');

        if ($request->hasFile('image')) {
            $image    = $request->file('image');
            $img_name = 'business-' . time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('upload/business/'), $img_name);
            $data['image_link'] = $img_name;
        }

        Business::create($data);

        return redirect(route('admin.businesses.list'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Business  $business
     * @return \Illuminate\Http\Response
     */
    public function show(Business $business)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Business  $business
     * @return \Illuminate\Http\Response
     */
    public function edit(Business $business)
    {
        return view('business.edit', compact('business'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Business  $business
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Business $business)
    {
        $request->validate([
            'name'     => 'required',
            'address'  => 'required',
            'business' => 'required',
        ]);

        $data = $request->except('_token');

        if ($request->hasFile('image')) {
            //upload image
            $image    = $request->file('image');
            $img_name = 'business-' . time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('upload/business/'), $img_name);
            $data['image_link'] = $img_name;

            //delete old image
            $del_image  = $business->image_link;
            $image_path = public_path("upload/business/" . $del_image);
            if (file_exists($image_path)) {
                File::delete($image_path);
            }
        }

        $business->update($data);

        return redirect(route('admin.businesses.edit', $business->id));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Business  $business
     * @return \Illuminate\Http\Response
     */
    public function destroy(Business $business)
    {
        $this->deleteImage($business->image_link);

        $business->delete();

        return redirect(route('admin.businesses.list'));
    }

    private function deleteImage($image_link)
    {
        $image_path = public_path("upload/business/" . $image_link);

        if (file_exists($image_path)) {
            File::delete($image_path);
        }
    }
}
