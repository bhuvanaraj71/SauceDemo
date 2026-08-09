exports.CheckOutPage = class CheckOutPage{
    constructor(page){
        this.page = page;
        this.FirstName = '#first-name';
        this.LastName = '#last-name';
        this.ZipCode = '#postal-code';
        this.ContinueBtn = '#continue';
    }
    async CheckOutPage(FirstName, LastName, ZipCode) {
     await this.page.locator(this.FirstName).fill(FirstName);
     await this.page.locator(this.LastName).fill(LastName);
     await this.page.locator(this.ZipCode).fill(ZipCode);
     await this.page.locator(this.ContinueBtn).click();
     
     
    }
}