$(document).ready(function () {
    Handlebars.registerHelper('niceDate', function (unixtime) {
        return moment.unix(unixtime).fromNow();
    })

    var data = {
        location: DATA.request.location,
        numberOfProperties: DATA.response.listings.length,
        searchDate: DATA.response.created_unix,
        properties: DATA.response.listings.map(formatProperty)
    };


    function formatProperty(originalProperty) {
        return {
            title: originalProperty.title,
            price: originalProperty.price,
            currency: originalProperty.price_currency,
            imgURL: originalProperty.img_url

        };

    }


    var rendered = renderTemplate('entry-template', data);
    $('#content').html(rendered);
});


function renderTemplate(templateName, data) {
    var templateString = $('#' + templateName).html();

    var templateFunc = Handlebars.compile(templateString);
    return templateFunc(data);
}
