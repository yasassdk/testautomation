const { element } = require("protractor");
const { QrCodes } = require("../pages/header/qrCodesPage");

// tracifiedItems
const qrCodes = new QrCodes()

describe("QrCodes - Tracified", function() {

    beforeEach(function() {
        browser.get("https://qa.admin.tracified.com/dashboard/home");
        browser.ignoreSynchronization = true;
    });

    it('TC_073 Enter in the text field, the number of QR codes needed', function() {
        element(by.xpath("//span[contains(.,'QR Generator')]")).click();
        element(by.xpath("//input[@name='number']")).sendKeys("120");
        element(by.buttonText('Generate')).click();
        browser.sleep(4000);
    });

    it('TC_074 Enter value greater than 150', function() {
        element(by.xpath("//span[contains(.,'QR Generator')]")).click();
        element(by.xpath("//input[@name='number']")).sendKeys("160");
        browser.sleep(4000);
    });

    it('TC_075 Enter a value less than zero', function() {       
        element(by.xpath("//span[contains(.,'QR Generator')]")).click();
        element(by.xpath("//input[@name='number']")).sendKeys("-1");
        browser.sleep(4000);
    });

    it('TC_076 Not able to enter characters or symbols', function() {  
        element(by.xpath("//span[contains(.,'QR Generator')]")).click();
        element(by.xpath("//input[@name='number']")).sendKeys("Cr@#");
        browser.sleep(4000);
    });
})      