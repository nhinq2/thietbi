$(window).on('load', function () {
  // initialization of HSMegaMenu component
  $('.js-mega-menu').HSMegaMenu({
    event: 'hover',
    pageContainer: $('.container'),
    breakpoint: 991,
    hideTimeOut: 0
  });

  $('.nav-bar .flex-column a').hover( function() {
     $(this).parents('.nav-item').children('.flex-column').show();
  },
  function() {
     $(this).parents('.nav-item').children('.flex-column').hide();
  });
  $('.nav-bar .flex-column .flex-column').css('left', $('.nav-bar').width()-10);
});

$(document).on('ready', function () {
  // initialization of header
  $.HSCore.components.HSHeader.init($('#header'));

  // initialization of unfold component
  $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
    afterOpen: function () {
      if (!$('body').hasClass('IE11')) {
        $(this).find('input[type="search"]').focus();
      }
    }
  });

  // initialization of form validation
  $.HSCore.components.HSValidation.init('.js-validate', {
    rules: {
      confirmPassword: {
        equalTo: '#password'
      }
    }
  });

  // initialization of forms
  $.HSCore.helpers.HSFocusState.init();

  // initialization of malihu scrollbar
  $.HSCore.components.HSMalihuScrollBar.init($('.js-scrollbar'));

  // initialization of autonomous popups
  $.HSCore.components.HSModalWindow.init('[data-modal-target]', '.js-signup-modal', {
    autonomous: true
  });

  // initialization of show animations
  $.HSCore.components.HSShowAnimation.init('.js-animation-link');

  // initialization of slick carousel
  $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');

  // initialization of cubeportfolio
  //$.HSCore.components.HSCubeportfolio.init('.cbp');

  // initialization of video player
  $.HSCore.components.HSVideoPlayer.init('.js-inline-video-player');

  // initialization of go to
  $.HSCore.components.HSGoTo.init('.js-go-to');

  // // initialization of fancybox
  //$.HSCore.components.HSFancyBox.init('.js-fancybox');

  // initialization of video on background
  $.HSCore.helpers.HSBgVideo.init('.js-bg-video');
});
