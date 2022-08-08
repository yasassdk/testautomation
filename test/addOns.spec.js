const { element } = require("protractor");
const { Header } = require("../pages/header/headerPage");
const { AddOns } = require("../pages/header/addOnsPage");
const { Common } = require("../pages/common/common");

// header
const header = new Header()

// common
const common = new Common()

// user management
const addOns = new AddOns()

describe('Add Ons', function() {
   
    beforeEach(function() {
        browser.get("https://qa.admin.tracified.com/dashboard/home");
        browser.ignoreSynchronization = true;
    });

    it('TC_012 User should be able to view billing page', function() {
        element(by.xpath("//span[contains(.,'Billing & In-App Purchase')]")).click();
        browser.sleep(4000);
    });    

    it('TC_012 User should be able to subscribe for the Add Ons', function() {
        element(by.xpath("//span[contains(.,'Billing & In-App Purchase')]")).click();
        element(by.xpath("//button[@class='btn btn-primary-900 py-2']")).click();
        browser.sleep(4000);
    }); 

    it('TC_012 User should be able to subscribe for the Add Ons using PayPal', function() {
        element(by.xpath("//span[contains(.,'Billing & In-App Purchase')]")).click();
        element(by.xpath("//button[@class='btn btn-primary-900 py-2']")).click();
        element(by.css("//div[@class='paypal-overlay-context-popup paypal-checkout-overlay']")).click();
        browser.sleep(4000);
    }); 
  
    
  
  });