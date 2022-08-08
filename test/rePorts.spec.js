const { element } = require("protractor");
const { RePorts } = require("../pages/header/rePortsPage");

// accountSettings
const rePorts = new RePorts()

describe("AccountSettings - Tracified", function() {

    beforeEach(function() {
        browser.get("https://qa.admin.tracified.com/dashboard/home");
        browser.ignoreSynchronization = true;
    });

    it('TC_097 Should be to navigate to reports', function() {
        element(by.xpath("//span[contains(.,'Reports')]")).click();
        browser.sleep(1000);
    });

    it('TC_098 Should be to select report type', function() {
        element(by.xpath("//span[contains(.,'Reports')]")).click();
        element(by.css("#inputState [value='Quantity of Production']")).click(); 
        browser.sleep(1000);
    });

    it('TC_099 Display selected report', function() {
        element(by.xpath("//span[contains(.,'Reports')]")).click();
        element(by.css("#inputState [value='Quantity of Production']")).click(); 
        browser.sleep(1000);
    });

    it('TC_100 select the items', function() {
        element(by.xpath("//span[contains(.,'Reports')]")).click();
        element(by.css("#inputState [value='Quantity of Production']")).click(); 
        element(by.css(".c-btn")).click();
        browser.sleep(1000);
        element(by.css(".select-all > label")).click();
        browser.sleep(1000);
    });

    it('TC_101 Display selected items', function() {
        element(by.xpath("//span[contains(.,'Reports')]")).click();
        element(by.css("#inputState [value='Quantity of Production']")).click(); 
        element(by.css(".c-btn")).click();
        browser.sleep(1000);
        element(by.css(".select-all > label")).click();
        browser.sleep(1000);
    });

    it('TC_102 select the date range', function() {
        element(by.xpath("//span[contains(.,'Reports')]")).click();
        element(by.css("#inputState [value='Quantity of Production']")).click(); 
        element(by.css(".c-btn")).click();
        browser.sleep(1000);
        element(by.css(".select-all > label")).click();
        element(by.xpath("//input[@id='dateFrom']")).sendKeys("08/15/2021");
        element(by.xpath("//input[@id='dateTo']")).sendKeys("30/15/2021");
        browser.sleep(1000);
    });

    it('TC_103 Display the selected the date range', function() {
        element(by.xpath("//span[contains(.,'Reports')]")).click();
        element(by.css("#inputState [value='Quantity of Production']")).click(); 
        element(by.css(".c-btn")).click();
        browser.sleep(1000);
        element(by.css(".select-all > label")).click();
        element(by.css("#dateFrom")).sendKeys("08/15/2021");
        element(by.xpath("//input[@id='dateTo']")).sendKeys("30/15/2021");
        browser.sleep(1000);
    });

    it('TC_104 Can preview the report', function() {
        element(by.xpath("//span[contains(.,'Reports')]")).click();
        element(by.css("#inputState [value='Quantity of Production']")).click(); 
        element(by.css(".c-btn")).click();
        browser.sleep(1000);
        element(by.css(".select-all > label")).click();
        element(by.css("#dateFrom")).sendKeys("08/15/2021");
        element(by.xpath("//input[@id='dateTo']")).sendKeys("30/15/2021");
        element(by.buttonText("Preview")).click();
        browser.sleep(4000);
    });

    it('TC_105 Can download the report', function() {
        element(by.xpath("//span[contains(.,'Reports')]")).click();
        element(by.css("#inputState [value='Quantity of Production']")).click(); 
        element(by.css(".c-btn")).click();
        browser.sleep(1000);
        element(by.css(".select-all > label")).click();
        element(by.css("#dateFrom")).sendKeys("08/15/2021");
        element(by.xpath("//input[@id='dateTo']")).sendKeys("30/15/2021");
        element(by.buttonText("Download")).click();
        browser.sleep(4000);
    });

})        
