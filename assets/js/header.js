$(document).ready(function() {
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 700) {
          $('header.main, body').addClass("sticky-visible");
          $('.scrolltop').fadeIn();
  		} else {
          $('header.main, body').removeClass("sticky-visible");
          $('.scrolltop').fadeOut();
      }
  });
});
