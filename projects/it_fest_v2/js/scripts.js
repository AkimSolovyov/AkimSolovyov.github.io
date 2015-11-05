$(document).ready(function () {

    toggleForm();
    choosePanel();
    changeTicketIcon();
    showFullProgram();

    $("#speakers").owlCarousel({
        // Most important owl features
        items: 4,
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


    $("#infopartners").owlCarousel({
        // Most important owl features
        items: 3,
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

    $("#main-partners").owlCarousel({
        // Most important owl features
        items: 3,
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

    $("#gold-partners").owlCarousel({
        // Most important owl features
        items: 3,
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


    var m = new mandrill.Mandrill('PiO9LcolFIs57A1H2URuEQ');

    function log(obj) {
        $('#response').text(JSON.stringify(obj));
    }


    $("#sendEmail").click(function (event) {
        event.preventDefault();
        var plan = $('.sign-up__plan').val(),
            name = $('.sign-up__name').val(),
            // surname = $('.sign-up__surname').val(),
            phone = $('.sign-up__phone').val(),
            // email = $('.sign-up__email').val(),
            date = new Date();

        var $form = $("#reg_form");
        $.ajax({
            type: 'POST',
            url: '/crm/registration.php',
            dataType: 'json',
            data: $form.serialize()
        });

        date = date.toDateString();

        var params = {
            "message": {
                "from_email": "itfest@goit.com.ua",
                "to": [{
                    "email": "itfest@goit.com.ua"
            }],
                "subject": "Лиды с IT Fest " + date,
                "html": '<p>Формат:' + plan + '<br>' +
                    'Имя:' + name + '<br>' +
                    /*'Фамилия:' + surname + '<br>' +*/
                    'Телефон:' + phone + '<br>'
                    /*+
                                       'Email:' + email + '</p>'*/
                    ,
                'autotext': 'true',
                'track_opens': 'true'
            }
        };


        if ((name && /*surname &&*/ phone /*&& email*/ ) !== '') {
            m.messages.send(params, function (res) {
                log(res);
            }, function (err) {
                log(err);
            });


            $('.sign-up-form-block').toggle();
            $('.curtain').toggle();

            if (plan == "online" || plan == "online_entry") {
                window.open("https://itfest-online.ticketforevent.com/ru/?draft_mode=on", '_blank');
            }

            window.open("https://itfest.ticketforevent.com/ru/?draft_mode=on", '_blank');
            $('.sign-up').trigger('reset');


            yaCounter31644913.reachGoal('key2');
            return false;
        }

    });


});


var ticketType = "offline";

function toggleForm() {
    $('.js-form-btn, .curtain').click(function () {
        $('.sign-up-form-block').toggle();
        $('.curtain').toggle();
        $('.sign-up__name').focus();
        if ($(this).hasClass("js-form-btn--online")) { //check if online ticket is chosen
            ticketType = "online";
        }
        return false;
    });
}

function show(id) {
    var h = $('.s' + id).offset().top;

    if (id != 1) {
        h = h - 45;
    }

    $("body,html").animate({
        "scrollTop": h
    }, 1000);

    if (id < 10) {
        $(".icon").click();
    }
}


function choosePanel() {

    $('.timeline__btn').first().addClass('timeline__btn--chosen');
    $('.tickets__btn').first().addClass('tickets__btn--chosen');


    $('.timeline__btn').click(function () {
        $('.timeline__btn').removeClass('timeline__btn--chosen');
        $(this).addClass('timeline__btn--chosen');
    });

    $('.tickets__btn').click(function () {
        $('.tickets__btn').removeClass('tickets__btn--chosen');
        $(this).addClass('tickets__btn--chosen');
    });

    $('.js-main-stage').click(function () {
        $('.js-main-stage-panel').trigger('click');
    });

    $('.js-tech-stage').click(function () {
        $('.js-tech-stage-panel').trigger('click');
    });

    $('.js-interactive-area').click(function () {
        $('.js-interactive-area-panel').trigger('click');
    });

    $('.js-visit-us').click(function () {
        $('.js-visit-us-panel').trigger('click');
    });

    $('.js-online').click(function () {
        $('.js-online-panel').trigger('click');
    });

    $('.js-backup').click(function () {
        $('.js-backup-panel').trigger('click');
    });

    return false;
}

function showFullProgram() {
    $('.open').click(function () {
        $('.open').attr('checked', 'checked');
        $('.labl-open').hide();
    });

}



function changeTicketIcon() {
    window.onscroll = function () {
        var offset = $(window).scrollTop();
        if (offset > 5) {
            $('.icon-ticket').hide('slow');
            $('.icon-ticket-small').show('slow');
            $('.icon-counter').hide('slow');
        } else {
            $('.icon-ticket').show('slow');
            $('.icon-ticket-small').hide('slow');
            $('.icon-counter').show('slow');
        }

    };
}

$(document).ready(function () {
    $(".icon").click(function () {
        $(".icon").toggleClass('icon--cross');
        $(".mobilenav").fadeToggle(500);
        $(".top-menu").toggleClass("top-animate");
        $("body").toggleClass("noscroll");
        $(".mid-menu").toggleClass("mid-animate");
        $(".bottom-menu").toggleClass("bottom-animate");
    });
});

// PUSH ESC KEY TO EXIT

$(document).keydown(function (e) {
    if (e.keyCode == 27) {
        $(".mobilenav").fadeOut(500);
        $(".top-menu").removeClass("top-animate");
        $("body").removeClass("noscroll");
        $(".mid-menu").removeClass("mid-animate");
        $(".bottom-menu").removeClass("bottom-animate");
    }
});
