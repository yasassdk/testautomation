const { element } = require("protractor");
const { Header } = require("../pages/header/headerPage");
const { PriceTiers } = require("../pages/header/priceTiersPage");
const { Common } = require("../pages/common/common");

// header
const header = new Header();

// common
const common = new Common();

// user management
const priceTiers = new PriceTiers();

describe("Add Ons", function () {
  beforeEach(function () {
    browser.get("https://qa.admin.tracified.com/dashboard/home");
    browser.ignoreSynchronization = true;
  });

  it("TC_077 User should be able to view billing page", function () {
    element(
      by.xpath("//span[contains(.,'Billing & In-App Purchase')]")
    ).click();
    browser.sleep(1000);
  });

  it("TC_078 User should be able to cancel the current pricing plan", function () {
    element(
      by.xpath("//span[contains(.,'Billing & In-App Purchase')]")
    ).click();
    element(
      by.xpath(
        "//div[@class='w-100 p-4 border bg-white pricing-container shadow border-primary-900']//a[.='Cancel']"
      )
    ).click();
    browser.sleep(1000);
  });

  it("TC_079 User should be able to specify a reason for cancelling the subscription", function () {
    element(
      by.xpath("//span[contains(.,'Billing & In-App Purchase')]")
    ).click();
    element(
      by.xpath(
        "//div[@class='w-100 p-4 border bg-white pricing-container shadow border-primary-900']//a[.='Cancel']"
      )
    ).click();
    element(by.css(".form-control")).sendKeys("bugss");
    //element(by.xpath("//button[@class='btn btn-danger']")).click();
    browser.sleep(1000);
  });

  /*it('TC_080 User should be able to reactivate the subscription', function() {
        element(by.xpath("//span[contains(.,'Billing & In-App Purchase')]")).click();
        element(by.xpath("//div[@class='w-100 p-4 border bg-white pricing-container shadow border-primary-900']//a[.='Cancel']")).click();
        element(by.css(".form-control")).sendKeys("bugss");
        element(by.xpath("//button[@class='btn btn-danger']")).click();
        element(by.xpath("//button[@class='btn btn-primary-900']")).click();
        browser.sleep(1000);
    });*/
});
