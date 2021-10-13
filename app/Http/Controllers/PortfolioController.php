<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Portfolio;
use File;
use Storage;

class PortfolioController extends BaseController
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

    public function index()
    {
    	  $portfolios = Portfolio::paginate(12);
        $tags = Portfolio::orderBy('tags','asc')->distinct('tags')->pluck('tags');
        return view('portfolio.index', compact('portfolios', 'tags'));
    }


    public function list(Request $request)
    {
        $tags = Portfolio::orderBy('tags','asc')->distinct('tags')->pluck('tags');
        $portfolios = Portfolio::orderBy('created_at','desc')->paginate(20);
        return view('portfolio.list', compact('portfolios', 'tags'));
    }

    public function portfolioshow($slug)
    {
        $portfolio_by_new = Portfolio::orderBy('created_at','desc')->skip(0)->take(4)->get();
        $tags = Portfolio::orderBy('tags','asc')->distinct('tags')->pluck('tags');
        $portfolios = Portfolio::paginate(12);
        return view('portfolio.index', compact('portfolios','tags','portfolio_by_new'));
    }


    public function create()
    {
      $tags = Portfolio::orderBy('tags','asc')->distinct('tags')->pluck('tags');
    	return view('portfolio.create', compact('tags'));
    }


    public function store(Request $request)
    {
    	$imgs = [];
  		if ($request->hasFile('image')) {
	      $images = $request->file('image');
        foreach ($images as $key => $image) {
          $img_name = 'portfolio-'.$key.time().'.'.$image->getClientOriginalExtension();
          $image->move(public_path('upload/portfolio/'), $img_name);
          $imgs[] = $img_name;
        }
    	}
      $data = $request->only(
        'title','content','summary','tags','image_link'
      );
      if(!$data['tags']){
        $data['tags'] = @$request->option_tags;
      }
      $data['image_link'] = json_encode($imgs);
    	 $portfolio = Portfolio::create($data);

        return redirect('/portfolio/'.$portfolio->slug);
    }

    public function show($slug)
    {
        $portfolio = Portfolio::where('slug',$slug)->first();
        $portfolio_next = Portfolio::where('id','>',$portfolio->id)
        ->limit(4)
        ->get();
        return view('portfolio.show', compact('portfolio','portfolio_next'));
    }

    public function edit($id){
        $tags = Portfolio::orderBy('tags','asc')->pluck('tags');
        $portfolio = Portfolio::find($id);
        return view('portfolio.edit',compact('tags','portfolio'));
    }

    public function update(Request $request)
    {
        $portfolio = Portfolio::find($request->portfolio_id);
        $data = $request->only(
          'title','content','summary','image_link','tags'
        );

        if(!$data['tags']){
          $data['tags'] = @$request->option_tags;
        }

        $imgs = [];
        if ($request->hasFile('image')) {
          $images = $request->file('image');
          foreach ($images as $key => $image) {
            $img_name = 'portfolio-'.$key.time().'.'.$image->getClientOriginalExtension();
            $image->move(public_path('upload/portfolio/'), $img_name);
            $imgs[] = $img_name;
            //delete
            $del_images = json_decode($portfolio->image_link);
            foreach ($del_images as $key => $del_image) {
              $image_path = public_path("upload/portfolio/".$del_image);
              if (file_exists($image_path)) {
                  File::delete($image_path);
              }
            }
          }
          $data['image_link'] = json_encode($imgs);
        }
        $portfolio->update($data);
        return redirect('admin/portfolio/list')->with('notifi','Đã sửa thành công');
    }

    public function delete($id){
        $portfolio = Portfolio::find($id);
        $portfolio->delete();
        return back()->with('notifi','Đã xóa thành công');
    }
}
