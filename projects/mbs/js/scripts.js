$(document).ready(function () {


    function setHeight() {
        windowHeight = $(window).innerHeight();
        $('.hero').css('min-height', windowHeight);
        $('.hero .hero-content').css('padding-top', windowHeight / 6);


    };
    setHeight();

    $(window).resize(function () {
        setHeight();
    });




    /***************** Initiate Flexslider ******************/
    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 320,
        itemMargin: 5,
        minItems: 1,
        maxItems: 2
    });


    /***************** Nav Transformicon ******************/

    /* When user clicks the Icon */
    $('.nav-toggle').click(function () {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('open');
        event.preventDefault();
    });
    /* When user clicks a link */
    $('.header-nav li a').click(function () {
        $('.nav-toggle').toggleClass('active');
        $('.header-nav').toggleClass('open');

    });

    /***************** Header BG Scroll ******************/

    $(function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 20) {
                $('section.navigation').addClass('fixed');
                $('header').css({
                    "border-bottom": "none",
                    "padding": "30px 0 25px 0"
                });

                $('header .navicon').css({
                    "top": "48px",
                });
            } else {
                $('section.navigation').removeClass('fixed');
                $('header').css({
                    "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
                    "padding": "30px 0 65px 0"
                });

                $('header .navicon').css({
                    "top": "48px",
                });
            }
        });
    });
    /***************** Smooth Scrolling ******************/

    $(function () {

        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 2000);
                    return false;
                }
            }
        });

    });

});
