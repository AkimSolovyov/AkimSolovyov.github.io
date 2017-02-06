$(document).ready(function() {
    Handlebars.registerHelper('niceDate', function(unixTime) {
        return moment.unix(unixTime).fromNow();
    });

    var data = {
        location: DATA.request.location,
        numberOfProperties: DATA.response.listings.length,
        searchDate: DATA.response.created_unix,
        properties: DATA.response.listings.map(formatProperty)
    };

    var rendered = renderTemplate('entry-template', data);
    $('#content').html(rendered);
});

function formatProperty(originalProperty) {
    return {
        title: originalProperty.title,
        price: originalProperty.price,
        currency: originalProperty.price_currency,
        imgURL: originalProperty.img_url
    };
}

function renderTemplate(templateName, data) {
    var templateString = $('#' + templateName).html();

    var templateFunc = Handlebars.compile(templateString);
    return templateFunc(data);
}
