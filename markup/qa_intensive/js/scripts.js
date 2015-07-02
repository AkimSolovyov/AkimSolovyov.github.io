$(document).ready(function () {

    function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
            center: new google.maps.LatLng(50.439017, 30.498723),
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }



        var map = new google.maps.Map(mapCanvas, mapOptions)
        var companyPos = new google.maps.LatLng(50.439017, 30.498723);
        var companyMarker = new google.maps.Marker({
            position: companyPos,
            map: map,
            title: "Company Name Head Office"
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);



    function setHeight() {
        windowHeight = $(window).innerHeight();
        $('.for-tester').css('min-height', windowHeight - 480);
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


function toggleMenu() {
    $('.bottom-nav__btn').click(function () {
        $('.bottom-nav').toggleClass('bottom-nav-expand')
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
