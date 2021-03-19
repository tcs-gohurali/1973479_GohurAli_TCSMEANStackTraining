var Cart = /** @class */ (function () {
    function Cart(num_items, cart_items) {
        if (num_items === void 0) { num_items = 0; }
        if (cart_items === void 0) { cart_items = Array(); }
        this.num_items = num_items;
        this.cart_items = cart_items;
    }
    Cart.prototype.addToCart = function (product_id) {
        this.num_items++;
        var product_price = document.getElementById(product_id).innerHTML.split('$')[1];
        console.log("->" + product_price);
    };
    return Cart;
}());
var curr_cart = new Cart();
// OnClick Functions
function product_101() {
    curr_cart.addToCart("101");
}
function product_102() {
    curr_cart.addToCart("102");
}
function product_103() {
    curr_cart.addToCart("103");
}
function product_104() {
    curr_cart.addToCart("104");
}
function product_105() {
    curr_cart.addToCart("105");
}
function product_106() {
    curr_cart.addToCart("106");
}
function product_107() {
    curr_cart.addToCart("107");
}
function product_108() {
    curr_cart.addToCart("108");
}
function product_109() {
    curr_cart.addToCart("109");
}
