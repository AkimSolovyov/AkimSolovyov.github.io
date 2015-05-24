$(document).ready(function () {
    $('#header-form').submit(function () {
        /* draft variant for select submit */
        // $('#header-form_select-content').val($('#header-form_select').html());
        $('#header-form_adress-content').val($('#header-form_adress').html());
    });

    $('.header-form__input:not(#header-form_select)').click(function () {
        document.execCommand('selectAll', false, null)

    });
})
