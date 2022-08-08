const { element } = require("protractor");
const { Header } = require("../pages/header/headerPage");
const { UserManagement } = require("../pages/header/userManagementPage");
const { BasicPlan } = require("../pages/header/basicPlanPage");
const { Common } = require("../pages/common/common");

// header
const header = new Header()

// common
const common = new Common()

// user management
const userManagement = new UserManagement()

// basic plan
const basicPlan = new BasicPlan()

describe('Basic Plan', function() {
   
    beforeEach(function() {
        browser.get("https://qa.admin.tracified.com/dashboard/home");
        browser.ignoreSynchronization = true;
    });

    it('TC_104 Checking for the no of products 30 - Product 1', function() {
        element(by.xpath("//a[contains(.,'Tracified Items')]")).click();
        element(by.css('.btn-primary-900')).click();
        element(by.css("[placeholder='Enter item name']")).sendKeys("Carrot1");
        element(by.xpath("//ul[@class='list-group']/li[1]//label[@class='label-default']")).click();
        element(by.buttonText('Save')).click();
        browser.sleep(4000);
    });

    it('TC_104 Checking for the no of products 30 - Product 2', function() {
        element(by.xpath("//span[contains(.,'Tracified Items')]")).click();
        element(by.css('.btn-primary-900')).click();
        element(by.css("[placeholder='Enter item name']")).sendKeys("Leeks");
        element(by.xpath("//ul[@class='list-group']/li[1]//label[@class='label-default']")).click();
        browser.sleep(4000);
    });

    it('TC_104 Checking for the no of products 30 - Product 3', function() {
        element(by.xpath("//span[contains(.,'Tracified Items')]")).click();
        element(by.css('.btn-primary-900')).click();
        element(by.css("[placeholder='Enter item name']")).sendKeys("Beans");
        element(by.xpath("//ul[@class='list-group']/li[1]//label[@class='label-default']")).click();
        browser.sleep(4000);
    });

    
    /*it('TC_001 User should be able to add user 1', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Shenon");
        element(by.css("[name='lName']")).sendKeys("Powl");
        element(by.css("[name='email']")).sendKeys("qatest30fO30@mailinator.com");
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
        element(by.css("[name='mobileNo']")).sendKeys("+15854380065");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        browser.sleep(4000);
    });

    it('TC_002 User should be able to add user2', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Silvyaa");
        element(by.css("[name='lName']")).sendKeys("Nawronii");
        element(by.css("[name='email']")).sendKeys("qatest30fO31@mailinator.com");
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
        element(by.css("[name='mobileNo']")).sendKeys("+15854380064");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        browser.sleep(4000);
    });

    it('TC_003 User should be able to add user3', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Anne");
        element(by.css("[name='lName']")).sendKeys("Wellingtono");
        element(by.css("[name='email']")).sendKeys("qatest30fO32@mailinator.com");
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
        element(by.css("[name='mobileNo']")).sendKeys("+15854380063");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        browser.sleep(4000);
    });
    
    it('TC_004 User should be able to add user4', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Sily");
        element(by.css("[name='lName']")).sendKeys("Nawro");
        element(by.css("[name='email']")).sendKeys("qatest30fO33@mailinator.com");
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
        element(by.css("[name='mobileNo']")).sendKeys("+15854380062");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        browser.sleep(4000);
    });
    
    it('TC_005 User should be able to add user5', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Sila");
        element(by.css("[name='lName']")).sendKeys("Nawra");
        element(by.css("[name='email']")).sendKeys("qatest30fO34@mailinator.com");
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
        element(by.css("[name='mobileNo']")).sendKeys("+15854380061");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        browser.sleep(4000);
    });
    
    it('TC_006 User should be able to add user6', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Silyb");
        element(by.css("[name='lName']")).sendKeys("Nawrob");
        element(by.css("[name='email']")).sendKeys("qatest30fO35@mailinator.com");
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
        element(by.css("[name='mobileNo']")).sendKeys("+15854380060");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        browser.sleep(4000);
    });
    
    it('TC_007 User should be able to add user7', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Silyc");
        element(by.css("[name='lName']")).sendKeys("Nawroc");
        element(by.css("[name='email']")).sendKeys("qatest30fO36@mailinator.com");
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
        element(by.css("[name='mobileNo']")).sendKeys("+15854380059");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        browser.sleep(4000);
    });
    
    it('TC_008 User should be able to add user8', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Silyd");
        element(by.css("[name='lName']")).sendKeys("Nawrod");
        element(by.css("[name='email']")).sendKeys("qatest30fO37@mailinator.com");
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
        element(by.css("[name='mobileNo']")).sendKeys("+15854380058");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        browser.sleep(4000);
    });
    
    it('TC_009 User should be able to add user9', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Silye");
        element(by.css("[name='lName']")).sendKeys("Nawroe");
        element(by.css("[name='email']")).sendKeys("qatest30fO38@mailinator.com");
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
        element(by.css("[name='mobileNo']")).sendKeys("+15854380057");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        browser.sleep(4000);
    });
    
    it('TC_010 User should be able to add user10', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Silyf");
        element(by.css("[name='lName']")).sendKeys("Nawrof");
        element(by.css("[name='email']")).sendKeys("qatest30fO39@mailinator.com");
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
        element(by.css("[name='mobileNo']")).sendKeys("+15854380056");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        browser.sleep(4000);
    });
    
    it('TC_011 User should be able to add user11', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Silyg");
        element(by.css("[name='lName']")).sendKeys("Nawrog");
        element(by.css("[name='email']")).sendKeys("qatest30fO40@mailinator.com");
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
        element(by.css("[name='mobileNo']")).sendKeys("+15854380055");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        browser.sleep(4000);
    });
    
    it('TC_012 User should be able to add user12', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Silyh");
        element(by.css("[name='lName']")).sendKeys("Nawroh");
        element(by.css("[name='email']")).sendKeys("qatest30fO41@mailinator.com");
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
        element(by.css("[name='mobileNo']")).sendKeys("+15854380054");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        browser.sleep(4000);
    });
    
    it('TC_013 User should be able to add user13', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Silyi");
        element(by.css("[name='lName']")).sendKeys("Nawroi");
        element(by.css("[name='email']")).sendKeys("qatest30fO42@mailinator.com");
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
        element(by.css("[name='mobileNo']")).sendKeys("+15854380053");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        browser.sleep(4000);
    });
    
    it('TC_014 User should be able to add user14', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Silyj");
        element(by.css("[name='lName']")).sendKeys("Nawroj");
        element(by.css("[name='email']")).sendKeys("qatest30fO43@mailinator.com");
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
        element(by.css("[name='mobileNo']")).sendKeys("+15854380052");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        browser.sleep(4000);
    });
    
    it('TC_015 User should be able to add user15', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Silyk");
        element(by.css("[name='lName']")).sendKeys("Nawrok");
        element(by.css("[name='email']")).sendKeys("qatest30fO44@mailinator.com");
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
        element(by.css("[name='mobileNo']")).sendKeys("+15854380051");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        browser.sleep(4000);
    });
    
    it('TC_016 User should be able to add user16', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Menish");
        element(by.css("[name='lName']")).sendKeys("Ben");
        element(by.css("[name='email']")).sendKeys("qatest30fO45@mailinator.com");
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
        element(by.css("[name='mobileNo']")).sendKeys("+15854380050");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        browser.sleep(4000);
    }); 
    
    it('TC_017 User should be able to add user17', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Menisha");
        element(by.css("[name='lName']")).sendKeys("Bena");
        element(by.css("[name='email']")).sendKeys("qatest30fO46@mailinator.com");
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
        element(by.css("[name='mobileNo']")).sendKeys("+15854380049");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        browser.sleep(4000);
    });
    
    it('TC_018 User should be able to add user18', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Menishi");
        element(by.css("[name='lName']")).sendKeys("Beni");
        element(by.css("[name='email']")).sendKeys("qatest30fO47@mailinator.com");
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
        element(by.css("[name='mobileNo']")).sendKeys("+15854380048");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        browser.sleep(4000);
    });
    
    it('TC_019 User should be able to add user19', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Menisho");
        element(by.css("[name='lName']")).sendKeys("Beno");
        element(by.css("[name='email']")).sendKeys("qatest30fO48@mailinator.com");
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
        element(by.css("[name='mobileNo']")).sendKeys("+15854380047");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        browser.sleep(4000);
    });
    
   it('TC_020 User should be able to add user20', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Menishu");
        element(by.css("[name='lName']")).sendKeys("Benu");
        element(by.css("[name='email']")).sendKeys("qatest30fO49@mailinator.com");
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
        element(by.css("[name='mobileNo']")).sendKeys("+15854380046");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        browser.sleep(4000);
    });

    it('TC_021 User should be able to add user21', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Menishn");
        element(by.css("[name='lName']")).sendKeys("Benun");
        element(by.css("[name='email']")).sendKeys("qatest31fO50@mailinator.com");
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
        element(by.css("[name='mobileNo']")).sendKeys("+15854380045");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        browser.sleep(4000);
    });

    it('TC_022 User should be able to add user22', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Menishu");
        element(by.css("[name='lName']")).sendKeys("Benu");
        element(by.css("[name='email']")).sendKeys("qatest30fO51@mailinator.com");
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
        element(by.css("[name='mobileNo']")).sendKeys("+15854380044");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        browser.sleep(4000);
    });

    it('TC_023 User should be able to add user23', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Menishu");
        element(by.css("[name='lName']")).sendKeys("Benu");
        element(by.css("[name='email']")).sendKeys("qatest30fO52@mailinator.com");
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
        element(by.css("[name='mobileNo']")).sendKeys("+15854380043");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        browser.sleep(4000);
    });

    it('TC_024 User should be able to add user24', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Menishii");
        element(by.css("[name='lName']")).sendKeys("Benuu");
        element(by.css("[name='email']")).sendKeys("qatest30fO53@mailinator.com");
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
        element(by.css("[name='mobileNo']")).sendKeys("+15854380042");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        browser.sleep(4000);
    });

    it('TC_025 User should be able to add user25', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Roy");
        element(by.css("[name='lName']")).sendKeys("Benuk");
        element(by.css("[name='email']")).sendKeys("qatest30fO54@mailinator.com");
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
        element(by.css("[name='mobileNo']")).sendKeys("+15854380041");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        browser.sleep(4000);
    });

    it('TC_026 User should be able to add user26', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Poll");
        element(by.css("[name='lName']")).sendKeys("Benuj");
        element(by.css("[name='email']")).sendKeys("qatest30fO55@mailinator.com");
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
        element(by.css("[name='mobileNo']")).sendKeys("+15854380040");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        browser.sleep(4000);
    });

    it('TC_027 User should be able to add user27', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Menishuk");
        element(by.css("[name='lName']")).sendKeys("Benuk");
        element(by.css("[name='email']")).sendKeys("qatest30fO56@mailinator.com");
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
        element(by.css("[name='mobileNo']")).sendKeys("+15854380039");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        browser.sleep(4000);
    });

    it('TC_027 User should be able to add user27', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Menishuk");
        element(by.css("[name='lName']")).sendKeys("Benuk");
        element(by.css("[name='email']")).sendKeys("qatest30fO56@mailinator.com");
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
        element(by.css("[name='mobileNo']")).sendKeys("+15854380039");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        browser.sleep(4000);
    });

    it('TC_028 User should be able to add user28', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("George");
        element(by.css("[name='lName']")).sendKeys("Bill");
        element(by.css("[name='email']")).sendKeys("qatest30fO57@mailinator.com");
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
        element(by.css("[name='mobileNo']")).sendKeys("+15854380038");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        browser.sleep(4000);
    });

    it('TC_028 User should be able to add user28', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("George");
        element(by.css("[name='lName']")).sendKeys("Bill");
        element(by.css("[name='email']")).sendKeys("qatest30fO57@mailinator.com");
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
        element(by.css("[name='mobileNo']")).sendKeys("+15854380038");
        await userManagement.clickAddUser();
        await common.validateToast("Success!")
        browser.sleep(4000);
    });

    it('TC_029 Check if the no of users to exceed FO users', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Francis");
        element(by.css("[name='lName']")).sendKeys("Blake");
        element(by.css("[name='email']")).sendKeys("qatest30fO58@mailinator.com");
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
        element(by.css("[name='mobileNo']")).sendKeys("+15854380037");
        await userManagement.clickAddUser();
        await common.validateToast("Error!")
        browser.sleep(4000);
    });*/

    /*it('TC_029 Should be able to add admin users', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Ruslan");
        element(by.css("[name='lName']")).sendKeys("Alex");
        element(by.css("[name='email']")).sendKeys("qatest30ta01@mailinator.com");
        element(by.css("[name='userType'] [value='1: TraceabilityAdvocate']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='39']")).click();
        element(by.css("[value='38']")).click();
        element(by.css("[value='34']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css("[value='17']")).click();
        element(by.css("[value='12']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380200");
        await userManagement.clickAddUser();
        await common.validateToast("Error!")
        browser.sleep(4000);
    });*/

    //Check if the no of admin users can exceed
    //Should not exceed above 5 users
    /*it('TC_029 Should be able to add admin users', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Ashash");
        element(by.css("[name='lName']")).sendKeys("Menix");
        element(by.css("[name='email']")).sendKeys("qatest30ta02@mailinator.com");
        element(by.css("[name='userType'] [value='1: TraceabilityAdvocate']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='39']")).click();
        element(by.css("[value='38']")).click();
        element(by.css("[value='34']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css("[value='17']")).click();
        element(by.css("[value='12']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380201");
        await userManagement.clickAddUser();
        await common.validateToast("Error!")
        browser.sleep(4000);
    });

    it('TC_029 Should be able to add admin users', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("John");
        element(by.css("[name='lName']")).sendKeys("Doe");
        element(by.css("[name='email']")).sendKeys("qatest30ta03@mailinator.com");
        element(by.css("[name='userType'] [value='1: TraceabilityAdvocate']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='39']")).click();
        element(by.css("[value='38']")).click();
        element(by.css("[value='34']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css("[value='17']")).click();
        element(by.css("[value='12']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380203");
        await userManagement.clickAddUser();
        await common.validateToast("Error!")
        browser.sleep(4000);
    });

    it('TC_029 Should be able to add admin users', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Shen");
        element(by.css("[name='lName']")).sendKeys("Blex");
        element(by.css("[name='email']")).sendKeys("qatest30ta04@mailinator.com");
        element(by.css("[name='userType'] [value='1: TraceabilityAdvocate']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='39']")).click();
        element(by.css("[value='38']")).click();
        element(by.css("[value='34']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css("[value='17']")).click();
        element(by.css("[value='12']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380204");
        await userManagement.clickAddUser();
        await common.validateToast("Error!")
        browser.sleep(4000);
    });

    it('TC_029 Should be able to add admin users', async () => {
        element(by.xpath("//span[contains(.,'User Management')]")).click();
        element(by.css('.fa-plus')).click();
        element(by.css("[name='fName']")).sendKeys("Shone");
        element(by.css("[name='lName']")).sendKeys("Plex");
        element(by.css("[name='email']")).sendKeys("qatest30ta05@mailinator.com");
        element(by.css("[name='userType'] [value='1: TraceabilityAdvocate']")).click();
        element(by.css("[value='10']")).click();
        element(by.css("[value='39']")).click();
        element(by.css("[value='38']")).click();
        element(by.css("[value='34']")).click();
        element(by.css("[value='23']")).click();
        element(by.css("[value='29']")).click();
        element(by.css("[value='17']")).click();
        element(by.css("[value='12']")).click();
        element(by.css("[name='mobileNo']")).sendKeys("+15854380205");
        await userManagement.clickAddUser();
        await common.validateToast("Error!")
        browser.sleep(4000);
    });*/

    it('TC_040 Acess to Insights - Traceability data', function() {
        element(by.xpath("//span[@class='mr-2']")).click();
        element(by.css("[href='https://qa.insights.tracified.com/']")).click(); 
        browser.sleep(4000);
    });

    it('TC_040 Acess to Insights - Traceability data', function() {
        element(by.xpath("//span[@class='mr-2']")).click();
        element(by.css("[href='https://qa.insights.tracified.com/']")).click(); 
        element(by.css("[ng-reflect-router-link='/dashboard/feedback'] > [_ngcontent-c2]")).click(); 
        browser.sleep(4000);
    });

})  