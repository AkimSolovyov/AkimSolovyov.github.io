(function (window, $) {
    var url = 'http://node.dev.puzankov.com/rss/data';


    $.ajax({
            url: url,
            method: 'GET',
            dataType: 'json'
        })
        .done(function (data) {
            console.log(data);
            console.log('done!');
        })
        .success(function (data) {
            console.log(data);
        })
        .error(function (e) {
            console.log('error!');
        });

})(window, jQuery);
