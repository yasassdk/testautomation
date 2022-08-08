const { element, by } = require("protractor");

class SignIn {
     
    #emailInput = element(by.name("email"))
    #passwordInput = element(by.name("password"))
    #signInBtn = element(by.buttonText('Log In'))
    //#errorMsg = element(by.className("alert alert-warning error-messages"))

    async enterEmail(email) {
        await this.#emailInput.sendKeys(email)
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
exports.SignIn = SignIn