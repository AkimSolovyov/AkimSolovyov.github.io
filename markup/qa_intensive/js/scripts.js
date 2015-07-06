$(document).ready(function () {

    function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
            center: new google.maps.LatLng(50.4174791, 30.4768335),
            zoom: 17,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        var map = new google.maps.Map(mapCanvas, mapOptions)
        var companyPos = new google.maps.LatLng(50.417250, 30.476777);
        var companyMarker = new google.maps.Marker({
            position: companyPos,
            map: map,
            title: "Company Name Head Office"
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);



    function setHeight() {
        windowHeight = $(window).innerHeight();
        $('.for-tester').css('min-height', windowHeight - 590);
        $('.prices').css('min-height', windowHeight - 200);
        $('.prices').css('padding-top', windowHeight / 10);
        $('.contacts').css('min-height', windowHeight - 400);
        $('.contacts').css('padding-top', windowHeight / 20);
    };
    setHeight();
    toggleMenu();

    $(window).resize(function () {
        setHeight();
    });


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
