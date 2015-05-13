"use strict";
$(document).ready(function () {
    var item_number,
        clone;

    $(".js-gallery-zoom").click(function () {
        item_number = $(this).parents(".gallery__item").index();
        clone = $("[data-number='" + item_number + "']");
        $("[data-number='" + item_number + "']").removeClass("gallery__image").addClass("gallery__image-preview");
        $(".galllery__preview-box").append(clone);
        $(".galllery__preview-box").show();
         $(".gallery__container").hide();
    });

    $(".gallery__x-button").click(function () {
        location.reload();
    });

});
