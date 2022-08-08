const { element, by } = require("protractor");

class MasterData {

    #templateNameInput = element(by.css("[placeholder='Your Artifact Name']"));

    async enterTemplateName() {
        await this.#templateNameInput.sendKeys();
    };

}
exports.MasterData = MasterData