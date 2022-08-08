const { element } = require("protractor");
const { AccountSettings } = require("../pages/header/accountSettingsPage");

// accountSettings
const accountSettings = new AccountSettings()

describe("AccountSettings - Tracified", function() {

    beforeEach(function() {
        browser.get("https://qa.admin.tracified.com/dashboard/home");
        browser.ignoreSynchronization = true;
    });

    it('TC_106 Navigate to account settings', function() {
        element(by.xpath("//div[@class='d-flex align-items-center']/img[@src='../../../assets/img/default-user.png']")).click();
        element(by.xpath("//span[.='Account Settings']")).click(); 
        browser.sleep(1000);
    });

    it('TC_107 Edit the account name', function() {
        element(by.xpath("//div[@class='d-flex align-items-center']/img[@src='../../../assets/img/default-user.png']")).click();
        element(by.xpath("//span[.='Account Settings']")).click(); 
        element(by.xpath("//i[@class='fa fa-pencil fa-2x username-edit']")).click(); 
        browser.sleep(4000);
    });
    
    it('TC_108 Press the change profile picture button', function() {
        element(by.xpath("//div[@class='d-flex align-items-center']/img[@src='../../../assets/img/default-user.png']")).click();
        element(by.xpath("//span[.='Account Settings']")).click(); 
        element(by.css('.mask')).click(); 
        browser.sleep(4000);
    });

    it('TC_109 Enter the current password', function() {
        element(by.xpath("//div[@class='d-flex align-items-center']/img[@src='../../../assets/img/default-user.png']")).click();
        element(by.xpath("//span[.='Account Settings']")).click(); 
        element(by.xpath("//input[@name='currentPassword']")).sendKeys("abcd@1234");
        browser.sleep(4000);
    });

    it('TC_110 Enter the new password (should be a strong password)', function() {
        element(by.xpath("//div[@class='d-flex align-items-center']/img[@src='../../../assets/img/default-user.png']")).click();
        element(by.xpath("//span[.='Account Settings']")).click(); 
        element(by.xpath("//input[@name='newPassword']")).sendKeys("12DaDSe@@8");
        browser.sleep(4000);
    });

    it('TC_111 Enter a weak password', function() {
        element(by.xpath("//div[@class='d-flex align-items-center']/img[@src='../../../assets/img/default-user.png']")).click();
        element(by.xpath("//span[.='Account Settings']")).click(); 
        element(by.xpath("//input[@name='newPassword']")).sendKeys("12");
        browser.sleep(4000);
    });

    it('TC_112 Confirm  the correct password', function() {
        element(by.xpath("//div[@class='d-flex align-items-center']/img[@src='../../../assets/img/default-user.png']")).click();
        element(by.xpath("//span[.='Account Settings']")).click(); 
        element(by.xpath("//input[@name='newPassword']")).sendKeys("12DaDSe@@8");
        element(by.xpath("//input[@name='confirmPassword']")).sendKeys("12DaDSe@@8");
        browser.sleep(4000);
    });

    it('TC_113 Press the change password button', function() {
        element(by.xpath("//div[@class='d-flex align-items-center']/img[@src='../../../assets/img/default-user.png']")).click();
        element(by.xpath("//span[.='Account Settings']")).click(); 
        element(by.xpath("//input[@name='currentPassword']")).sendKeys("abcd@1234");
        element(by.xpath("//input[@name='newPassword']")).sendKeys("12DaDSe@@8");
        element(by.xpath("//input[@name='confirmPassword']")).sendKeys("12DaDSe@@8");
        //element(by.buttonText('Change Password')).click();
        browser.sleep(4000);
    });
})     