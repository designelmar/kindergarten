// add padding top to show content behind navbar
$('body').css('padding-top', $('.navbar').outerHeight() + 'px')

// detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists
  var last_scroll_top = 0;
  $(window).on('scroll', function () {
    scroll_top = $(this).scrollTop();
    if (scroll_top < last_scroll_top) {
      $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
    }
    else {
      $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
    }
    last_scroll_top = scroll_top;
  });
}






/*SCROLL TOP*/



$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#topBtn').fadeIn();
    } else{
      $('#topBtn').fadeOut();
    }
  });

  $("#topBtn").click(function(){
    $('html ,body').animate({scrollTop : 0},100);
  });
});




/******NAV******/


$(document).ready(function () {


  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  
});