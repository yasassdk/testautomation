const { Header } = require("../pages/header/headerPage");
const { browser, element } = require("protractor");
const { Common } = require("../pages/common/common");
const { SignIn } = require("../pages/header/signInPage");

// header
const header = new Header();

// log in
const signIn = new SignIn();

// common
const common = new Common();

describe("Log In - Tracified", () => {
  beforeAll(async () => {
    await browser.manage().window().maximize();
    await browser.manage().timeouts().implicitlyWait(10000);
  });
  beforeEach(async () => {
    await browser.get("https://qa.admin.tracified.com/signup");
  });

  it("TC_114 User should be able to select a subscribe plan - Basic", function () {
    element(
      by.xpath(
        "//div[@class='row my-4 justify-content-center']/div[1]//span[.='Select']"
      )
    ).click();
    browser.sleep(1000);
  });

  it("TC_115 User should be able to select a subscribe plan - Medium", function () {
    element(
      by.xpath(
        "//div[@class='row my-4 justify-content-center']/div[2]//span[.='Select']"
      )
    ).click();
    browser.sleep(1000);
  });

  it("TC_116 User should be able to select a subscribe plan - Enterprise", function () {
    element(
      by.xpath(
        "//div[@class='row my-4 justify-content-center']/div[3]//button[@class='btn btn-primary-900 btn-block mb-2 py-2']"
      )
    ).click();
    browser.sleep(1000);
  });

  it("TC_117 Enter Company name", function () {
    element(
      by.xpath(
        "//div[@class='row my-4 justify-content-center']/div[1]//span[.='Select']"
      )
    ).click();
    element(by.css("#inputBox")).sendKeys("testCompany1");
    // element(by.xpath("//*[@id='inputBox']")).sendKeys("TEST123");
    browser.sleep(1000);
  });

  it("TC_118 Keep company field empty", async () => {
    element(
      by.xpath(
        "//div[@class='row my-4 justify-content-center']/div[1]//span[.='Select']"
      )
    ).click();
    element(by.css("#inputBox")).sendKeys("");
    element(by.css("[placeholder='Address']")).sendKeys("Colombo 10");
    await common.validateToast2("Please enter company name");
    element(by.buttonText("Create Account")).click();
    browser.sleep(1000);
  });

  it("TC_119 Enter Address", function () {
    element(
      by.xpath(
        "//div[@class='row my-4 justify-content-center']/div[1]//span[.='Select']"
      )
    ).click();
    element(by.css("#inputBox")).sendKeys("testCompany1");
    element(by.css("[placeholder='Address']")).sendKeys("Colombo 10");
    browser.sleep(1000);
  });

  it("TC_120 Keep address field empty", async () => {
    element(
      by.xpath(
        "//div[@class='row my-4 justify-content-center']/div[1]//span[.='Select']"
      )
    ).click();
    element(by.css("#inputBox")).sendKeys("testCompany1");
    element(by.css("[placeholder='Address']")).sendKeys("");
    element(by.css("[formcontrolname='country'] [value='Sri Lanka']")).click();
    await common.validateToast2("Please enter company address");
    browser.sleep(1000);
  });

  it("TC_121 Enter country", function () {
    element(
      by.xpath(
        "//div[@class='row my-4 justify-content-center']/div[1]//span[.='Select']"
      )
    ).click();
    element(by.css("#inputBox")).sendKeys("testCompany1");
    element(by.css("[placeholder='Address']")).sendKeys("Colombo 10");
    element(by.css("[formcontrolname='country'] [value='Sri Lanka']")).click();
    browser.sleep(1000);
  });

  it("TC_122 Keep country field empty", async () => {
    element(
      by.xpath(
        "//div[@class='row my-4 justify-content-center']/div[1]//span[.='Select']"
      )
    ).click();
    element(by.css("#inputBox")).sendKeys("testCompany1");
    element(by.css("[placeholder='Address']")).sendKeys("Colombo 10");
    element(
      by.css("[placeholder='Mobile number (ex: +94 7X XXXXXXX)']")
    ).sendKeys("716545678");
    element(by.css("[formcontrolname='domain'] [value='Agriculture']")).click();
    element(by.css("[placeholder='Email Address']")).sendKeys(
      "qatest92@mailinator.com"
    );
    element(by.css("[placeholder='New Password']")).sendKeys("abcd@1234");
    element(by.css("[placeholder='Confirm password']")).sendKeys("abcd@1234");
    browser.sleep(2000);
    element(
      by.xpath("//label[@class='input-icon text-justify tremsAndConditions']")
    ).click();
    element(by.buttonText("Create Account")).click();
    // await common.validateToast2("Please enter a valid mobile number");
    await common.validateToast2("Please select a country");
    browser.sleep(2000);
  });

  it("TC_123 Enter mobile number", function () {
    element(
      by.xpath(
        "//div[@class='row my-4 justify-content-center']/div[1]//span[.='Select']"
      )
    ).click();
    element(by.css("#inputBox")).sendKeys("testCompany1");
    element(by.css("[placeholder='Address']")).sendKeys("Colombo 10");
    element(by.css("[formcontrolname='country'] [value='Sri Lanka']")).click();
    element(
      by.css("[placeholder='Mobile number (ex: +94 7X XXXXXXX)']")
    ).sendKeys("716545678");
    browser.sleep(1000);
  });

  it("TC_124 Keep mobile field empty", async () => {
    element(
      by.xpath(
        "//div[@class='row my-4 justify-content-center']/div[1]//span[.='Select']"
      )
    ).click();
    element(by.css("#inputBox")).sendKeys("testCompany1");
    element(by.css("[placeholder='Address']")).sendKeys("Colombo 10");
    element(by.css("[formcontrolname='country'] [value='Sri Lanka']")).click();
    element(by.css("[formcontrolname='domain'] [value='Agriculture']")).click();
    element(by.css("[placeholder='Email Address']")).sendKeys(
      "qatest91@mailinator.com"
    );
    element(by.css("[placeholder='New Password']")).sendKeys("abcd@1234");
    element(by.css("[placeholder='Confirm password']")).sendKeys("abcd@1234");
    element(
      by.xpath("//label[@class='input-icon text-justify tremsAndConditions']")
    ).click();
    element(by.buttonText("Create Account")).click();
    await common.validateToast2("Please enter a valid mobile number");
    browser.sleep(1000);
  });

  it("TC_125 Select Domain", function () {
    element(
      by.xpath(
        "//div[@class='row my-4 justify-content-center']/div[1]//span[.='Select']"
      )
    ).click();
    element(by.css("#inputBox")).sendKeys("testCompany1");
    element(by.css("[placeholder='Address']")).sendKeys("Colombo 10");
    element(by.css("[formcontrolname='country'] [value='Sri Lanka']")).click();
    element(
      by.css("[placeholder='Mobile number (ex: +94 7X XXXXXXX)']")
    ).sendKeys("716545660");
    element(by.css("[formcontrolname='domain'] [value='Agriculture']")).click();
    browser.sleep(1000);
  });

  it("TC_126 Leave the domain empty", async () => {
    element(
      by.xpath(
        "//div[@class='row my-4 justify-content-center']/div[1]//span[.='Select']"
      )
    ).click();
    element(by.css("#inputBox")).sendKeys("testCompany1");
    element(by.css("[placeholder='Address']")).sendKeys("Colombo 10");
    element(by.css("[formcontrolname='country'] [value='Sri Lanka']")).click();
    element(
      by.css("[placeholder='Mobile number (ex: +94 7X XXXXXXX)']")
    ).sendKeys("716545661");
    element(by.css("[placeholder='Email Address']")).sendKeys(
      "qatest92@mailinator.com"
    );
    element(by.css("[placeholder='New Password']")).sendKeys("abcd@1234");
    element(by.css("[placeholder='Confirm password']")).sendKeys("abcd@1234");
    element(
      by.xpath("//label[@class='input-icon text-justify tremsAndConditions']")
    ).click();
    element(by.buttonText("Create Account")).click();
    await common.validateToast2("Please select a domain");
    browser.sleep(1000);
  });

  it("TC_127 Enter valid email", function () {
    element(
      by.xpath(
        "//div[@class='row my-4 justify-content-center']/div[1]//span[.='Select']"
      )
    ).click();
    element(by.css("#inputBox")).sendKeys("testCompany1");
    element(by.css("[placeholder='Address']")).sendKeys("Colombo 10");
    element(by.css("[formcontrolname='country'] [value='Sri Lanka']")).click();
    element(
      by.css("[placeholder='Mobile number (ex: +94 7X XXXXXXX)']")
    ).sendKeys("716545672");
    element(by.css("[formcontrolname='domain'] [value='Agriculture']")).click();
    element(by.css("[placeholder='Email Address']")).sendKeys(
      "qatest93@mailinator.com"
    );
    browser.sleep(1000);
  });

  it("TC_128 Keep empty email", async () => {
    element(
      by.xpath(
        "//div[@class='row my-4 justify-content-center']/div[1]//span[.='Select']"
      )
    ).click();
    element(by.css("#inputBox")).sendKeys("testCompany1");
    element(by.css("[placeholder='Address']")).sendKeys("Colombo 10");
    element(by.css("[formcontrolname='country'] [value='Sri Lanka']")).click();
    element(
      by.css("[placeholder='Mobile number (ex: +94 7X XXXXXXX)']")
    ).sendKeys("716545673");
    element(by.css("[formcontrolname='domain'] [value='Agriculture']")).click();
    element(by.css("[placeholder='Email Address']")).sendKeys("");
    element(by.css("[placeholder='New Password']")).sendKeys("abcd@1234");
    element(by.css("[placeholder='Confirm password']")).sendKeys("abcd@1234");
    element(
      by.xpath("//label[@class='input-icon text-justify tremsAndConditions']")
    ).click();
    browser.sleep(2000);
    element(by.buttonText("Create Account")).click();
    await common.validateToast2("Please enter a valid email address");
    browser.sleep(1000);
  });

  it("TC_128 Enter invalid email", async () => {
    element(
      by.xpath(
        "//div[@class='row my-4 justify-content-center']/div[1]//span[.='Select']"
      )
    ).click();
    element(by.css("#inputBox")).sendKeys("testCompany1");
    element(by.css("[placeholder='Address']")).sendKeys("Colombo 10");
    element(by.css("[formcontrolname='country'] [value='Sri Lanka']")).click();
    element(
      by.css("[placeholder='Mobile number (ex: +94 7X XXXXXXX)']")
    ).sendKeys("716545673");
    element(by.css("[formcontrolname='domain'] [value='Agriculture']")).click();
    element(by.css("[placeholder='Email Address']")).sendKeys(
      "abcd@@gmail.com"
    );
    element(by.css("[placeholder='New Password']")).sendKeys("abcd@1234");
    await common.validateToast2("Please enter a valid email address");
    browser.sleep(1000);
  });

  it("TC_129 Enter a valid password", function () {
    element(
      by.xpath(
        "//div[@class='row my-4 justify-content-center']/div[1]//span[.='Select']"
      )
    ).click();
    element(by.css("#inputBox")).sendKeys("testCompany1");
    element(by.css("[placeholder='Address']")).sendKeys("Colombo 10");
    element(by.css("[formcontrolname='country'] [value='Sri Lanka']")).click();
    element(
      by.css("[placeholder='Mobile number (ex: +94 7X XXXXXXX)']")
    ).sendKeys("716545674");
    element(by.css("[formcontrolname='domain'] [value='Agriculture']")).click();
    element(by.css("[placeholder='Email Address']")).sendKeys(
      "qatest94@mailinator.com"
    );
    element(by.css("[placeholder='New Password']")).sendKeys("abcd@1234");
    browser.sleep(1000);
  });

  it("TC_130 Enter a invalid password (weak)", async () => {
    element(
      by.xpath(
        "//div[@class='row my-4 justify-content-center']/div[1]//span[.='Select']"
      )
    ).click();
    element(by.css("#inputBox")).sendKeys("testCompany1");
    element(by.css("[placeholder='Address']")).sendKeys("Colombo 10");
    element(by.css("[formcontrolname='country'] [value='Sri Lanka']")).click();
    element(
      by.css("[placeholder='Mobile number (ex: +94 7X XXXXXXX)']")
    ).sendKeys("716545675");
    element(by.css("[formcontrolname='domain'] [value='Agriculture']")).click();
    element(by.css("[placeholder='Email Address']")).sendKeys(
      "qatest999@mailinator.com"
    );
    element(by.css("[placeholder='New Password']")).sendKeys("ab");
    element(by.css("[placeholder='Confirm password']")).sendKeys("ab");
    await common.validateToast2("Try again with a stronger password");
    browser.sleep(1000);
  });

  it("TC_131 Enter a valid confirm password", function () {
    element(
      by.xpath(
        "//div[@class='row my-4 justify-content-center']/div[1]//span[.='Select']"
      )
    ).click();
    element(by.css("#inputBox")).sendKeys("testCompany1");
    element(by.css("[placeholder='Address']")).sendKeys("Colombo 10");
    element(by.css("[formcontrolname='country'] [value='Sri Lanka']")).click();
    element(
      by.css("[placeholder='Mobile number (ex: +94 7X XXXXXXX)']")
    ).sendKeys("716545676");
    element(by.css("[formcontrolname='domain'] [value='Agriculture']")).click();
    element(by.css("[placeholder='Email Address']")).sendKeys(
      "qatest96@mailinator.com"
    );
    element(by.css("[placeholder='New Password']")).sendKeys("abcd@1234");
    element(by.css("[placeholder='Confirm password']")).sendKeys("abcd@1234");
    browser.sleep(1000);
  });

  it("TC_132 Enter a invalid confirm password", async () => {
    element(
      by.xpath(
        "//div[@class='row my-4 justify-content-center']/div[1]//span[.='Select']"
      )
    ).click();
    element(by.css("#inputBox")).sendKeys("testCompany1");
    element(by.css("[placeholder='Address']")).sendKeys("Colombo 10");
    element(by.css("[formcontrolname='country'] [value='Sri Lanka']")).click();
    element(
      by.css("[placeholder='Mobile number (ex: +94 7X XXXXXXX)']")
    ).sendKeys("716545677");
    element(by.css("[formcontrolname='domain'] [value='Agriculture']")).click();
    element(by.css("[placeholder='Email Address']")).sendKeys(
      "qatest997@mailinator.com"
    );
    element(by.css("[placeholder='New Password']")).sendKeys("abcd@1234");
    element(by.css("[placeholder='Confirm password']")).sendKeys("abcd1234");
    element(
      by.xpath("//label[@class='input-icon text-justify tremsAndConditions']")
    ).click();
    // element(by.buttonText("Create Account")).click();
    await common.validateToast2("Passwords do not match");
    browser.sleep(1000);
  });

  it('TC_133 Keep "password" field empty', async () => {
    element(
      by.xpath(
        "//div[@class='row my-4 justify-content-center']/div[1]//span[.='Select']"
      )
    ).click();
    element(by.css("#inputBox")).sendKeys("testCompany1");
    element(by.css("[placeholder='Address']")).sendKeys("Colombo 10");
    element(by.css("[formcontrolname='country'] [value='Sri Lanka']")).click();
    element(
      by.css("[placeholder='Mobile number (ex: +94 7X XXXXXXX)']")
    ).sendKeys("716545679");
    element(by.css("[formcontrolname='domain'] [value='Agriculture']")).click();
    element(by.css("[placeholder='Email Address']")).sendKeys(
      "qatest99@mailinator.com"
    );
    element(by.css("[placeholder='Confirm password']")).sendKeys("abcd1234");
    element(
      by.xpath("//label[@class='input-icon text-justify tremsAndConditions']")
    ).click();
    element(by.buttonText("Create Account")).click();
    await common.validateToast2("Please enter a password");
    browser.sleep(1000);
  });

  it('TC_134 Keep "confirm password" field empty', async () => {
    element(
      by.xpath(
        "//div[@class='row my-4 justify-content-center']/div[1]//span[.='Select']"
      )
    ).click();
    element(by.css("#inputBox")).sendKeys("testCompany1");
    element(by.css("[placeholder='Address']")).sendKeys("Colombo 10");
    element(by.css("[formcontrolname='country'] [value='Sri Lanka']")).click();
    element(
      by.css("[placeholder='Mobile number (ex: +94 7X XXXXXXX)']")
    ).sendKeys("716545680");
    element(by.css("[formcontrolname='domain'] [value='Agriculture']")).click();
    element(by.css("[placeholder='Email Address']")).sendKeys(
      "qatest99@mailinator.com"
    );
    element(by.css("[placeholder='New Password']")).sendKeys("abcd@1234");
    element(
      by.xpath("//label[@class='input-icon text-justify tremsAndConditions']")
    ).click();
    element(by.buttonText("Create Account")).click();
    await common.validateToast2("Please confirm password");
    browser.sleep(1000);
  });

  it("TC_135 Confirm the terms and conditions", function () {
    element(
      by.xpath(
        "//div[@class='row my-4 justify-content-center']/div[1]//span[.='Select']"
      )
    ).click();
    element(by.css("#inputBox")).sendKeys("testCompany-Delete5");
    element(by.css("[placeholder='Address']")).sendKeys("Colombo 10");
    element(by.css("[formcontrolname='country'] [value='Sri Lanka']")).click();
    element(
      by.css("[placeholder='Mobile number (ex: +94 7X XXXXXXX)']")
    ).sendKeys("716545633");
    element(by.css("[formcontrolname='domain'] [value='Agriculture']")).click();
    element(by.css("[placeholder='Email Address']")).sendKeys(
      "qatest112233@mailinator.com"
    );
    element(by.css("[placeholder='New Password']")).sendKeys("abcd@1234");
    element(by.css("[placeholder='Confirm password']")).sendKeys("abcd@1234");
    element(
      by.xpath("//label[@class='input-icon text-justify tremsAndConditions']")
    ).click();
    element(by.buttonText("Create Account")).click();
    browser.sleep(1000);
  });
});
