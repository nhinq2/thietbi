(function() {
  "use strict";

  var Tabs = function(element, options) {
    this.element = element;
    this.options = $.extend({
      activeIndex: false,
      activeClass: 'active'
    }, options);

    if ($('> .nav .active', this.element).size() == 1) {
      this.options.activeIndex = $('> .nav .active', this.element).index();
    }

    // Set active for given index
    if (this.options.activeIndex >= 0) {
      $($('> .nav .active a', this.element).attr('href')).addClass(
        this.options.activeClass
      );
      $('> .pages', this.element).css({
        height: $($('> .nav .active a', this.element).attr('href')).outerHeight()
      });
    }

    $('> .pages .page', this.element)
      .addClass('transition');

    this.bindEvents();
  };

  Tabs.prototype = {
    bindEvents: function() {
      this.element.on('click', '> .nav a', (function(e) {
        e.preventDefault();
        this.setActive(e.target);
      }).bind(this));
    },

    setActive: function(target) {
      var activePage = $($(target).attr('href')),
          activeNav = $(target).closest('li');

      if (activeNav.hasClass(this.options.activeClass))
        return;

      $('> .nav li', this.element)
        .removeClass(this.options.activeClass);
      $('> .pages .page', this.element)
        .removeClass(this.options.activeClass);

      activeNav.addClass(this.options.activeClass);
      activePage.addClass(this.options.activeClass);

      $('> .pages', this.element).css({
        'height': activePage.outerHeight()
      });
    }
  };

  $.fn['tabs'] = function(options) {
    return this.each(function() {
      $(this).data('line-tabs', new Tabs($(this), options));
    });
  };

  $(function() {
    $('.line-ui.tabs').tabs();
  });
})(jQuery);
