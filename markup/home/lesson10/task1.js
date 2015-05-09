"use strict";
$(document).ready(function () {

    var clone,
        thumb;

    $(".js-gallery-zoom").click(function () {
        $(".gallery__blackout").css("opacity", "0.1");

        alert(thumb);
        $(".galllery__preview-box").show();

        clone = $(this).find(".gallery__image").clone();
        $(".galllery__preview-box").append(clone);


    });



});
