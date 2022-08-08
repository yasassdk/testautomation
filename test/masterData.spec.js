const { element } = require("protractor");
const { MasterData } = require("../pages/header/masterDataPage");
const { Common } = require("../pages/common/common");

// common
const common = new Common();

// artifacts
const masterData = new MasterData();

describe("MasterData - Tracified", function () {
  beforeEach(function () {
    browser.get("https://qa.admin.tracified.com/dashboard/home");
    browser.ignoreSynchronization = true;
  });

  it("TC_055 Add fields and template name", async () => {
    element(by.xpath("//a[contains(.,'Master Data')]")).click();
    element(by.xpath("//span[@class='fa fa-plus']")).click();
    element(by.css("[placeholder='Your Artifact Name']")).sendKeys("testqa2");
    element(
      by.xpath(
        "//button[@class='btn btn-primary-900  btn-sm artifact-add-button']"
      )
    ).click();
    element(by.css("[placeholder='Field 1 Name']")).sendKeys("testF1");
    element(by.buttonText("Save Template")).click();
    await common.validateToast1("Template created successfully");
    browser.sleep(1000);
  });

  // it("TC_056 Add fields and template name", async () => {
  //   element(by.xpath("//a[contains(.,'Master Data')]")).click();
  //   element(by.xpath("//span[@class='fa fa-plus']")).click();
  //   element(by.css("[placeholder='Your Artifact Name']")).sendKeys("testq2");
  //   element(
  //     by.xpath(
  //       "//button[@class='btn btn-primary-900  btn-sm artifact-add-button']"
  //     )
  //   ).click();
  //   element(by.css("[placeholder='Field 1 Name']")).sendKeys("testF2");
  //   element(by.buttonText("Save Template")).click();
  //   await common.validateToast1("Template created successfully");
  //   browser.sleep(1000);
  // });

  it("TC_057 Keep the artifact name empty", async () => {
    element(by.xpath("//a[contains(.,'Master Data')]")).click();
    element(by.xpath("//span[@class='fa fa-plus']")).click();
    element(
      by.xpath(
        "//button[@class='btn btn-primary-900  btn-sm artifact-add-button']"
      )
    ).click();
    element(by.css("[placeholder='Field 1 Name']")).sendKeys("test3");
    element(by.buttonText("Save Template")).click();
    await common.validateToast1("Template name is empty");
    browser.sleep(1000);
  });

  it("TC_058 Keep the fields empty", async () => {
    element(by.xpath("//a[contains(.,'Master Data')]")).click();
    element(by.xpath("//span[@class='fa fa-plus']")).click();
    element(by.css("[placeholder='Your Artifact Name']")).sendKeys("testq8");
    element(
      by.xpath(
        "//button[@class='btn btn-primary-900  btn-sm artifact-add-button']"
      )
    ).click();
    element(by.buttonText("Save Template")).click();
    await common.validateToast1("Field name is empty");
    browser.sleep(1000);
  });

  //old code
  // it("TC_059 If no, redirect to the same page", function () {
  //   element(by.xpath("//a[contains(.,'Master Data')]")).click();
  //   element(by.css("div:nth-of-type(13) .material-icons")).click();
  //   element(by.css(".col-2.btn-outline-success")).click();
  //   browser.sleep(1000);
  // });
  //end

  //modified
  it("TC_059 Delete Template - If no, redirect to the same page", function () {
    element(by.xpath("//a[contains(.,'Master Data')]")).click();
    element(
      by.xpath("(//span[@class='material-icons arti-delete-btn'])[59]")
    ).click();
    element(
      by.xpath("//button[contains(@class,'btn btn-outline-success')]")
    ).click();
    browser.sleep(1000);
  });

  it("TC_060 Delete Template - Should pop up a confirm message", async () => {
    element(by.xpath("//a[contains(.,'Master Data')]")).click();
    element(
      by.xpath("(//span[@class='material-icons arti-delete-btn'])[60]")
    ).click();
    element(
      by.xpath("(//button[contains(@class,'btn btn-primary-900')])[2]")
    ).click();
    await common.validateToast1("Template deleted successfully");
    browser.sleep(1000);
  });

  it("TC_061 Data added template deleting with data", async () => {
    element(by.xpath("//a[contains(.,'Master Data')]")).click();
    element(
      by.xpath("//span[@class='material-icons arti-delete-btn']")
    ).click();
    await common.validateToast1(
      "This template contains data. So your request can not be completed."
    );
    browser.sleep(1000);
  });

  // it("TC_062 Should use added templates", function () {
  //   element(by.xpath("//a[contains(.,'Master Data')]")).click();
  //   element(by.xpath("//button[@class='btn btn-outline-primary-900']")).click();
  //   element(
  //     by.xpath("//div[@class='row mt-4']/div[1]//span[@class='fa fa-pencil']")
  //   ).click();
  //   browser.sleep(1000);
  // });

  // it("TC_063 User should be able to add new records", function () {
  //   element(by.xpath("//a[contains(.,'Master Data')]")).click();
  //   element(by.xpath("//button[@class='btn btn-outline-primary-900']")).click();
  //   element(
  //     by.xpath("//div[@class='row mt-4']/div[1]//span[@class='fa fa-pencil']")
  //   ).click();
  //   element(by.css("[placeholder='Field 1 Name']")).sendKeys("tst3");
  //   browser.sleep(1000);
  // });
});
