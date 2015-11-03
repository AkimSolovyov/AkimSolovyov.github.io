var FIXTURES = require('./fixtures.json');

function checkFormErrors(pageObject, expectedErrors) {
    for (var field in expectedErrors) {
        var elementName = '@' + field + 'Error';

        pageObject.expect.element(elementName).text.to.equal( expectedErrors[field] )
    }
}

module.exports = {
    'Negative: test registration form' : function (client) {
        var registration = client.page.registration();

        FIXTURES.forEach(function(data) {
            registration.navigate()
                .enterRegistrationData(data.inputs)
                .submit();

            checkFormErrors(registration, data.errors);
        });

        client.end();
    }
};
