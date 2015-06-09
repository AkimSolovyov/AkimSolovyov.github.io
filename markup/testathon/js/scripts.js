$(document).ready(function () {

    function setHeight() {
        windowHeight = $(window).innerHeight();
        $('.for-tester').css('min-height', windowHeight - 425);
        $('.for-startup').css('min-height', windowHeight - 50);
        $('.for-startup').css('padding-top', windowHeight / 10);
        $('.orgs').css('min-height', windowHeight);
        $('.staff').css('min-height', windowHeight);
        $('.photos-block').css('min-height', windowHeight - 20);
        $('.photos-block').css('padding-top', windowHeight / 10);
    };
    setHeight();
    toggleMenu();
    initGallery();

    $(window).resize(function () {
        setHeight();
    });

});

function initGallery() {
    windowWidth = $(window).innerWidth();
    if (windowWidth > 620) {
        $('.gallery-zoomed').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            fade: true,
            autoplay: true,
            autoplaySpeed: 4000,
            cssEase: 'linear',
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

    } else {
        $('.gallery-zoomed').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            fade: true,
            autoplay: false,
            cssEase: 'linear',
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

    }


};


function toggleMenu() {
    $('.bottom-nav__btn').click(function () {
        $('.bottom-nav').toggleClass('bottom-nav-expand')
    })
}

function show(id) {
    var h = $('.s' + id).offset().top;

    if (id != 1) {
        h = h + 30;
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
