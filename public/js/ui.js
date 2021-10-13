$('#card-hover .card').hover(function() {
  $(this).find('.align-self-started').stop().animate({opacity:1},200);
},
function() {
  $(this).find('.align-self-started').stop().animate({opacity:0},200);
});

$(".addCart").on("click", function(e) {
    e.preventDefault();
    var that = $(this).data('id');
    $.ajax({
      url:'/api/addcart',
      type: 'GET',
      data: {
        id: that
      },
      success:function(data){
        $("#cart_count").html(data).removeClass('badge-success').addClass('badge-danger');
      }
    })
});

$(function() {
  $('#bookmarkme').click(function() {
    if (window.sidebar && window.sidebar.addPanel) { // Mozilla Firefox Bookmark
      window.sidebar.addPanel(document.title, window.location.href, '');
    } else if (window.external && ('AddFavorite' in window.external)) { // IE Favorite
      window.external.AddFavorite(location.href, document.title);
    } else if (window.opera && window.print) { // Opera Hotlist
      this.title = document.title;
      return true;
    } else { // webkit - safari/chrome
      alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL') + ' + D to bookmark this page.');
    }
  });
});
