$(document).ready(function () {


    function setHeight() {
        windowHeight = $(window).innerHeight();
        $('.for-tester').css('min-height', windowHeight - 480);
        $('.prices').css('min-height', windowHeight - 200);
        $('.prices').css('padding-top', windowHeight / 10);
        $('.contacts').css('min-height', windowHeight - 400);
        $('.contacts').css('padding-top', windowHeight / 20);
    };

    setHeight();
    toggleMenu();
    $("#speakers").owlCarousel({
        // Most important owl features
        items: 4,
        itemsCustom: false,
        itemsDesktop: [1024, 4],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
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

    $("#speakers").owlCarousel();

    /*********************** Waypoints ********************************/

    $('.s2').waypoint(function () {
        $('.event-schedule-day1').addClass('animated fadeInUp delay-1s');
    }, {
        offset: '120%'
    });
    $('.event-schedule-day2').waypoint(function () {
        $('.event-schedule-day2').addClass('animated fadeInUp delay-1s');
    }, {
        offset: '150%'
    });
    $('.event-schedule-day3').waypoint(function () {
        $('.event-schedule-day3').addClass('animated fadeInUp delay-1s');
    }, {
        offset: '150%'
    });
    $('.s2_5').waypoint(function () {
        $('.block-list--more').addClass('animated fadeInUp delay-0.5s');
    }, {
        offset: '100%'
    });

    $('.s3').waypoint(function () {
        $('.prices-block').addClass('animated fadeInUp delay-1s');
    }, {
        offset: '100%'
    });
    $('.s3').waypoint(function () {
        $('.prices__buy-button').addClass('animated fadeInUp delay-1s');
    }, {
        offset: '100%'
    });

    $('.s3').waypoint(function () {
        $('.prices-additional').addClass('animated fadeInUp delay-1s');
    }, {
        offset: '100%'
    });
    $('.s4').waypoint(function () {
        $('.contacts__inner').addClass('animated fadeIn');
    }, {
        offset: '100%'
    });

    $('.s4').waypoint(function () {
        $('.manager-contacts').addClass('animated fadeInUp');
    }, {
        offset: '100%'
    });

});


function toggleMenu() {
    $('.nav-toggle__btn').click(function () {
        $('.top-nav').toggleClass('top-nav-expand');
        $('.top-nav__link').toggleClass('top-nav__link--element');
    })
}

function show(id) {
    var h = $('.s' + id).offset().top;

    if (id != 1) {
        h = h - 100;
    }

    $("body,html").animate({
        "scrollTop": h
    }, 1000);

}

function toggle_menu() {
    $(".bottom-nav__link-hide").click(function () {
        $(this).hide();
        $(".bottom-nav__link-show").show();
        console.log("click");
    })
}
