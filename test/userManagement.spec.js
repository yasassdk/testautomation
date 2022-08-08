const { element } = require("protractor");
const { Header } = require("../pages/header/headerPage");
const { UserManagement } = require("../pages/header/userManagementPage");
const { Common } = require("../pages/common/common");

// header
const header = new Header();

// common
const common = new Common();

// user management
const userManagement = new UserManagement();

describe("User Management", function () {
  beforeEach(function () {
    browser.get("https://qa.admin.tracified.com/dashboard/user-manager");
    browser.ignoreSynchronization = true;
  });

  it("TC_028 User should be able to view user detail entries", function () {
    element(by.xpath("//span[contains(.,'User Management')]")).click();
    // browser.sleep(2000);
  });

  it("TC_029 User Should be able  to the view user details screen", function () {
    element(by.xpath("//span[contains(.,'User Management')]")).click();
    element(by.css(".panel-body tr:nth-of-type(1) .fa-user-circle-o")).click();
    // browser.sleep(2000);
  });

  it("TC_030 User should be able to update user details", function () {
    element(by.xpath("//span[contains(.,'User Management')]")).click();
    element(by.css(".panel-body tr:nth-of-type(1) .fa-pencil")).click();
    // browser.sleep(2000);
  });

  it("TC_031 If no should not delete the user", function () {
    element(by.xpath("//span[contains(.,'User Management')]")).click();
    element(by.css(".panel-body tr:nth-of-type(1) .fa-trash")).click();
    element(by.css(".col-2.btn-outline-success")).click();
    // browser.sleep(2000);
  });

  it("TC_032 If yes have to delete the user", function () {
    element(by.xpath("//span[contains(.,'User Management')]")).click();
    element(by.css(".panel-body tr:nth-of-type(1) .fa-trash")).click();
    //element(by.css('.btn-sm.btn-primary-900')).click();
    // browser.sleep(2000);
  });

  it("TC_033 User should be able to disable the user", function () {
    element(by.xpath("//span[contains(.,'User Management')]")).click();
    element(by.css(".panel-body tr:nth-of-type(1) .btn")).click();
    element(by.css(".col-2.btn-outline-success")).click();
    // browser.sleep(2000);
  });

  it("TC_034 User should be able to view the overview", function () {
    element(by.xpath("//span[contains(.,'User Management')]")).click();
    element(by.css(".panel-body tr:nth-of-type(1) .fa-area-chart")).click();
    // browser.sleep(2000);
  });

  it("TC_036 User should be able to add users", function () {
    element(by.xpath("//span[contains(.,'User Management')]")).click();
    element(by.css(".fa-plus")).click();
    // browser.sleep(2000);
  });

  it("TC_037 User should be able to add user1", async () => {
    browser.get(
      "https://qa.admin.tracified.com/dashboard/user-manager/add-user"
    );
    element(by.xpath("//input[@name='fName']")).sendKeys("Faizee");
    element(by.css("[name='lName']")).sendKeys("Qualienn");
    element(by.css("[name='email']")).sendKeys("qatestzd001@mailinator.com");
    element(by.css("[name='userType'] [value='2: FieldOfficer']")).click();
    element(by.css("[value='7']")).click();
    element(by.css("[value='8']")).click();
    element(by.css("[value='10']")).click();
    element(by.css("[value='14']")).click();
    element(by.css("[value='16']")).click();
    element(by.css("[value='23']")).click();
    element(by.css("[value='29']")).click();
    element(
      by.css(".section-details > div:nth-of-type(2) [value='1']")
    ).click();
    element(
      by.css(".section-details > div:nth-of-type(2) [value='2']")
    ).click();
    element(
      by.css(".section-details > div:nth-of-type(2) [value='3']")
    ).click();
    element(
      by.css(".section-details > div:nth-of-type(3) [value='1']")
    ).click();
    element(
      by.css(".section-details > div:nth-of-type(3) [value='2']")
    ).click();
    element(
      by.css(".section-details > div:nth-of-type(3) [value='3']")
    ).click();
    element(
      by.css(".section-details > div:nth-of-type(4) [value='1']")
    ).click();
    element(
      by.css(".section-details > div:nth-of-type(4) [value='2']")
    ).click();
    element(
      by.css(".section-details > div:nth-of-type(4) [value='3']")
    ).click();
    element(by.css("[name='mobileNo']")).sendKeys("+15854393251");
    await userManagement.clickAddUser();
    await common.validateToast1("Success!");
    // browser.sleep(2000);
  });

  /*it('TC_002 User should be able to add user2', async () => {
        element(by.css("[name='fName']")).sendKeys("Genntt");
        element(by.css("[name='lName']")).sendKeys("Malshuu");
        element(by.css("[name='email']")).sendKeys("qatest01fo52@mailinator.com");
        element(by.css("[name='userType'] [value='2: FieldOfficer']")).click();
        element(by.css("[value='7']")).click();
        element(by.css("[value='8']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='14']")).click();
        element(by.css("[value='16']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='3']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380152");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        // browser.sleep(2000);
    });

    it('TC_003 User should be able to add user3', async () => {
        element(by.css("[name='fName']")).sendKeys("Kuuooy");
        element(by.css("[name='lName']")).sendKeys("Ckecko");
        element(by.css("[name='email']")).sendKeys("qatest01fo53@mailinator.com");
        element(by.css("[name='userType'] [value='2: FieldOfficer']")).click();
        element(by.css("[value='7']")).click();
        element(by.css("[value='8']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='14']")).click();
        element(by.css("[value='16']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='3']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380153");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        // browser.sleep(2000);
    });

    it('TC_004 User should be able to add user4', async () => {
        element(by.css("[name='fName']")).sendKeys("Wenmmu");
        element(by.css("[name='lName']")).sendKeys("Lolkkp");
        element(by.css("[name='email']")).sendKeys("qatest01fo54@mailinator.com");
        element(by.css("[name='userType'] [value='2: FieldOfficer']")).click();
        element(by.css("[value='7']")).click();
        element(by.css("[value='8']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='14']")).click();
        element(by.css("[value='16']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='3']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380154");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        // browser.sleep(2000);
    });

    /*it('TC_005 User should be able to add user5', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Sila");
        element(by.css("[name='lName']")).sendKeys("Nawra");
        element(by.css("[name='email']")).sendKeys("qatest35fo8@mailinator.com");
        element(by.css("[name='userType'] [value='2: FieldOfficer']")).click();
        element(by.css("[value='7']")).click();
        element(by.css("[value='8']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='14']")).click();
        element(by.css("[value='16']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='3']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380135");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        // browser.sleep(2000);
    });

    it('TC_006 User should be able to add user6', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Silyb");
        element(by.css("[name='lName']")).sendKeys("Nawrob");
        element(by.css("[name='email']")).sendKeys("qatest36fo8@mailinator.com");
        element(by.css("[name='userType'] [value='2: FieldOfficer']")).click();
        element(by.css("[value='7']")).click();
        element(by.css("[value='8']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='14']")).click();
        element(by.css("[value='16']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='3']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380134");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        // browser.sleep(2000);
    });

    it('TC_007 User should be able to add user7', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Silyc");
        element(by.css("[name='lName']")).sendKeys("Nawroc");
        element(by.css("[name='email']")).sendKeys("qatest37fo8@mailinator.com");
        element(by.css("[name='userType'] [value='2: FieldOfficer']")).click();
        element(by.css("[value='7']")).click();
        element(by.css("[value='8']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='14']")).click();
        element(by.css("[value='16']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='3']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380133");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        // browser.sleep(2000);
    });

    it('TC_008 User should be able to add user8', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Silyd");
        element(by.css("[name='lName']")).sendKeys("Nawrod");
        element(by.css("[name='email']")).sendKeys("qatest38fo8@mailinator.com");
        element(by.css("[name='userType'] [value='2: FieldOfficer']")).click();
        element(by.css("[value='7']")).click();
        element(by.css("[value='8']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='14']")).click();
        element(by.css("[value='16']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='3']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380132");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        // browser.sleep(2000);
    });

    it('TC_009 User should be able to add user9', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Silye");
        element(by.css("[name='lName']")).sendKeys("Nawroe");
        element(by.css("[name='email']")).sendKeys("qatest39fo8@mailinator.com");
        element(by.css("[name='userType'] [value='2: FieldOfficer']")).click();
        element(by.css("[value='7']")).click();
        element(by.css("[value='8']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='14']")).click();
        element(by.css("[value='16']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='3']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380131");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        // browser.sleep(2000);
    });

    it('TC_010 User should be able to add user10', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Silyf");
        element(by.css("[name='lName']")).sendKeys("Nawrof");
        element(by.css("[name='email']")).sendKeys("qatest40fo8@mailinator.com");
        element(by.css("[name='userType'] [value='2: FieldOfficer']")).click();
        element(by.css("[value='7']")).click();
        element(by.css("[value='8']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='14']")).click();
        element(by.css("[value='16']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='3']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380130");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        // browser.sleep(2000);
    });

    it('TC_011 User should be able to add user11', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Silyg");
        element(by.css("[name='lName']")).sendKeys("Nawrog");
        element(by.css("[name='email']")).sendKeys("qatest41fo8@mailinator.com");
        element(by.css("[name='userType'] [value='2: FieldOfficer']")).click();
        element(by.css("[value='7']")).click();
        element(by.css("[value='8']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='14']")).click();
        element(by.css("[value='16']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='3']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380129");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        // browser.sleep(2000);
    });

    it('TC_012 User should be able to add user12', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Silyh");
        element(by.css("[name='lName']")).sendKeys("Nawroh");
        element(by.css("[name='email']")).sendKeys("qatest42fo8@mailinator.com");
        element(by.css("[name='userType'] [value='2: FieldOfficer']")).click();
        element(by.css("[value='7']")).click();
        element(by.css("[value='8']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='14']")).click();
        element(by.css("[value='16']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='3']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380128");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        // browser.sleep(2000);
    });

    it('TC_013 User should be able to add user13', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Silyi");
        element(by.css("[name='lName']")).sendKeys("Nawroi");
        element(by.css("[name='email']")).sendKeys("qatest43fo8@mailinator.com");
        element(by.css("[name='userType'] [value='2: FieldOfficer']")).click();
        element(by.css("[value='7']")).click();
        element(by.css("[value='8']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='14']")).click();
        element(by.css("[value='16']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='3']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380127");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        // browser.sleep(2000);
    });

    it('TC_014 User should be able to add user14', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Silyj");
        element(by.css("[name='lName']")).sendKeys("Nawroj");
        element(by.css("[name='email']")).sendKeys("qatest44fo8@mailinator.com");
        element(by.css("[name='userType'] [value='2: FieldOfficer']")).click();
        element(by.css("[value='7']")).click();
        element(by.css("[value='8']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='14']")).click();
        element(by.css("[value='16']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='3']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380126");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        // browser.sleep(2000);
    });

    it('TC_015 User should be able to add user15', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Silyk");
        element(by.css("[name='lName']")).sendKeys("Nawrok");
        element(by.css("[name='email']")).sendKeys("qatest45fo8@mailinator.com");
        element(by.css("[name='userType'] [value='2: FieldOfficer']")).click();
        element(by.css("[value='7']")).click();
        element(by.css("[value='8']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='14']")).click();
        element(by.css("[value='16']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='3']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380125");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        // browser.sleep(2000);
    });

    it('TC_016 User should be able to add user16', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Menish");
        element(by.css("[name='lName']")).sendKeys("Ben");
        element(by.css("[name='email']")).sendKeys("qatest47fo8@mailinator.com");
        element(by.css("[name='userType'] [value='2: FieldOfficer']")).click();
        element(by.css("[value='7']")).click();
        element(by.css("[value='8']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='14']")).click();
        element(by.css("[value='16']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='3']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380120");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        // browser.sleep(2000);
    });

    it('TC_017 User should be able to add user17', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Menisha");
        element(by.css("[name='lName']")).sendKeys("Bena");
        element(by.css("[name='email']")).sendKeys("qatest48fo8@mailinator.com");
        element(by.css("[name='userType'] [value='2: FieldOfficer']")).click();
        element(by.css("[value='7']")).click();
        element(by.css("[value='8']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='14']")).click();
        element(by.css("[value='16']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='3']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380119");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        // browser.sleep(2000);
    });

    it('TC_018 User should be able to add user18', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Menishi");
        element(by.css("[name='lName']")).sendKeys("Beni");
        element(by.css("[name='email']")).sendKeys("qatest49fo8@mailinator.com");
        element(by.css("[name='userType'] [value='2: FieldOfficer']")).click();
        element(by.css("[value='7']")).click();
        element(by.css("[value='8']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='14']")).click();
        element(by.css("[value='16']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='3']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380118");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        // browser.sleep(2000);
    });

    it('TC_019 User should be able to add user19', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Menisho");
        element(by.css("[name='lName']")).sendKeys("Beno");
        element(by.css("[name='email']")).sendKeys("qatest50fo8@mailinator.com");
        element(by.css("[name='userType'] [value='2: FieldOfficer']")).click();
        element(by.css("[value='7']")).click();
        element(by.css("[value='8']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='14']")).click();
        element(by.css("[value='16']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='3']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380117");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        // browser.sleep(2000);
    });

   it('TC_020 User should be able to add user20', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Menishu");
        element(by.css("[name='lName']")).sendKeys("Benu");
        element(by.css("[name='email']")).sendKeys("qatest51fo8@mailinator.com");
        element(by.css("[name='userType'] [value='2: FieldOfficer']")).click();
        element(by.css("[value='7']")).click();
        element(by.css("[value='8']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='14']")).click();
        element(by.css("[value='16']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='3']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380116");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        // browser.sleep(2000);
    });

    it('TC_021 User should be able to add user21', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Menishn");
        element(by.css("[name='lName']")).sendKeys("Benun");
        element(by.css("[name='email']")).sendKeys("qatest52fo8@mailinator.com");
        element(by.css("[name='userType'] [value='2: FieldOfficer']")).click();
        element(by.css("[value='7']")).click();
        element(by.css("[value='8']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='14']")).click();
        element(by.css("[value='16']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='3']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380115");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        // browser.sleep(2000);
    });

    it('TC_022 User should be able to add user22', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Menishu");
        element(by.css("[name='lName']")).sendKeys("Benu");
        element(by.css("[name='email']")).sendKeys("qatest53fo8@mailinator.com");
        element(by.css("[name='userType'] [value='2: FieldOfficer']")).click();
        element(by.css("[value='7']")).click();
        element(by.css("[value='8']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='14']")).click();
        element(by.css("[value='16']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='3']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380114");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        // browser.sleep(2000);
    });

    it('TC_023 User should be able to add user23', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Menishu");
        element(by.css("[name='lName']")).sendKeys("Benu");
        element(by.css("[name='email']")).sendKeys("qatest54fo8@mailinator.com");
        element(by.css("[name='userType'] [value='2: FieldOfficer']")).click();
        element(by.css("[value='7']")).click();
        element(by.css("[value='8']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='14']")).click();
        element(by.css("[value='16']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='3']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380113");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        // browser.sleep(2000);
    });

    it('TC_024 User should be able to add user24', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Menishii");
        element(by.css("[name='lName']")).sendKeys("Benuu");
        element(by.css("[name='email']")).sendKeys("qatest55fo8@mailinator.com");
        element(by.css("[name='userType'] [value='2: FieldOfficer']")).click();
        element(by.css("[value='7']")).click();
        element(by.css("[value='8']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='14']")).click();
        element(by.css("[value='16']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='3']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380112");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        // browser.sleep(2000);
    });

    it('TC_025 User should be able to add user25', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Roy");
        element(by.css("[name='lName']")).sendKeys("Benuk");
        element(by.css("[name='email']")).sendKeys("qatest56fo8@mailinator.com");
        element(by.css("[name='userType'] [value='2: FieldOfficer']")).click();
        element(by.css("[value='7']")).click();
        element(by.css("[value='8']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='14']")).click();
        element(by.css("[value='16']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='3']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380111");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        // browser.sleep(2000);
    });

    it('TC_026 User should be able to add user26', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Poll");
        element(by.css("[name='lName']")).sendKeys("Benuj");
        element(by.css("[name='email']")).sendKeys("qatest57fo8@mailinator.com");
        element(by.css("[name='userType'] [value='2: FieldOfficer']")).click();
        element(by.css("[value='7']")).click();
        element(by.css("[value='8']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='14']")).click();
        element(by.css("[value='16']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='3']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380110");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        // browser.sleep(2000);
    });

    it('TC_027 User should be able to add user27', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Menishuk");
        element(by.css("[name='lName']")).sendKeys("Benuk");
        element(by.css("[name='email']")).sendKeys("qatest58fo8@mailinator.com");
        element(by.css("[name='userType'] [value='2: FieldOfficer']")).click();
        element(by.css("[value='7']")).click();
        element(by.css("[value='8']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='14']")).click();
        element(by.css("[value='16']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='3']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380109");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        // browser.sleep(2000);
    });

    it('TC_028 User should be able to add user28', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("George");
        element(by.css("[name='lName']")).sendKeys("Bill");
        element(by.css("[name='email']")).sendKeys("qatest59fo8@mailinator.com");
        element(by.css("[name='userType'] [value='2: FieldOfficer']")).click();
        element(by.css("[value='7']")).click();
        element(by.css("[value='8']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='14']")).click();
        element(by.css("[value='16']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='3']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380108");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        // browser.sleep(2000);
    });

    it('TC_029 User should be able to add user29', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Francis");
        element(by.css("[name='lName']")).sendKeys("Blake");
        element(by.css("[name='email']")).sendKeys("qatest60fo8@mailinator.com");
        element(by.css("[name='userType'] [value='2: FieldOfficer']")).click();
        element(by.css("[value='7']")).click();
        element(by.css("[value='8']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='14']")).click();
        element(by.css("[value='16']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(2) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(3) [value='3']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='1']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='2']")).click();
        element(by.css(".section-details > div:nth-of-type(4) [value='3']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380107");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        // browser.sleep(2000);
    });*/

  it("TC_038 Adding already exists user details", async () => {
    browser.get(
      "https://qa.admin.tracified.com/dashboard/user-manager/add-user"
    );
    element(by.xpath("//input[@name='fName']")).sendKeys("automate");
    element(by.css("[name='lName']")).sendKeys("testing");
    element(by.css("[name='email']")).sendKeys("qatest09fo099@mailinator.com");
    element(by.css("[name='userType'] [value='2: FieldOfficer']")).click();
    element(by.css("[value='7']")).click();
    element(by.css("[value='8']")).click();
    element(by.css("[value='10']")).click();
    element(by.css("[value='14']")).click();
    element(by.css("[value='16']")).click();
    element(by.css("[value='23']")).click();
    element(by.css("[value='29']")).click();
    element(
      by.css(".section-details > div:nth-of-type(2) [value='1']")
    ).click();
    element(
      by.css(".section-details > div:nth-of-type(2) [value='2']")
    ).click();
    element(
      by.css(".section-details > div:nth-of-type(2) [value='3']")
    ).click();
    element(
      by.css(".section-details > div:nth-of-type(3) [value='1']")
    ).click();
    element(
      by.css(".section-details > div:nth-of-type(3) [value='2']")
    ).click();
    element(
      by.css(".section-details > div:nth-of-type(3) [value='3']")
    ).click();
    element(
      by.css(".section-details > div:nth-of-type(4) [value='1']")
    ).click();
    element(
      by.css(".section-details > div:nth-of-type(4) [value='2']")
    ).click();
    element(
      by.css(".section-details > div:nth-of-type(4) [value='3']")
    ).click();
    element(by.css("[name='mobileNo']")).sendKeys("+15854392151");
    await userManagement.clickAddUser();
    await common.validateToast("Oops!");
    // browser.sleep(2000);
  });

  it("TC_039 Enter characters but a short first name", async () => {
    browser.get(
      "https://qa.admin.tracified.com/dashboard/user-manager/add-user"
    );
    await userManagement.enterFName("Ty");
    await userManagement.enterLName("Meilin");
    await common.validateToast4("First name is too short");
    // await browser.sleep(2000);
  });

  it("TC_040 Enter only symbols", async () => {
    browser.get(
      "https://qa.admin.tracified.com/dashboard/user-manager/add-user"
    );
    await userManagement.enterFName("#*#@");
    await userManagement.enterLName("Meilin");
    await common.validateToast4(
      "Invalid entry - First name can only contains letters"
    );
    // await browser.sleep(2000);
  });

  it("TC_041 Enter all numbers", async () => {
    browser.get(
      "https://qa.admin.tracified.com/dashboard/user-manager/add-user"
    );
    await userManagement.enterFName("1234");
    await userManagement.enterLName("Meilin");
    await common.validateToast4(
      "Invalid entry - First name can only contains letters"
    );
    // await browser.sleep(2000);
  });

  it("TC_042 Enter characters with numbers", async () => {
    browser.get(
      "https://qa.admin.tracified.com/dashboard/user-manager/add-user"
    );
    await userManagement.enterFName("ab2r4");
    await userManagement.enterLName("Meilin");
    await common.validateToast4(
      "Invalid entry - First name can only contains letters"
    );
    // await browser.sleep(2000);
  });

  it("TC_043 Enter both characters and symbols", async () => {
    browser.get(
      "https://qa.admin.tracified.com/dashboard/user-manager/add-user"
    );
    await userManagement.enterFName("ab*r#");
    await userManagement.enterLName("Meilin");
    await common.validateToast4(
      "Invalid entry - First name can only contains letters"
    );
    // await browser.sleep(2000);
  });

  it("TC_044 Keep the first name field empty", async () => {
    browser.get(
      "https://qa.admin.tracified.com/dashboard/user-manager/add-user"
    );
    await userManagement.enterFName("");
    await userManagement.enterLName("Meilin");
    await common.validateToast4("Please enter the first name");
    // await browser.sleep(2000);
  });

  it("TC_045 Enter characters but a short last name", async () => {
    browser.get(
      "https://qa.admin.tracified.com/dashboard/user-manager/add-user"
    );
    await userManagement.enterFName("Tiyony");
    await userManagement.enterLName("Me");
    element(by.css("[name='email']")).sendKeys("qatestzd01@mailinator.com");
    await common.validateToast4("Last name is too short");
    // await browser.sleep(2000);
  });

  it("TC_046 Enter only symbols", async () => {
    browser.get(
      "https://qa.admin.tracified.com/dashboard/user-manager/add-user"
    );
    await userManagement.enterFName("Meilin");
    await userManagement.enterLName("#*#@");
    element(by.css("[name='email']")).sendKeys("qatestzd01@mailinator.com");
    await common.validateToast4(
      "Invalid entry - Last name can only contains letters"
    );
    // await browser.sleep(2000);
  });

  it("TC_047 Enter all numbers", async () => {
    browser.get(
      "https://qa.admin.tracified.com/dashboard/user-manager/add-user"
    );
    await userManagement.enterFName("Meilin");
    await userManagement.enterLName("1234");
    element(by.css("[name='email']")).sendKeys("qatestzd01@mailinator.com");
    await common.validateToast4(
      "Invalid entry - Last name can only contains letters"
    );
    // await browser.sleep(2000);
  });

  it("TC_048 Enter characters with numbers", async () => {
    browser.get(
      "https://qa.admin.tracified.com/dashboard/user-manager/add-user"
    );
    await userManagement.enterFName("Meilin");
    await userManagement.enterLName("ab2r4");
    element(by.css("[name='email']")).sendKeys("qatestzd01@mailinator.com");
    await common.validateToast4(
      "Invalid entry - Last name can only contains letters"
    );
    // await browser.sleep(2000);
  });

  it("TC_049 Enter both characters and symbols", async () => {
    browser.get(
      "https://qa.admin.tracified.com/dashboard/user-manager/add-user"
    );
    await userManagement.enterFName("Meilin");
    await userManagement.enterLName("ab*r#");
    element(by.css("[name='email']")).sendKeys("qatestzd01@mailinator.com");
    await common.validateToast4(
      "Invalid entry - Last name can only contains letters"
    );
    // await browser.sleep(2000);
  });

  it("TC_050 Keep the last name field empty", async () => {
    browser.get(
      "https://qa.admin.tracified.com/dashboard/user-manager/add-user"
    );
    await userManagement.enterFName("Meilin");
    await userManagement.enterLName("");
    element(by.css("[name='email']")).sendKeys("qatestzd01@mailinator.com");
    await common.validateToast4("Please enter the last name");
    // await browser.sleep(2000);
  });

  it("TC_051 Enter a invalid email address", async () => {
    browser.get(
      "https://qa.admin.tracified.com/dashboard/user-manager/add-user"
    );
    await userManagement.enterFName("Silvester");
    await userManagement.enterLName("Meilin");
    await userManagement.enterEmail("Meilingmail.com");
    await userManagement.enterMobile("");
    await common.validateToast4("");
    // await browser.sleep(2000);
  });

  it("TC_052 Enter invalid mobile number", async () => {
    browser.get(
      "https://qa.admin.tracified.com/dashboard/user-manager/add-user"
    );
    await userManagement.enterFName("Silvester");
    await userManagement.enterLName("Meilin");
    await userManagement.enterEmail("Meilin@gmail.com");
    await userManagement.enterMobile("");
    await userManagement.enterUserType("1: TraceabilityAdvocate");
    await common.validateToast4("");
    // await browser.sleep(2000);
  });

  it("TC_053 Fill the user details without selecting a  user type", async () => {
    browser.get(
      "https://qa.admin.tracified.com/dashboard/user-manager/add-user"
    );
    await userManagement.enterFName("Silvester");
    await userManagement.enterLName("Meilin");
    await userManagement.enterEmail("Meilin@gmail.com");
    element(by.css("[name='mobileNo']")).sendKeys("+15854392151");
    await userManagement.clickAddUser();
    await common.validateToast("Oops!");
    // await browser.sleep(2000);
  });

  //account funding
  it("TC_036 User should be able to fund accounts", function () {
    element(by.xpath("//span[contains(.,'User Management')]")).click();
    element(
      by.xpath("(//button[contains(@class,'btn btn-outline-primary')])[2]")
    ).click();
    browser.sleep(2000);
    element(
      by.xpath("//input[@class='mr-3']/following-sibling::span[1]")
    ).click();
    element(
      by.xpath("(//button[contains(@class,'btn btn-primary')])[2]")
    ).click();
    browser.sleep(2000);
  });

  it("TC_054 User should be able to navigate to the dashboard", function () {
    element(by.xpath("//span[contains(.,'Dashboard')]")).click();
    // browser.sleep(2000);
  });
});
