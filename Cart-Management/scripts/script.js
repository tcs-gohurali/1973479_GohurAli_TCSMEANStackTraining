var Cart = /** @class */ (function () {
    function Cart(num_items, total_cost, cart_items) {
        if (num_items === void 0) { num_items = 0; }
        if (total_cost === void 0) { total_cost = 0; }
        if (cart_items === void 0) { cart_items = Array(); }
        this.num_items = num_items;
        this.total_cost = total_cost;
        this.cart_items = cart_items;
    }
    Cart.prototype.addToCart = function (product_id) {
        // Check if items already exist in storage
        // also updates items array from storage
        this.checkStorage();
        // Gets the price from the HTML tag
        var product_price = document.getElementById("price_" + product_id).innerHTML.split('$')[1];
        // check the cart number of items
        if (this.cart_items.length > 0) {
            // if greater than 0 then we need to ---
            for (var i = 0; i < this.cart_items.length; i++) {
                console.log("Item ID = " + product_id + " ----------- Current ID = " + this.cart_items[i]['product_id']);
                if (product_id == this.cart_items[i]['product_id']) {
                    this.cart_items[i]['quantity']++;
                    break;
                }
                // if we reach the end of the list and still don't have a match, append to the list
                else if ((i == this.cart_items.length - 1) && (product_id != this.cart_items[i]['product_id'])) {
                    console.log("Reached the end -- need to add to list $$$$");
                    console.log("Item ID = " + product_id + " &&&&&&&&& Current ID = " + this.cart_items[i]['product_id']);
                    this.cart_items.push({
                        product_id: product_id,
                        name: document.getElementById("title_" + product_id).innerHTML,
                        price: product_price,
                        image: document.getElementById("pic_" + product_id).getAttribute('src'),
                        quantity: 0
                    });
                }
            }
        }
        else {
            this.cart_items.push({
                product_id: product_id,
                name: document.getElementById("title_" + product_id).innerHTML,
                price: product_price,
                image: document.getElementById("pic_" + product_id).getAttribute('src'),
                quantity: 1
            });
        }
        this.num_items++;
        this.total_cost += parseFloat(product_price);
        sessionStorage.setItem("cart_items", JSON.stringify(this.cart_items));
        sessionStorage.setItem("total_cost", JSON.stringify(this.total_cost));
        sessionStorage.setItem("total_num_items", JSON.stringify(this.num_items));
        this.updateCartLink();
        console.log(sessionStorage);
    };
    Cart.prototype.updateCartLink = function () {
        var exists = this.checkStorage();
        if (exists) {
            var total_num_items = JSON.parse(sessionStorage.getItem("total_num_items"));
            var cart_link_button = document.getElementById("navCartLink");
            cart_link_button.innerHTML = "Cart (" + total_num_items + ")";
        }
    };
    Cart.prototype.checkStorage = function () {
        function storageExists() {
            if (sessionStorage.getItem('cart_items') === null) {
                console.log("doesnt exist");
                return false;
            }
            else {
                console.log("exists in storage");
                return true;
            }
        }
        var exists = storageExists();
        if (exists) {
            this.cart_items = JSON.parse(sessionStorage.getItem('cart_items'));
            this.total_cost = JSON.parse(sessionStorage.getItem('total_cost'));
            this.num_items = JSON.parse(sessionStorage.getItem('total_num_items'));
        }
        return exists;
    };
    return Cart;
}());
function displayCart() {
    console.log("In the display function -- !");
    // Once on the cart page -- show the part on a table
    // Get the cart information from storage
    var exists = curr_cart.checkStorage();
    console.log("Here is your array size = " + curr_cart.cart_items.length);
    console.log("Here is the current array = " + JSON.stringify(curr_cart.cart_items));
    // Get the table
    var table = document.getElementById("cartTable");
    var tbody = document.getElementsByTagName("tbody")[0];
    for (var i = 0; i < curr_cart.cart_items.length; i++) {
        var new_row_1 = tbody.insertRow(i);
        var img_cell = new_row_1.insertCell(0);
        var name_cell_1 = new_row_1.insertCell(1);
        var price_cell_1 = new_row_1.insertCell(2);
        var quantity_cell_1 = new_row_1.insertCell(3);
        var quantity2price = new_row_1.insertCell(4);
        img_cell.innerHTML = "<img class='cartProductImage' src='" + curr_cart.cart_items[i]['image'] + "'>";
        name_cell_1.innerHTML = curr_cart.cart_items[i]['name'];
        price_cell_1.innerHTML = "$" + curr_cart.cart_items[i]['price'];
        quantity_cell_1.innerHTML = curr_cart.cart_items[i]['quantity'];
        quantity2price.innerHTML = "$" + (parseInt(curr_cart.cart_items[i]['price']) * parseInt(curr_cart.cart_items[i]['quantity']));
    }
    // add the final row that shows the total
    var new_row = tbody.insertRow(-1);
    var name_cell = new_row.insertCell(0);
    var quantity_cell = new_row.insertCell(1);
    var price_cell = new_row.insertCell(2);
    var total_price = new_row.insertCell(3);
    name_cell.innerHTML = "<b>Total</b>";
    name_cell.setAttribute('colspan', '2');
    quantity_cell.innerHTML = "";
    total_price.innerHTML = "$" + sessionStorage['total_cost'];
}
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
function navigate() {
    curr_cart.updateCartLink();
}
var curr_cart = new Cart();
document.addEventListener("DOMContentLoaded", function () {
    navigate();
});
