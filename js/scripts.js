(function($){

  var wow = new WOW({});
  wow.init();

  $('a.page-scroll').bind('click', function(event) {
    var $element = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($element.attr('href')).offset().top)
    }, 1450, 'easeInOutExpo');
    event.preventDefault();
  });

  $('#nav-mobile a').click(function(){
    $('.button-collapse').click();
  });

  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  });
})(jQuery);
