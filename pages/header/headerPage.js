const { element, by, browser } = require("protractor");

class Header {

    #signOut = element(by.linkText("Log out"))

    async clickSignOut() {
        // await browser.sleep(5000)
        await this.#signOut.click()
    }
    async signOutIsDisplay() {
        expect(await this.#signOut.isDisplayed()).toBe(true);
        console.log(await this.#signOut.getText());
    }

}
exports.Header = Header
