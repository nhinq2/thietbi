jQuery(document).ready(function($) {
  /*slider*/
    var h = $(window).height();

    $('#full-width-slider').royalSlider({
       arrowsNav: true,
       loop: true,
       keyboardNavEnabled: true,
       controlsInside: false,
       imageScaleMode: 'fill',
       arrowsNavAutoHide: false,
       autoScaleSlider: true,
       autoScaleSliderWidth: 960,
       autoScaleSliderHeight: 560,
       controlNavigation: 'bullets',
       thumbsFitInViewport: false,
       navigateByClick: true,
       startSlideId: 0,
       autoPlay: true,
       transitionType:'fade',
       globalCaption: false,
       deeplinking: {
         enabled: true,
         change: false
       },
       /* size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images */
       imgWidth: 1400,
       imgHeight: 680
     });

});

/*.slider*/

/*quote slider*/

jQuery.rsCSS3Easing.easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';
$('#slider-with-blocks-1').royalSlider({
  arrowsNav: true,
  arrowsNavAutoHide: false,
  fadeinLoadedSlide: false,
  controlNavigationSpacing: 0,
  controlNavigation: 'bullets',
  imageScaleMode: 'none',
  imageAlignCenter:false,
  blockLoop: true,
  loop: true,
  enabled:true,
  numImagesToPreload: 6,
  transitionType: 'fade',
  keyboardNavEnabled: true,
  block: {
    delay: 400
  }
});
/*.quote slider*/
