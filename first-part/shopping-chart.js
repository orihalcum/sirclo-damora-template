class Cart{

    constructor(){}

    addProduct(productCode, quantity){
        let index = this.productCode.indexOf(productCode);
        if(index === -1){
            this.productCode.push(productCode);
            this.quantity.push(quantity);
        }else{
            this.quantity[index] += quantity;
        }
    }

    removeProduct(productCode){
        let index = this.productCode.indexOf(productCode);
        if (index === -1)
            return false;        
        this.productCode.splice(index,1);
        this.quantity.splice(index, 1);
    }

    showCart(){
        this.productCode.forEach((data,index) => {
            console.log(data + ` (${this.quantity[index]})`);
        });
    }

}

Cart.prototype.productCode = [];
Cart.prototype.quantity = [];

let cart = new Cart();
cart.addProduct("Baju Merah Mantap", 1);
cart.addProduct("Baju Merah Mantap", 1);
cart.addProduct("Bukuku", 3);
cart.removeProduct("Bukuku");
cart.addProduct("Singlet Hijau", 1);
cart.removeProduct("ProdukBohongan");
cart.showCart();