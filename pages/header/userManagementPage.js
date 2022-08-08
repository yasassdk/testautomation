const { element, by } = require("protractor");

class UserManagement {
     
    #fNameInput = element(by.xpath("//input[@name='fName']"));
    #lNameInput = element(by.xpath("//input[@name='lName']"));
    #emailInput = element(by.xpath("//input[@name='email']"));
    #mobileInput = element(by.xpath("//input[@name='mobileNo']"));
    #uTypeInput = element(by.xpath("//select[@name='userType']"));
    //#userNameInput = element(by.xpath("//input[@name='username']"));
    #newUserBtn = element(by.buttonText('New'));
    #addUserBtn = element(by.buttonText('Add User'));

    async enterFName(fName) {
        await this.#fNameInput.sendKeys(fName);
    };
    async enterLName(lName) {
        await this.#lNameInput.sendKeys(lName);
    };
    async enterEmail(email) {
        await this.#emailInput.sendKeys(email);
    };
    async enterMobile(mobileNo) {
        await this.#mobileInput.sendKeys(mobileNo);
    };
    async enterUserType(userType) {
        await this.#uTypeInput.sendKeys(userType);
    };
    /*async enterUserName(Username) {
        await this.#userNameInput.sendKeys(Username);
    };*/
    async clickAddUser() {
        await this.#addUserBtn.click();
    };
    async clickNewUser() {
        await this.#newUserBtn.click();
    };

}
exports.UserManagement = UserManagement