$(document).ready(function () {

    var checked_item;


    $('.menu__menu-item').click(function () {
        $('.menu__menu-item').removeClass('menu__menu-item-hovered');
        $(this).addClass('menu__menu-item-hovered');
        checked_item = $(this);
    });

    $('.menu-item__link').click(function () {
        $('.menu-item__link').removeClass('menu-item__link-hovered');
        $('.submenu-item__link').removeClass('submenu-item__link-hovered');
        $(this).addClass('menu-item__link-hovered');
    });

    $('.submenu-item__link').click(function () {
        $('.submenu-item__link').removeClass('submenu-item__link-hovered');
        $(this).addClass('submenu-item__link-hovered');
        $('.menu-item__link').removeClass('menu-item__link-hovered');
        $(this).parent().parent().parent().find('.menu-item__link').addClass('menu-item__link-hovered');
    });


    $(".menu__menu-item").hover(
        function () {
            $('.menu__menu-item').removeClass('menu__menu-item-hovered');
            $(this).addClass('menu__menu-item-hovered');
        },
        function () {
            $('.menu__menu-item').removeClass('menu__menu-item-hovered');
            checked_item.addClass('menu__menu-item-hovered');
        }
    );


})
