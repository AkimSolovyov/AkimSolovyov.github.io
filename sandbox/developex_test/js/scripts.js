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

        $(".content-block-comment-button-block").hide();

        $(".content-block-comment-text").click(function () {
            $(this).next().next().toggle();
        });


        $('.add-note-input').click(function (e) {
            $(this).css('z-index', '999');
            $('.overlay').fadeIn(300);
        });

        $('.overlay').click(function (e) {
            $('.overlay').fadeOut(300, function () {
                $('.add-note-input').css('z-index', '1');
            });
        });

        $('.comments-block').children().hover(function () {
            $(this).siblings().stop().fadeTo(500, 0.3);
        }, function () {
            $(this).siblings().stop().fadeTo(500, 1);
        });
        //area 2
        $('.content-block').children().hover(function () {
            $(this).siblings().stop().fadeTo(500, 0.3);
        }, function () {
            $(this).siblings().stop().fadeTo(500, 1);
        });

    });
