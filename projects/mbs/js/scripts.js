$(document).ready(function () {


    function setHeight() {
        windowHeight = $(window).innerHeight();
        $('.hero').css('min-height', windowHeight);
        $('.hero .hero-content').css('padding-top', windowHeight / 4);


    };
    setHeight();

    $(window).resize(function () {
        setHeight();
    });


    function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
            center: new google.maps.LatLng(50.4474701, 30.4219109),
            zoom: 18,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        var map = new google.maps.Map(mapCanvas, mapOptions)
        var companyPos = new google.maps.LatLng(50.447556, 30.422345);
        var companyMarker = new google.maps.Marker({
            position: companyPos,
            map: map,
            title: "Zeo Allience"
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);

    $(".speakers").owlCarousel({
        // Most important owl features
        items: 2,
        itemsCustom: false,
        itemsDesktop: [1200, 3],
        itemsDesktopSmall: [750, 2],
        itemsTablet: [550, 1],
        itemsTabletSmall: true,
        itemsMobile: [320, 1],
        singleItem: false,
        itemsScaleUp: false,

        //Basic Speeds
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1000,

        //Autoplay
        autoPlay: false,
        stopOnHover: false,

        // Navigation
        navigation: true,
        navigationText: ["", ""],
        rewindNav: true,
        scrollPerPage: false,

        //Pagination
        pagination: false,
        paginationNumbers: false,

        // Responsive
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,

        // CSS Styles
        baseClass: "owl-carousel",
        theme: "owl-theme",

        //Lazy load
        lazyLoad: false,
        lazyFollow: true,
        lazyEffect: "fade",


        //Mouse Events
        dragBeforeAnimFinish: true,
        mouseDrag: true,
        touchDrag: true,

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
                    /*  "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
                      "padding": "30px 0 25px 0"*/
                });

                $('header').addClass('.header-border');

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
