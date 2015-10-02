(function (window, $) {

    var Cart = function () {
        var domElems = {
            itemTmpl: $('.cart__item_tmpl'),
            totals: $('.cart .totals')
        };


        this.init = function () {

        };

        this.addToCart = function (item) {
            ls.append(item, 'cart');
        };

        this.getCart = function () {
            return ls.getField('cart');
        };


        this.viewCart = function () {
            var __self = this;

            var list = this.getCart().map(function (item) {
                return this.viewCartItem(item);
            });

            domElems.totals.append(list);
        };


        this.viewCartItem = function (item) {
            var newItem = domElems.itemTmpl.clone().removeClass('.cart__item_tmpl');
            newItem.find('.quantity').html(item.qty);
            newItem.find('.itemName').html(item.name).attr('href', item.url);
            newItem.find('.price').html(item.price);

        };

        this.init();

    };

    window.cart = new Cart();


})(window, jQuery);


var item1 = {
    id: 'B216',
    name: 'Noski',
    price: '23.5',
    price: '23.5'
};



cart.addToCart(item1);
