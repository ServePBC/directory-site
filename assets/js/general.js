$(document).ready(function() {
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 700) {
          $("header.main").addClass("sticky-visible");
          $('.scrolltop').fadeIn();
  		} else {
          $("header.main").removeClass("sticky-visible");
          $('.scrolltop').fadeOut();
      }
  });
});
