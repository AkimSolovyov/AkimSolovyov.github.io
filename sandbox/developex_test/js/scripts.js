    $(document).ready(function () {
        $('.tabs').children('.tabs-head').first().children('.tabs-link').addClass('is-active').next().addClass('is-open').show();
        $('.tabs').on('click', '.tabs-head > .tabs-link', function (event) {
            if (!$(this).hasClass('is-active')) {
                event.preventDefault();
                $('.tabs .is-open').removeClass('is-open').hide();
                $(this).next().toggleClass('is-open').toggle();
                $('.tabs').find('.is-active').removeClass('is-active');
                $(this).addClass('is-active');
            } else {
                event.preventDefault();
            }
        });
    });
