const { $, browser } = require("protractor");

class Common {

    #toast3 = $(".alert-warning")
    #toast = $(".toast-title")
    #toast1 = $(".toast-message") 
    #toast2 = $(".validationMessage")
    #toast4 = $(".text-danger")

    async validateToast3(message) {
        await browser.sleep(2000)
        // TODO expectedCondtion
        //let ec = browser.ExpectedConditions;
        expect(await this.#toast3.isDisplayed()).toBe(true)
        expect(await this.#toast3.getText()).toBe(message)
    }

    async validateToast(message) {
        await browser.sleep(2000)
        // TODO expectedCondtion
        //let ec = browser.ExpectedConditions;
        expect(await this.#toast.isDisplayed()).toBe(true)
        expect(await this.#toast.getText()).toBe(message)
    }

    async validateToast1(message) {
        await browser.sleep(2000)
        // TODO expectedCondtion
        //let ec = browser.ExpectedConditions;
        expect(await this.#toast1.isDisplayed()).toBe(true)
        expect(await this.#toast1.getText()).toBe(message)
    }

    async validateToast2(message) {
        await browser.sleep(2000)
        // TODO expectedCondtion
        //let ec = browser.ExpectedConditions;
        expect(await this.#toast2.isDisplayed()).toBe(true)
        expect(await this.#toast2.getText()).toBe(message)
    }

    async validateToast4(message) {
        await browser.sleep(2000)
        // TODO expectedCondtion
        //let ec = browser.ExpectedConditions;
        expect(await this.#toast4.isDisplayed()).toBe(true)
        expect(await this.#toast4.getText()).toBe(message)
    }


}
exports.Common = Common;