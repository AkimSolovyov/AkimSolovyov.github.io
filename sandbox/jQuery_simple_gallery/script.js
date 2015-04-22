"use strict";
$(document).ready(function () {

    var clone,
        thumb,
        picNum = $(".gallery").children().length - 1;

    console.log(picNum, thumb);

    $(".js-slide_next").click(function () {
        next();
    });

    $(".js-slide_prev").click(function () {
        previous();
    });

    $(".js-slide_ex").click(function () {
        $(".gallery_slider_box").hide();
        $(".blackout").css("opacity", "1");
        $(".gallery_slider_container img").remove(); //deleting previous pic for re-click on thumb
    });


    $('.gallery img').click(function () {
        thumb = $(this).index();
        $(".gallery_slider_box").show();
        $(".blackout").css("opacity", "0.1");
        load();
    });


    function load() {
        clone = $(".gallery img").eq(thumb).clone();
        $(".gallery_slider_container").append(clone);
        console.log(thumb);
    }


    function next() {
        console.log(thumb);
        if (thumb <= picNum - 1) {
            clone = clone = $(".gallery img").eq(++thumb).clone();

        } else {
            clone = clone = $(".gallery img").eq(0).clone();
            thumb = 0;

        }

        $(".gallery_slider_container img").fadeIn(300).fadeOut(300, function () {
            $(this).remove();
            $(".gallery_slider_container").append(clone);

        });


    }

    function previous() {
        console.log(thumb);
        clone = clone = $(".gallery img").eq(--thumb).clone();
        $(".gallery_slider_container img").fadeIn(300).fadeOut(300, function () {
            $(this).remove();
            $(".gallery_slider_container").append(clone);
        });
    }


    $(document).keydown(function (event) { // exit on escape and key controls
        if (event.keyCode == "27") {
            $(".gallery_slider_box").hide();
            $(".blackout").css("opacity", "1");
            $(".gallery_slider_container img").remove(); //deleting previous pic for re-click on thumb
        }

        if (event.keyCode == "37" || event.keyCode == "33") {
            previous();
        }



        if (event.keyCode == "39" || event.keyCode == "34" || event.keyCode == "32") {
            next();
        }

    });

});
