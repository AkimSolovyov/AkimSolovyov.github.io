$(document).ready(function () {

    function setHeight() {
        windowHeight = $(window).innerHeight();
        windowWidth = $(window).innerWidth();
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
        initGallery();
    });



    function initGallery() {

        if (windowWidth > 420) {
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
    }, 1000);

}

function toggle_menu() {
    $(".bottom-nav__link-hide").click(function () {
        $(this).hide();
        $(".bottom-nav__link-show").show();
        console.log("click");
    })
}
