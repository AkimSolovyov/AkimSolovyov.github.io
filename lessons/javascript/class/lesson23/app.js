(function () {
    'use trict';
    var URL = 'http://www.carqueryapi.com/api/0.3/&callback=?';
})

$.getJSON(this.base_url + "?callback=?", {
    cmd: "getMakes",
    year: "2009"
}, function (data) {

    //The 'data' variable contains all response data.
    var makes = data.Makes;
    for (var i = 0; i < makes.length; i++) {
        //You can now do what you like with the response data
        alert(makes[i].make_display);
    }
});
