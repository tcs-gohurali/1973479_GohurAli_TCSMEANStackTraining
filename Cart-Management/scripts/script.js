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
        this.checkStorage();
        var product_price = document.getElementById("price_" + product_id).innerHTML.split('$')[1];
        // this.cart_items.push({
        //     id : product_id,
        //     name : document.getElementById("title_"+product_id).innerHTML,
        //     price : product_price
        // })
        if (this.cart_items.length > 0) {
            for (var i = 0; i < this.cart_items.length; i++) {
                var obj = JSON.parse(JSON.stringify(this.cart_items[i]));
                console.log(product_id + " --- " + obj[product_id]);
                // if(product_id === obj[product_id]){
                //     obj[product_id].quantity++
                // }
                // if(i == this.cart_items.length - 1){
                //     this.cart_items.push(
                //         {
                //             product_id: {
                //                 name : document.getElementById("title_"+product_id).innerHTML,
                //                 price : product_price,
                //                 quantity: 1
                //             }           
                //         }
                //     )
                // }
            }
        }
        else {
            this.cart_items.push({
                product_id: {
                    name: document.getElementById("title_" + product_id).innerHTML,
                    price: product_price,
                    quantity: 1
                }
            });
        }
        this.num_items++;
        this.total_cost += parseFloat(product_price);
        sessionStorage.setItem("cart_items", JSON.stringify(this.cart_items));
        sessionStorage.setItem("total_cost", JSON.stringify(this.total_cost));
        console.log(sessionStorage);
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
        }
        return exists;
    };
    Cart.prototype.displayCart = function () {
        var exists = this.checkStorage();
        if (exists) {
            // let unique_ids = new Set();
            // for(const item_idx in this.cart_items){
            //     unique_ids.add(this.cart_items[item_idx].id)
            // }
            // // Get the table
            // let table:HTMLElement = document.getElementById("cartTable")
            // let tbody = document.getElementsByTagName("tbody")[0]
            // for(const item_idx in unique_ids){
            //     let curr_id = unique_ids[item_idx]
            //     let new_row = tbody.insertRow(parseInt(item_idx))
            // }
        }
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
