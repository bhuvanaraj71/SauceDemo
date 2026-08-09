exports.HomePage = class HomePage{
    constructor(page){
        this.page = page;
        this.ProductList = '.inventory_item_name ';
        this.addToCartbtn = '.btn_inventory';
        this.Cart = '.shopping_cart_link';
        
    }
    async addToCart(productName)
    {
        const productList = await this.page.$$(this.ProductList);
         for (const product of productList) {
             if (productName === await product.textContent()) {
                await product.click()
                break;
                }
            }

             await this.page.locator(this.addToCartbtn).click();
     }
     async gotoCart() {
        await this.page.locator(this.Cart).click();
       }
       
}
