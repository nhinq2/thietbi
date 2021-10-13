<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateSliderRequest;
use App\Models\Slider;
use File;
use Illuminate\Http\Request;

class SliderController extends BaseController
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    function list() {
        $sliders = Slider::paginate(10);
        return view('slider.list', compact('sliders'));
    }

    public function create()
    {
        $categories = array();
        return view('slider.create', compact('categories'));
    }

    public function store(CreateSliderRequest $request)
    {
        $background_name = '';
        $img_name        = '';

        if ($request->hasFile('background_image')) {
            $image           = $request->file('background_image');
            $background_name = 'slider-bg-' . time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('upload/slider/'), $background_name);
        }

        if ($request->hasFile('image')) {
            $image    = $request->file('image');
            $img_name = 'slider-' . time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('upload/slider/'), $img_name);
        }

        $data                     = $request->only('title', 'summary', 'content', 'sort', 'url', 'position');
        $data['background_image'] = $background_name;
        $data['image_link']       = $img_name;

        Slider::create($data);

        return redirect('admin/slider/list')->with('notifi', 'Đã thêm thành công');
    }

    public function edit($id)
    {
        $categories = array();
        $slider     = Slider::find($id);
        return view('slider.edit', compact('categories', 'slider'));
    }

    public function update(Request $request)
    {
        $slider = Slider::find($request->slider_id);
        $data   = $request->only('title', 'summary', 'content', 'sort', 'url', 'image_link', 'is_display', 'position');

        if (empty($data['is_display'])) {
            $data['is_display'] = 0;
        } else {
            $data['is_display'] = 1;
        }

        $background_name = "";
        if ($request->hasFile('background_image')) {
            $background_image = $request->file('background_image');
            $background_name  = 'slider-bg-' . time() . '.' . $background_image->getClientOriginalExtension();
            $background_image->move(public_path('upload/slider/'), $background_name);

            $del_image  = $slider->background_image;
            $image_path = public_path("upload/slider/" . $del_image);
            if (file_exists($image_path)) {
                File::delete($image_path);
            }
            $data['background_image'] = $background_name;
        }

        $img_name = "";
        if ($request->hasFile('image')) {
            $image    = $request->file('image');
            $img_name = 'slider-' . time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('upload/slider/'), $img_name);

            $del_image  = $slider->image_link;
            $image_path = public_path("upload/slider/" . $del_image);
            if (file_exists($image_path)) {
                File::delete($image_path);
            }
            $data['image_link'] = $img_name;
        }

        $slider->update($data);
        return redirect('admin/slider/list')->with('notifi', 'Đã sửa thành công');
    }

    public function delete($id)
    {
        $slider = Slider::find($id);
        $slider->delete();
        return back()->with('notifi', 'Đã xóa thành công');
    }
}
