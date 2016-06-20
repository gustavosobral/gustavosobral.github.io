(function($){

  // Configure "back to top" button behavior
  var offset = 400,
  offset_opacity = 900,
  scroll_top_duration = 700,
  $back_to_top = $('.cd-top');

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

  // Hide or show the "back to top" button
  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if( $(this).scrollTop() > offset_opacity ) { 
      $back_to_top.addClass('cd-fade-out');
    }
  });

  // Smooth scroll to top
  $back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0 ,
      }, scroll_top_duration
    );
  });

  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  });
})(jQuery);
