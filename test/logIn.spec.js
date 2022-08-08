const { Header } = require("../pages/header/headerPage");
const { browser } = require("protractor");
const { Common } = require("../pages/common/common");
const { LogIn } = require("../pages/header/logInPage");

// header
const header = new Header();

// log in
const logIn = new LogIn();

// common
const common = new Common();

describe("Log In - Tracified", () => {
  beforeAll(async () => {
    await browser.manage().window().maximize();
    await browser.manage().timeouts().implicitlyWait(10000);
  });
  beforeEach(async () => {
    await browser.get("https://qa.admin.tracified.com/login");
  });

  //TS 1 - User should be able to enter username

  // it("TC_001 should have correct titles and button text", () => {
  //   expect(logIn.emailLabel.getElement()).toEqual("email");
  //   expect(logIn.passwordLabel.getElement()).toEqual("Password");
  //   expect(logIn.signIn.getElement()).toEqual("Log in");
  // });

  // it("TC_002 Enter a valid email and an invalid password", async () => {
  //   await logIn.enterEmail("thinuriw@tracified.com");
  //   await logIn.enterPassword("abcd");
  //   await logIn.clickSignIn();
  //   await common.validateToast(
  //     "You have entered an invalid username or password"
  //   );

  //   browser.sleep(2000);
  // });

  // it("TC_003 Enter an invalid email and  a valid password", async () => {
  //   await logIn.enterEmail("zaida123@tracified.com");
  //   await logIn.enterPassword("abcd@1234");
  //   await logIn.clickSignIn();
  //   await common.validateToast(
  //     "You have entered an invalid username or password"
  //   );
  //   browser.sleep(2000);
  // });

  // it("TC_004 Enter an invalid email and an invalid password", async () => {
  //   await logIn.enterEmail("zaida123@tracified.com");
  //   await logIn.enterPassword("abcd");
  //   await logIn.clickSignIn();
  //   await common.validateToast(
  //     "You have entered an invalid username or password"
  //   );
  //   browser.sleep(2000);
  // });

  //   it("TC_005 Keep password empty and enter valid username", async () => {
  //     await logIn.enterEmail("zaida@tracified.com");
  //     await logIn.enterPassword("");
  //     await logIn.clickSignIn();
  //     // await common.validateToast("Username & password mandatory")
  //     browser.sleep(2000);
  //   });

  //   it("TC_006 Enter a valid password and keep username empty", async () => {
  //     await logIn.enterEmail("");
  //     await logIn.enterPassword("abcd@1234");
  //     await logIn.clickSignIn();
  //     // await common.validateToast("Username & password mandatory");
  //     browser.sleep(2000);
  //   });

  //   it("TC_007 Enter a short username", async () => {
  //     await logIn.enterEmail("eee@");
  //     await logIn.enterPassword("abcd@1234");
  //     await logIn.clickSignIn();
  //     await common.validateToast3("Username must be at least 6 characters long");
  //     browser.sleep(2000);
  //   });

  //   //TS 2 - user should be notified when entering an invalid email

  //   it("TC_008 Enter email with no @ or domain", async () => {
  //     await logIn.enterEmail("eee");
  //     await logIn.enterPassword("abcd@1234");
  //     await logIn.clickSignIn();
  //     await common.validateToast3("Enter valid email");
  //     browser.sleep(2000);
  //   });

  //   it("TC_009 Enter email missing @", async () => {
  //     await logIn.enterEmail("eeegmail.com");
  //     await logIn.enterPassword("abcd@1234");
  //     await logIn.clickSignIn();
  //     await common.validateToast3("Enter valid email");
  //     browser.sleep(2000);
  //   });

  //   it("TC_010 Enter email missing address", async () => {
  //     await logIn.enterEmail("@gmail.com");
  //     await logIn.enterPassword("abcd@1234");
  //     await logIn.clickSignIn();
  //     await common.validateToast3("Enter valid email");
  //     browser.sleep(2000);
  //   });

  //   it("TC_011 Enter email with Superfluous text email@domain.com (Joe Smith)", async () => {
  //     await logIn.enterEmail("gaygn@gmail.com(Joe Smith)");
  //     await logIn.enterPassword("abcd@1234");
  //     await logIn.clickSignIn();
  //     await common.validateToast3("Enter valid email");
  //     browser.sleep(2000);
  //   });

  //   it("TC_012 Enter email with two @", async () => {
  //     await logIn.enterEmail("qatest20@@mailinator.com");
  //     await logIn.enterPassword("abcd@1234");
  //     await logIn.clickSignIn();
  //     await common.validateToast3("Enter valid email");
  //     browser.sleep(2000);
  //   });

  //   it("TC_013 Enter email with Leading dot in the address", async () => {
  //     await logIn.enterEmail(".qatest20@mailinator.com");
  //     await logIn.enterPassword("abcd@1234");
  //     await logIn.clickSignIn();
  //     await common.validateToast3("Enter valid email");
  //     browser.sleep(2000);
  //   });

  //   it("TC_014 Enter email with trailing dot in the address", async () => {
  //     await logIn.enterEmail("qatest20.@mailinator.com");
  //     await logIn.enterPassword("abcd@1234");
  //     await logIn.clickSignIn();
  //     await common.validateToast3("Enter valid email");
  //     browser.sleep(2000);
  //   });

  //   it("TC_015 Enter email with multiple dots", async () => {
  //     await logIn.enterEmail("qatest20..@mailinator.com");
  //     await logIn.enterPassword("abcd@1234");
  //     await logIn.clickSignIn();
  //     await common.validateToast3("Enter valid email");
  //     browser.sleep(2000);
  //   });

  //   it("TC_016 Enter email with unicode chars in address", async () => {
  //     await logIn.enterEmail("あいうえお@mailinator.com");
  //     await logIn.enterPassword("abcd@1234");
  //     await logIn.clickSignIn();
  //     await common.validateToast3("Enter valid email");
  //     browser.sleep(2000);
  //   });

  //   it("TC_017 Enter email with leading dash in domain", async () => {
  //     await logIn.enterEmail("qatest20-mailinator.com");
  //     await logIn.enterPassword("abcd@1234");
  //     await logIn.clickSignIn();
  //     await common.validateToast3("Enter valid email");
  //     browser.sleep(2000);
  //   });

  //   it("TC_018 Enter email with leading dot in domain", async () => {
  //     await logIn.enterEmail("qatest20@.mailinator.com");
  //     await logIn.enterPassword("abcd@1234");
  //     await logIn.clickSignIn();
  //     await common.validateToast3("Enter valid email");
  //     browser.sleep(2000);
  //   });

  //   it("TC_019 Enter email with invalid IP address", async () => {
  //     await logIn.enterEmail("qatest20@mailinator..com");
  //     await logIn.enterPassword("abcd@1234");
  //     await logIn.clickSignIn();
  //     await common.validateToast3("Enter valid email");
  //     browser.sleep(2000);
  //   });

  //   it("TC_020 Enter email with many dots in the domain", async () => {
  //     await logIn.enterEmail("qatest20@mail.i.na.tor..com");
  //     await logIn.enterPassword("abcd@1234");
  //     await logIn.clickSignIn();
  //     await common.validateToast3("Enter valid email");
  //     browser.sleep(2000);
  //   });

  //TS 3 - User should be able to enter password

  //basic plan user login credentials
  // it("TC_021 Enter a valid email and a valid password", async () => {
  //   await logIn.enterEmail("thinuriw@tracified.com");
  //   await logIn.enterPassword("abcd@1234");
  //   await logIn.clickSignIn();
  //   await browser.sleep(2000);
  // });

  //medium plan user login credentials
  //   it("TC_022 Enter a valid email and a valid password", async () => {
  //     await logIn.enterEmail("qatest4qwe4@mailinator.com");
  //     await logIn.enterPassword("abcd@1234");
  //     await logIn.clickSignIn();
  //     await browser.sleep(2000);
  //   });

  //enterprise plan user login credentials
  it("TC_023 Enter a valid email and a valid password", async () => {
    await logIn.enterEmail("thinuriw@tracified.com");
    await logIn.enterPassword("abcd@1234");
    await logIn.clickSignIn();
    await browser.sleep(3000);
  });
});
