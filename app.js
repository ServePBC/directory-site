$(document).ready(function() {
	//caches a jQuery object containing the header element
	var header = $(".sticky-hidden");
	  $(window).scroll(function() {
	      var scroll = $(window).scrollTop();

	      if (scroll >= 700) {
	          header.removeClass("sticky-hidden").addClass("sticky-visable");
	      } else {
	          header.removeClass("sticky-visable").addClass("sticky-hidden");
	      }
	  });
      //hides button
       $(window).scroll(function(){
        if ($(this).scrollTop() >= 700) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
        //Click event to scroll to top
        $('.scrollToTop').click(function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });

        //Click event to change text

        $('.serve-nav').on('click', function(){
            
            $('.change-val0').change().text("back to top");
            
        });

        //Scroll to top change selected in options

        $('.scrollToTop').on('click', function(){
            $('.serve-nav').val("0").trigger('change');
        });

        //Scroll Event to Change Category

       /* $(window).on('scroll', function(){
           
        }); */
	});










