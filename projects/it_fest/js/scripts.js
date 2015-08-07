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

    toggleMenu();
    closeSocial();
    toggleForm();
    hoverBlock();

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
        itemsMobile: [420, 1],
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


    $("#infopartners").owlCarousel({
        // Most important owl features
        items: 4,
        itemsCustom: false,
        itemsDesktop: [1024, 3],
        itemsDesktopSmall: [815, 2],
        itemsTablet: [640, 1],
        itemsTabletSmall: false,
        itemsMobile: [420, 1],
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

    function log(obj) {
        $('#response').text(JSON.stringify(obj));
    }

    // create a new instance of the Mandrill class with your API key
    var m = new mandrill.Mandrill('PiO9LcolFIs57A1H2URuEQ');

    $('#sendEmail').click(function () {
        var name = $('.sign-up__name').val(),
            surname = $('.sign-up__surname').val(),
            phone = $('.sign-up__phone').val(),
            email = $('.sign-up__email').val(),
            date = new Date();


        date = date.toDateString();

        var params = {
            "message": {
                "from_email": "itfest@goit.com.ua",
                "to": [{
                    "email": "itfest@goit.com.ua"
            }],
                "subject": "Лиды с IT Fest " + date,
                "html": '<p>Имя:' + name + '<br>' +
                'Фамилия:' + surname + '<br>' +
                    'Телефон:' + phone + '<br>' +
                    'Email:' + email + '</p>',
                'autotext': 'true',
                'track_opens': 'true'
            }
        }

        m.messages.send(params, function (res) {
            log(res);
        }, function (err) {
            log(err);
        })

        $('.sign-up-form-block').toggle();
        $('.curtain').toggle();

        if (ticketType == "online") {
            window.open("https://itfest-online.ticketforevent.com/ru/?draft_mode=on", '_blank');
        }

        window.open("https://itfest.ticketforevent.com/ru/?draft_mode=on", '_blank');
        return false;
    });


});

var ticketType = "offline";

function toggleMenu() {
    $('.nav-toggle__btn').click(function () {
        $('.top-nav').toggleClass('top-nav-expand');
        $('.top-nav__link').toggleClass('top-nav__link--mob');
        $('.top-nav__element--registration').toggleClass('top-nav__element--reg-mob');
    })
}

function hoverBlock() {
    $('.event-interactive-area-section__interactive-area-block').hover(

        function () {
            $(this).css({
                'border-color': '#ff6c00'
            });
            $(this).children().find('.interactive-area-block_icon').css({
                'color': '#ff6c00'
            });

        },
        function () {
            $(this).css({
                'border-color': '#dee0e9'
            });
            $(this).children().find('.interactive-area-block_icon').css({
                'color': '#000'
            });
        });
}



function closeSocial() {
    $('.social-aside__link--close').click(function () {
        $('.social-aside').hide();

    })
}

function toggleForm() {
    $('.js-form-btn, .curtain').click(function () {
        $('.sign-up-form-block').toggle();
        $('.curtain').toggle();
        $('.sign-up__name').focus();
        if ($(this).hasClass("js-form-btn--online")) { //check if online ticket is chosen
            ticketType = "online";
        }
        return false;
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
