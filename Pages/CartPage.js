exports.CartPage = class CartPage{
    constructor(page){
        this.page = page;
        //this.CartPage = '.shopping_cart_link';
        this.CheckoutBtn = '#checkout'; 
    }

     async checkout() {

        await this.page.locator(this.CheckoutBtn).click();
    }
}

