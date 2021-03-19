class Cart{
    constructor(public num_items:number=0,public cart_items:number[]=Array<any>()){
    }

    addToCart(product_id:string):void{
        this.num_items++
        let product_price:string = document.getElementById(product_id).innerHTML.split('$')[1]
        console.log("->"+product_price)
        
    }
}


let curr_cart:Cart = new Cart()

// OnClick Functions
function product_101(){
    curr_cart.addToCart("101")
}

function product_102(){
    curr_cart.addToCart("102")
    
}

function product_103(){
    curr_cart.addToCart("103")
    
}
function product_104(){
    curr_cart.addToCart("104")
    
}
function product_105(){
    curr_cart.addToCart("105")
    
}
function product_106(){
    curr_cart.addToCart("106")
    
}
function product_107(){
    curr_cart.addToCart("107")
    
}
function product_108(){
    curr_cart.addToCart("108")
    
}
function product_109(){
    curr_cart.addToCart("109")
    
}