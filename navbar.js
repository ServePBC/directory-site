		var serveNav  = $('.serve-nav'),
            page      = $('html, body'),
            sections  = $("[data-scroll-index]"); 

        serveNav.change(function() {
           var target = $(this).val();

            serveNav.val( target );

            page.animate({
                scrollTop: sections.filter("[data-scroll-index="+target+"]").offset().top - 70
            }, 777);

        });