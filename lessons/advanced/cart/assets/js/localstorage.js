(function (window, $) {

    var Local = function () {
        var ls = localStorage;

        this.init = function () {
            ls['cart'] = '[]';
        };

        this.append = function (item, field) {
            var updatedList = this.getField(field);
            updatedList.push(item);
            ls[field] = JSON.stringify(updatedList);
        };


        this.getField = function (field) {
            return JSON.parse(ls[field]);
        };

        this.init();

    };

    window.ls = new Local();




})(window, jQuery);
