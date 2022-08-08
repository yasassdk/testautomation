const { Header } = require("../pages/header/headerPage");
const { browser } = require("protractor");
const { Common } = require("../pages/common/common");
const { BcAccount } = require("../pages/header/bcAccountPage");

// header
const header = new Header()

// log in
const bcAccount = new BcAccount()

// common
const common = new Common()

describe("Log In - Tracified", () => {

    beforeAll(async () => {
        await browser.manage().window().maximize()
        await browser.manage().timeouts().implicitlyWait(10000)
    })
    beforeEach(async () => {
        await browser.get("https://qa.admin.tracified.com/blockchain-signup")
    })

    it('TC_095 Enter username', function() {
        element(by.css("#accountName")).sendKeys("qatest30@mailinator.com");
        browser.sleep(2000);
    });

    it('TC_096 Keep the user name empty', function() {
        element(by.css("#accountName")).sendKeys("");
        element(by.css("[placeholder='Txn Password']")).sendKeys("abcd@1234");
        browser.sleep(2000);
    });

    it('TC_097 Enter a valid password', function() {
        element(by.css("#accountName")).sendKeys("");
        element(by.css("[placeholder='Txn Password']")).sendKeys("abcd@1234");
        browser.sleep(2000);
    });

    it('TC_098 Enter a valid confirm password', function() {
        element(by.css("#accountName")).sendKeys("");
        element(by.css("[placeholder='Txn Password']")).sendKeys("abcd@1234");
        element(by.css("[placeholder='Re-type Txn Password']")).sendKeys("abcd@1234");
        browser.sleep(2000);
    });

    it('TC_099 Enter a invalid confirm password', function() {
        element(by.css("#accountName")).sendKeys("");
        element(by.css("[placeholder='Txn Password']")).sendKeys("abcd@1234");
        element(by.css("[placeholder='Re-type Txn Password']")).sendKeys("abcd1234");
        browser.sleep(2000);
    });

    it('TC_100 Enter a valid password and an invalid confirm password', function() {
        element(by.css("#accountName")).sendKeys("");
        element(by.css("[placeholder='Txn Password']")).sendKeys("abcd@1234");
        element(by.css("[placeholder='Re-type Txn Password']")).sendKeys("abcd1234");
        browser.sleep(2000);
    });

    it('TC_101 Keep "password" field empty', function() {
        element(by.css("#accountName")).sendKeys("");
        element(by.css("[placeholder='Txn Password']")).sendKeys("");
        element(by.css("[placeholder='Re-type Txn Password']")).sendKeys("abcd1234");
        browser.sleep(2000);
    });

    it('TC_102 Keep "confirm password" field empty', function() {
        element(by.css("#accountName")).sendKeys("");
        element(by.css("[placeholder='Txn Password']")).sendKeys("abcd@1234");
        element(by.css("[placeholder='Re-type Txn Password']")).sendKeys("");
        browser.sleep(2000);
    });

    it('TC_103 Generate keys', function() {
        element(by.css("#accountName")).sendKeys("");
        element(by.css("[placeholder='Txn Password']")).sendKeys("abcd@1234");
        element(by.css("[placeholder='Re-type Txn Password']")).sendKeys("abcd@1234");
        element(by.buttonText('Generate Keys')).click();
        browser.sleep(2000);
    });

    /* 

    it('TC_089 Keep "password" field empty', function() {
        element(by.xpath("//div[@class='row my-4 justify-content-center']/div[1]//span[.='Select']")).click();
        element(by.css("#inputBox")).sendKeys("testCompany1");
        element(by.css("[placeholder='Address']")).sendKeys("Colombo 10");
        element(by.css("[formcontrolname='country'] [value='Sri Lanka']")).click();
        element(by.css("[placeholder='Mobile number (ex: +94 7X XXXXXXX)']")).sendKeys("716545678");
        element(by.css("[formcontrolname='domain'] [value='Agriculture']")).click();
        element(by.css("[placeholder='Email Address']")).sendKeys("qatest33@mailinator.com");
        element(by.css("[placeholder='Confirm password']")).sendKeys("abcd1234");
        browser.sleep(2000);
    });

    it('TC_090 Keep "confirm password" field empty', function() {
        element(by.xpath("//div[@class='row my-4 justify-content-center']/div[1]//span[.='Select']")).click();
        element(by.css("#inputBox")).sendKeys("testCompany1");
        element(by.css("[placeholder='Address']")).sendKeys("Colombo 10");
        element(by.css("[formcontrolname='country'] [value='Sri Lanka']")).click();
        element(by.css("[placeholder='Mobile number (ex: +94 7X XXXXXXX)']")).sendKeys("716545678");
        element(by.css("[formcontrolname='domain'] [value='Agriculture']")).click();
        element(by.css("[placeholder='Email Address']")).sendKeys("qatest33@mailinator.com");
        element(by.css("[placeholder='New Password']")).sendKeys("abcd@1234");
        element(by.xpath("//label[@class='input-icon text-justify tremsAndConditions']")).click();
        browser.sleep(2000);
    });

    it('TC_091 Confirm the terms and conditions', function() {
        element(by.xpath("//div[@class='row my-4 justify-content-center']/div[1]//span[.='Select']")).click();
        element(by.css("#inputBox")).sendKeys("testCompany4");
        element(by.css("[placeholder='Address']")).sendKeys("Colombo 10");
        element(by.css("[formcontrolname='country'] [value='Sri Lanka']")).click();
        element(by.css("[placeholder='Mobile number (ex: +94 7X XXXXXXX)']")).sendKeys("716545678");
        element(by.css("[formcontrolname='domain'] [value='Agriculture']")).click();
        element(by.css("[placeholder='Email Address']")).sendKeys("qatest33@mailinator.com");
        element(by.css("[placeholder='New Password']")).sendKeys("abcd@1234");
        element(by.css("[placeholder='Confirm password']")).sendKeys("abcd@1234");
        element(by.xpath("//label[@class='input-icon text-justify tremsAndConditions']")).click();
        element(by.buttonText('Create Account')).click();
        browser.sleep(2000);
    });*/

})  