const { element } = require("protractor");
const { AuthoRization } = require("../pages/header/authoRizationPage");
const { Common } = require("../pages/common/common");

// common
const common = new Common();

// accountSettings
const authoRization = new AuthoRization();

describe("Authorization - Tracified", function () {
  beforeEach(function () {
    browser.get("https://qa.admin.tracified.com/dashboard/home");
    browser.ignoreSynchronization = true;
  });

  it("TC_088 Display individual certificate", function () {
    element(by.xpath("//span[contains(.,'Authorization')]")).click();
    browser.sleep(4000);
  });

  it("TC_089 To issue a new certificate", function () {
    element(by.xpath("//span[contains(.,'Authorization')]")).click();
    element(by.xpath("//a[.='Issue Certificate']")).click();
    element(by.xpath("//input[@id='dateFrom']")).sendKeys("08/15/2021");
    element(by.xpath("//input[@id='dateTo']")).sendKeys("30/15/2021");
    element(by.css("#inputState [value='6023d4a1430b3e4ebcade8ce']")).click();
    element(by.xpath("//input[@id='subject']")).sendKeys("50");
    element(by.xpath("//textarea[@id='subject']")).sendKeys(
      "Sample certificate1"
    );
    element(by.buttonText("Issue Certificate")).click();
    common.validateToast1("Success!");
    browser.sleep(4000);
  });

  it("TC_090 Able to add date range", function () {
    element(by.xpath("//span[contains(.,'Authorization')]")).click();
    element(by.xpath("//a[.='Issue Certificate']")).click();
    element(by.xpath("//input[@id='dateFrom']")).sendKeys("08/15/2021");
    element(by.xpath("//input[@id='dateTo']")).sendKeys("09/15/2021");
    browser.sleep(4000);
  });

  it("TC_091 keep the date range empty", function () {
    element(by.xpath("//span[contains(.,'Authorization')]")).click();
    element(by.xpath("//a[.='Issue Certificate']")).click();
    element(by.css("#inputState [value='6023d4a1430b3e4ebcade8ce']")).click();
    element(by.xpath("//input[@id='subject']")).sendKeys("55");
    element(by.xpath("//textarea[@id='subject']")).sendKeys(
      "Issue certificate"
    );
    element(by.buttonText("Issue Certificate")).click();
    common.validateToast1(
      "Failed: child fromDate fails because [fromDate is not allowed to be empty]"
    );
    browser.sleep(4000);
  });

  it("TC_092 To edit the Template ID", function () {
    element(by.xpath("//span[contains(.,'Authorization')]")).click();
    element(by.xpath("//a[.='Issue Certificate']")).click();
    element(by.xpath("//input[@id='dateFrom']")).sendKeys("08/15/2021");
    element(by.xpath("//input[@id='dateTo']")).sendKeys("09/15/2021");
    element(by.css("#inputState [value='6023d4a1430b3e4ebcade8ce']")).click();
    browser.sleep(4000);
  });

  it("TC_093 Keep the template ID empty", function () {
    element(by.xpath("//span[contains(.,'Authorization')]")).click();
    element(by.xpath("//a[.='Issue Certificate']")).click();
    element(by.xpath("//input[@id='dateFrom']")).sendKeys("08/15/2021");
    element(by.xpath("//input[@id='dateTo']")).sendKeys("09/15/2021");
    element(by.xpath("//input[@id='subject']")).sendKeys("55");
    element(by.xpath("//textarea[@id='subject']")).sendKeys(
      "Issue certificate"
    );
    element(by.buttonText("Issue Certificate")).click();
    common.validateToast1(
      "Failed: child templateId fails because [templateId is not allowed to be empty]"
    );
    browser.sleep(4000);
  });

  it("TC_094 Keep the Quantity empty", function () {
    element(by.xpath("//span[contains(.,'Authorization')]")).click();
    element(by.xpath("//a[.='Issue Certificate']")).click();
    element(by.xpath("//input[@id='dateFrom']")).sendKeys("08/15/2021");
    element(by.xpath("//input[@id='dateTo']")).sendKeys("30/15/2021");
    element(by.css("#inputState [value='6023d4a1430b3e4ebcade8ce']")).click();
    element(by.xpath("//textarea[@id='subject']")).sendKeys(
      "Sample certificate1"
    );
    element(by.buttonText("Issue Certificate")).click();
    common.validateToast1("Error: Invalid values are present");
    browser.sleep(4000);
  });

  it("TC_095 Keep the Placeholder empty", function () {
    element(by.xpath("//span[contains(.,'Authorization')]")).click();
    element(by.xpath("//a[.='Issue Certificate']")).click();
    element(by.xpath("//input[@id='dateFrom']")).sendKeys("08/15/2021");
    element(by.xpath("//input[@id='dateTo']")).sendKeys("30/15/2021");
    element(by.css("#inputState [value='6023d4a1430b3e4ebcade8ce']")).click();
    element(by.xpath("//input[@id='subject']")).sendKeys("50");
    element(by.buttonText("Issue Certificate")).click();
    common.validateToast1("Error: Invalid values are present");
    browser.sleep(4000);
  });

  it("TC_096 To issue a certificate succesfully", function () {
    element(by.xpath("//span[contains(.,'Authorization')]")).click();
    element(by.xpath("//a[.='Issue Certificate']")).click();
    element(by.xpath("//input[@id='dateFrom']")).sendKeys("08/15/2021");
    element(by.xpath("//input[@id='dateTo']")).sendKeys("25/15/2021");
    element(by.css("#inputState [value='6023d4a1430b3e4ebcade8ce']")).click();
    element(by.xpath("//input[@id='subject']")).sendKeys("40");
    element(by.xpath("//textarea[@id='subject']")).sendKeys(
      "Sample certificate2"
    );
    element(by.buttonText("Issue Certificate")).click();
    common.validateToast1("Success!");
    browser.sleep(4000);
  });
});
