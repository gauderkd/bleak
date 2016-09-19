$(document).ready(function() {
  var drakonavWidth = $('.drakonav').width();
  var logoWidth = $('.nav-logo').width();
  var availableWidth = $('#nav').width();
  var widthCheck = (availableWidth - (logoWidth+100));

  if (drakonavWidth >= widthCheck) {
    $('.drakonav').remove();
    $('.drakolist').remove();
    $('.drakoNavHMenu').css("display","block");
  } else {
    $('.drakonav').css("display","flex");
    $('.drakoNavHMenu').remove();
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
