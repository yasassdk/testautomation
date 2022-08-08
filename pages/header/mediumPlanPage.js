const { element, by } = require("protractor");

class MediumPlan {
     
    #emailInput = element(by.name("mobileNo"))
    #passwordInput = element(by.name("password"))
    #signInBtn = element(by.buttonText('Log In'))
    //#errorMsg = element(by.className("alert alert-warning error-messages"))

    async enterEmail(mobileNo) {
        await this.#emailInput.sendKeys(mobileNo)
    }
    async enterPassword(password) {
        await this.#passwordInput.sendKeys(password)
    }
    async clickSignIn() {
        await this.#signInBtn.click()
    }
    /*async errorMessage() {
        await this.#errorMsg.sendKeys(errorMessage)
    }*/
}
exports.MediumPlan = MediumPlan