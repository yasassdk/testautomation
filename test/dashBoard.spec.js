const { element } = require("protractor");
const { DashBoard } = require("../pages/header/dashBoard");

// dashboard
const dashBoard = new DashBoard();

describe("DashBoard - Tracified", function () {
  beforeEach(function () {
    browser.get("https://qa.admin.tracified.com/dashboard/home");
    browser.ignoreSynchronization = true;
  });

  it("TC_024 Should have a title", function () {
    element(by.css("[ng-reflect-router-link='home']")).click();
    browser.sleep(2000);
  });

  it("TC_025 User should be able to view activity log entries", function () {
    element(by.xpath("//a[contains(.,'Activity Log')]")).click();
    browser.sleep(2000);
  });

  it("TC_026 User should be able to view login history entries", function () {
    element(by.xpath("//a[contains(.,'Activity Log')]")).click();
    element(by.xpath("//a[contains(.,'Login History')]")).click();
    browser.sleep(2000);
  });

  it("TC_027 User should be able to refresh the page", function () {
    element(by.xpath("//a[contains(.,'Refresh')]")).click();
    browser.sleep(2000);
  });
});
