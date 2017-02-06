window.onload = function () {

    var page = 3,
        page_number = $(".pages a").length - 1;

    $(".pages a").eq(page).addClass("chosen");

    $(".pages a").click(function () {
        page = ($(this).index()-1);
        $(".pages a").removeClass("chosen");
        $(this).addClass("chosen");
    });

    $(".js-first").click(function () {
        page = 0;
        $(".pages a").removeClass("chosen");
        $(".pages a").eq(page).addClass("chosen");
    });

    $(".js-next").click(function () {
        ++page;
        if (page > page_number) {
            page = 0;
        }
        $(".pages a").removeClass("chosen");
        $(".pages a").eq(page).addClass("chosen");
    });

    $(".js-prev").click(function () {
        --page;
        if (page < 0) {
            page = page_number
        }
        $(".pages a").removeClass("chosen");
        $(".pages a").eq(page).addClass("chosen");
    });

    $(".js-last").click(function () {
        page = page_number;
        $(".pages a").removeClass("chosen");
        $(".pages a").eq(page).addClass("chosen");
    });

};
