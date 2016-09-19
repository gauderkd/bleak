$(document).ready(function() {
  var drakonavWidth = $('.drakonav').width();
  var logoWidth = $('.nav-logo').width();
  var availableWidth = $('#nav').width();

  if (drakonavWidth >= (availableWidth - (logoWidth+100))) {
    $('.drakonav').css("display","none");
    $('.drakoNavHMenu').css("display","block");
  } else {
    $('.drakonav').css("display","flex");
    $('.drakoNavHMenu').css("display","none");
  }

  $('.menuBars').click(function() {
    if ( $('.navPopout').css('display') == 'none' ) {
      $('.navPopout').fadeIn('fast');
      $('.menuBars').css("color","#3D9ED9")
    } else {
      $('.navPopout').fadeOut('fast');
      $('.menuBars').css("color","#363740")
    }
  });
});
