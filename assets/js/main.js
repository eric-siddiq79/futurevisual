(function ($) {
    $(function () {
        $('.phone-nav').on('click', function () {
            $('body').toggleClass('navExpanded');
            $(".nav-wrapper").slideToggle();
        });

        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
        
    }); // End ready function

    $(window).on('load', function () {
        $('body').addClass('loaded');
    }); //End window load function

}(jQuery));