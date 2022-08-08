const { element } = require("protractor");
const { EcomToken } = require("../pages/header/ecomTokenPage");

// tracifiedItems
const ecomToken = new EcomToken()

describe("TracifiedItems - Tracified", function() {

    beforeEach(function() {
        browser.get("https://staging.admin.tracified.com/dashboard/home");
        browser.ignoreSynchronization = true;
    });

    it('TC_049 Enter the shop URL', function() {
        element(by.xpath("//span[contains(.,'E-Com Token')]")).click();
        element(by.xpath("//input[@id='shopURL']")).sendKeys("https://ba-book-shop.myshopify.com/");
        element(by.buttonText('Genarate Token')).click();
        browser.sleep(4000);
    });

})     