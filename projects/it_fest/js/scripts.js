$(document).ready(function () {
    var animatedHeader = (function () {

        var docElem = document.documentElement,
            header = document.querySelector('.js-header'),
            didScroll = false,
            changeHeaderOn = 300;

        function init() {
            window.addEventListener('scroll', function (event) {
                if (!didScroll) {
                    didScroll = true;
                    setTimeout(scrollPage, 250);
                }
            }, false);
        }

        function scrollPage() {
            var sy = scrollY();
            if (sy >= changeHeaderOn) {
                $('.js-header').addClass('js-header-shrink');
            } else {
                $('.js-header').removeClass('js-header-shrink');
            }
            didScroll = false;
        }

        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }

        init();

    })();

    setHeight();
    toggleMenu();

    $(".event-info-section__hidden-info-block").hide();

    $(".js-hidden-block-toggle").click(function () {
        $(".event-info-section__hidden-info-block").fadeToggle("slow", "linear");
        return false;
    });

    $("#speakers").owlCarousel({
        // Most important owl features
        items: 4,
        itemsCustom: false,
        itemsDesktop: [1024, 4],
        itemsDesktopSmall: [815, 3],
        itemsTablet: [640, 2],
        itemsTabletSmall: false,
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
        rewindNav: false,
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


    $(window).resize(function () {
        setHeight();
    });


    $('.s2').waypoint(function () {
        $('.event-schedule-day1').addClass('animated fadeInUp delay-1s');
    }, {
        offset: '120%'
    });

});


function setHeight() {
    windowHeight = $(window).innerHeight();
    //$('.sub-header').css('min-height', windowHeight + 100);
    // $('.event-contacts-section').css('min-height', windowHeight - 150);

};

function toggleMenu() {
    $('.nav-toggle__btn').click(function () {
        $('.top-nav').toggleClass('top-nav-expand');
        $('.top-nav__link').toggleClass('top-nav__link--element');
    })
}

function show(id) {
    var h = $('.s' + id).offset().top;

    if (id != 1) {
        h = h - 45;
    }

    $("body,html").animate({
        "scrollTop": h
    }, 1000);

}
