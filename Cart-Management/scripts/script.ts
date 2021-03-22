class Cart{
    constructor(public num_items:number=0,public total_cost:number=0,public cart_items:any[]=Array<any>()){
    }

    addToCart(product_id:string):void{
        // Check if items already exist in storage
        // also updates items array from storage
        this.checkStorage()

        // Gets the price from the HTML tag
        let product_price:string = document.getElementById("price_"+product_id).innerHTML.split('$')[1]
        // this.cart_items.push({
        //     id : product_id,
        //     name : document.getElementById("title_"+product_id).innerHTML,
        //     price : product_price
        // })

        // -- UPDATE QUANTITY -- 
        console.log("-- UPDATE QUANTITY --")

        // check the cart number of items
        if(this.cart_items.length > 0){
            console.log("pooooooooooooooooooooooooop")
            // if greater than 0 then we need to ---
            for(let i = 0; i < this.cart_items.length; i++){
                if(product_id === this.cart_items[i]['product_id']){
                    console.log("This is the same product ++++++++++++")
                    this.cart_items[i]['quantity']++
                }
                // const poop = this.cart_items[i]
                // console.log("pooper " + poop[101]['name'])
                // const obj = JSON.stringify(this.cart_items[i])
                // console.log(obj)
                // console.log(product_id + " --- " + obj[product_id])
                
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
        else{
            console.log("This is the current product id = " + product_id)
            this.cart_items.push(
                {
                    product_id: product_id,
                    name : document.getElementById("title_"+product_id).innerHTML,
                    price : product_price,
                    quantity: 1
                          
                }
            )
        }
        
        

        this.num_items++
        this.total_cost += parseFloat(product_price)
        
        sessionStorage.setItem("cart_items",JSON.stringify(this.cart_items))
        sessionStorage.setItem("total_cost",JSON.stringify(this.total_cost))
        console.log(sessionStorage)
    }

    checkStorage():boolean{
        function storageExists() : boolean{
            if(sessionStorage.getItem('cart_items') === null){
                console.log("doesnt exist")
                return false
            }
            else{
                console.log("exists in storage")
                return true
            }
        }

        let exists:boolean = storageExists()
        if(exists){
            this.cart_items = JSON.parse(sessionStorage.getItem('cart_items'))
            this.total_cost = JSON.parse(sessionStorage.getItem('total_cost'))
        }
        return exists
    }

    displayCart():void{
        let exists:boolean = this.checkStorage()
        if(exists){
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