exports.OverviewPage = class OverviewPage{
constructor(page){
    this.page = page;
    this.finishbtn = '#finish';

}
async finish() {

        await this.page.locator(this.finishbtn).click();
    }
}