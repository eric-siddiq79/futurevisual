(function ($) {
    $(function () {
        $('.phone-nav').on('click', function () {
            $('body').toggleClass('navExpanded');
            $(".nav-wrapper").slideToggle();
        });

        $('.scrollDown').on('click', function () {
            var id = $(this).attr('href');
            if ($(window).width() > 767) {
                $('html, body').stop(true, true).animate({
                    scrollTop: $(id).offset().top - 0
                }, 900);
            } else {
                $('html, body').stop(true, true).animate({
                    scrollTop: $(id).offset().top - 91
                }, 900);
            }
        });
    }); // End ready function

    $(window).on('load', function () {
        $('body').addClass('loaded');
    }); //End window load function

}(jQuery));