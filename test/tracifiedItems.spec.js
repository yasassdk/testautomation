const { element } = require("protractor");
const { TracifiedItems } = require("../pages/header/tracifiedItemsPage");
const { Common } = require("../pages/common/common");

// common
const common = new Common();

// tracifiedItems
const tracifiedItems = new TracifiedItems();

describe("TracifiedItems - Tracified", function () {
  beforeEach(function () {
    browser.get("https://qa.admin.tracified.com/dashboard/home");
    browser.ignoreSynchronization = true;
  });

  it("TC_064 Should pop up the add new item panel", function () {
    element(by.xpath("//span[contains(.,'Tracified Items')]")).click();
    element(by.css(".d-none.btn-primary-900")).click();
    browser.sleep(1000);
  });

  it("TC_065 Can add items to the system", function () {
    element(by.xpath("//span[contains(.,'Tracified Items')]")).click();
    element(by.css(".d-none.btn-primary-900")).click();
    element(by.css("[placeholder='Enter item name']")).sendKeys("Ginger");
    //Select soil preparation stage
    element(
      by.xpath(
        "//*[@id='addItemModal']/div/div/div[2]/form/div[1]/div/div[3]/ul/li[1]/div"
      )
    ).click();
    //select direct seeding stage
    element(
      by.xpath(
        "//*[@id='addItemModal']/div/div/div[2]/form/div[1]/div/div[3]/ul/li[3]/div"
      )
    ).click();
    //select cultivation stage
    element(
      by.xpath(
        "//*[@id='addItemModal']/div/div/div[2]/form/div[1]/div/div[3]/ul/li[5]/div"
      )
    ).click();

    element(
      by.xpath("//*[@id='addItemModal']/div/div/div[2]/form/div[2]/button/span")
    ).click();
    browser.sleep(1000);
  });

  it("TC_066 Save button should be enabled only after, user enters the item name and selects the stages", function () {
    element(by.xpath("//span[contains(.,'Tracified Items')]")).click();
    element(by.css(".d-none.btn-primary-900")).click();
    element(by.css("[placeholder='Enter item name']")).sendKeys("Carrot-2");
    browser.sleep(1000);
  });

  // it('TC_067 The new item should display in the existing list ', function() {
  //       element(by.xpath("//span[contains(.,'Tracified Items')]")).click();
  //       element(by.css('.ml-1')).click();
  //       element(by.css("[placeholder='Enter item name']")).sendKeys("Carrot");
  //       element(by.xpath("//ul[@class='list-group']/li[1]//label[@class='label-default']")).click();
  //       browser.sleep(1000);
  //   });

  it("TC_068 Press edit item icon", function () {
    element(by.xpath("//span[contains(.,'Tracified Items')]")).click();
    element(by.css("tr:nth-of-type(1) .fa-pencil")).click();
    browser.sleep(1000);
  });

  it("TC_069 Edit the item name /applicable stages", function () {
    element(by.xpath("//span[contains(.,'Tracified Items')]")).click();
    element(by.css("tr:nth-of-type(1) .fa-pencil")).click();
    element(by.css("[formcontrolname='uItemName']")).clear();
    element(by.css("[formcontrolname='uItemName']")).sendKeys("Carrot-0");
    browser.sleep(1000);
  });

  it("TC_070 Edit the item name /applicable stages", function () {
    element(by.xpath("//span[contains(.,'Tracified Items')]")).click();
    element(by.css("tr:nth-of-type(1) .fa-pencil")).click();
    element(by.css("[formcontrolname='uItemName']")).clear();
    element(by.css("[formcontrolname='uItemName']")).sendKeys("Carrot");
    //Unselect / select 'test' stage
    element(
      by.xpath(
        "//*[@id='editItemModal']/div/div/div[2]/form/div[1]/div/div[3]/ul/li[10]/div"
      )
    ).click();
    element(by.buttonText("Update")).click();
    browser.sleep(1000);
  });

  // it("TC_071 Press delete item icon", async () => {
  //   element(by.xpath("//span[contains(.,'Tracified Items')]")).click();
  //   element(by.css("tr:nth-of-type(4) .fa-trash")).click();
  //   element(by.css(".col-2.btn-primary-900")).click();
  //   await common.validateToast1("Item deleted successfully");
  //   browser.sleep(1000);
  // });

  it("TC_072 If no, reflect to the same page", function () {
    element(by.xpath("//span[contains(.,'Tracified Items')]")).click();
    element(by.css("tr:nth-of-type(1) .fa-trash")).click();
    element(by.css(".col-2.btn-outline-success")).click();
    browser.sleep(1000);
  });
});
