$(document).ready(function () {

    function setHeight() {
        windowHeight = $(window).innerHeight();
        $('.for-tester').css('min-height', windowHeight - 425);
        $('.for-startup').css('min-height', windowHeight - 50);
        $('.for-startup').css('padding-top', windowHeight / 10);
        $('.orgs').css('min-height', windowHeight);
        $('.staff').css('min-height', windowHeight);
        $('.photos-block').css('min-height', windowHeight + 50);
    };
    setHeight();

    $(window).resize(function () {
        setHeight();
    });




    $('.gallery-zoomed').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4000,
        asNavFor: '.gallery'
    });

    $('.gallery').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.gallery-zoomed',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });

});

var menu = 1;
var omenu = 1;

$(window).scroll(function () {
    curpos = $(document).scrollTop();
    if (curpos < $('.s1').offset().top) {
        menu = 1;
    } else if ((curpos >= $('.s2').offset().top) && (curpos < $('.s3').offset().top)) {
        menu = 2;
    } else if ((curpos >= $('.s3').offset().top) && (curpos < $('.s4').offset().top)) {
        menu = 3;
    } else if (curpos >= $('.s4').offset().top) {
        menu = 4;
    } else if (curpos >= $('.s5').offset().top) {
        menu = 5;
    }
});

function show(id) {
    var h = $('.s' + id).offset().top;

    if (id != 1) {
        h = h + 30;
    }

    $("body,html").animate({
        "scrollTop": h
    }, 1000, function () {
        //$('.bottom_nav_bg').css('display', 'none');
        // $('.s' + id + ' .bottom_nav_bg').css('display', 'block');
    });

}

/********************Gallery**********************/
