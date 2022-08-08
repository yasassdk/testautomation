const { element } = require("protractor");
const { CertiFicates } = require("../pages/header/certiFicatesPage");
const { Common } = require("../pages/common/common");

// common
const common = new Common();

// accountSettings
const certiFicates = new CertiFicates();

describe("AccountSettings - Tracified", function () {
  beforeEach(function () {
    browser.get("https://qa.admin.tracified.com/dashboard/home");
    browser.ignoreSynchronization = true;
  });

  it("TC_081 User should be able to view the certification", function () {
    element(by.xpath("//span[contains(.,'Certificates')]")).click();
    browser.sleep(1000);
  });

  it("TC_082 To create a new certification template", async () => {
    element(by.xpath("//span[contains(.,'Certificates')]")).click();
    element(by.xpath("//a[.='Add Template']")).click();
    element(by.xpath("//input[@id='subject']")).sendKeys("Sample1");
    element(by.css(".c-btn")).click();
    browser.sleep(1000);
    element(by.css(".select-all > label")).click();
    browser.sleep(1000);
    element(by.css("#inputState [value='100']")).click();
    browser.sleep(1000);
    element(by.xpath("//textarea[@id='query']")).sendKeys(
      "{{$RESULT.SetCustomString(normal)\n$RESULT.SetRValue(4)\n$RESULT.SetValue(0)\n$PARAMS.FilterSubtree($Item.GetValue.IsStringEqualTo(PLACEHOLDER1)):=PARAMHOLDERLIST\n$PARAMHOLDERLIST.SeekToBegin\n$PARAMHOLDERLIST.GetCurrentElement:=PARAMHOLDER1\nIf($PARAMHOLDER1.CheckNotNull)\n$X.FilterSubtree($Item.GetValue.IsStringEqualTo(nameOfTheCenter)):=PCENTERLIST\n$PCENTERLIST.SeekToBegin\n$PCENTERLIST.GetCurrentElement:=PCENTER\nIf($PCENTER.CheckNotNull)\nIf($PCENTER.GetLValue.IsStringEqualTo($PARAMHOLDER1.GetLValue))\n$X.FilterSubtree($Item.GetValue.IsStringEqualTo(weightofPowder)):=QTYLIST\n$QTYLIST.SeekToBegin\n$QTYLIST.GetCurrentElement:=QTY\nIf($QTY.CheckNotNull)\n$RESULT.SetValue($QTY.GetLValue)\nEndIf\nEndIf\nEndIf\nEndIf}}"
    );
    element(by.css("[value='8d90e950-51a9-11ec-bf7d-4d65eb589446']")).click();
    element(by.css("[value='d36c5fa0-50f4-11ec-bf7d-4d65eb589446']")).click();
    element(by.css("[value='141db6e0-50e4-11ec-bf7d-4d65eb589446']")).click();
    element(by.buttonText("Create Template")).click();
    await common.validateToast1("Template creation Success!");
    browser.sleep(1000);
  });

  it("TC_083 Keep Certification name empty", async () => {
    element(by.xpath("//span[contains(.,'Certificates')]")).click();
    element(by.xpath("//a[.='Add Template']")).click();
    element(by.css(".c-btn")).click();
    browser.sleep(1000);
    element(by.css(".select-all > label")).click();
    browser.sleep(1000);
    element(by.css("#inputState [value='100']")).click();
    browser.sleep(1000);
    element(by.xpath("//textarea[@id='query']")).sendKeys(
      "{{$RESULT.SetCustomString(normal)\n$RESULT.SetRValue(4)\n$RESULT.SetValue(0)\n$PARAMS.FilterSubtree($Item.GetValue.IsStringEqualTo(PLACEHOLDER1)):=PARAMHOLDERLIST\n$PARAMHOLDERLIST.SeekToBegin\n$PARAMHOLDERLIST.GetCurrentElement:=PARAMHOLDER1\nIf($PARAMHOLDER1.CheckNotNull)\n$X.FilterSubtree($Item.GetValue.IsStringEqualTo(nameOfTheCenter)):=PCENTERLIST\n$PCENTERLIST.SeekToBegin\n$PCENTERLIST.GetCurrentElement:=PCENTER\nIf($PCENTER.CheckNotNull)\nIf($PCENTER.GetLValue.IsStringEqualTo($PARAMHOLDER1.GetLValue))\n$X.FilterSubtree($Item.GetValue.IsStringEqualTo(weightofPowder)):=QTYLIST\n$QTYLIST.SeekToBegin\n$QTYLIST.GetCurrentElement:=QTY\nIf($QTY.CheckNotNull)\n$RESULT.SetValue($QTY.GetLValue)\nEndIf\nEndIf\nEndIf\nEndIf}}"
    );
    element(by.css("[value='8d90e950-51a9-11ec-bf7d-4d65eb589446']")).click();
    element(by.css("[value='d36c5fa0-50f4-11ec-bf7d-4d65eb589446']")).click();
    element(by.css("[value='141db6e0-50e4-11ec-bf7d-4d65eb589446']")).click();
    element(by.buttonText("Create Template")).click();
    await common.validateToast1("Error: Invalid values are present");
    browser.sleep(1000);
  });

  it("TC_084 Keep Items empty", async () => {
    element(by.xpath("//span[contains(.,'Certificates')]")).click();
    element(by.xpath("//a[.='Add Template']")).click();
    element(by.xpath("//input[@id='subject']")).sendKeys("Sample1");
    element(by.css("#inputState [value='100']")).click();
    browser.sleep(1000);
    element(by.xpath("//textarea[@id='query']")).sendKeys(
      "{{$RESULT.SetCustomString(normal)\n$RESULT.SetRValue(4)\n$RESULT.SetValue(0)\n$PARAMS.FilterSubtree($Item.GetValue.IsStringEqualTo(PLACEHOLDER1)):=PARAMHOLDERLIST\n$PARAMHOLDERLIST.SeekToBegin\n$PARAMHOLDERLIST.GetCurrentElement:=PARAMHOLDER1\nIf($PARAMHOLDER1.CheckNotNull)\n$X.FilterSubtree($Item.GetValue.IsStringEqualTo(nameOfTheCenter)):=PCENTERLIST\n$PCENTERLIST.SeekToBegin\n$PCENTERLIST.GetCurrentElement:=PCENTER\nIf($PCENTER.CheckNotNull)\nIf($PCENTER.GetLValue.IsStringEqualTo($PARAMHOLDER1.GetLValue))\n$X.FilterSubtree($Item.GetValue.IsStringEqualTo(weightofPowder)):=QTYLIST\n$QTYLIST.SeekToBegin\n$QTYLIST.GetCurrentElement:=QTY\nIf($QTY.CheckNotNull)\n$RESULT.SetValue($QTY.GetLValue)\nEndIf\nEndIf\nEndIf\nEndIf}}"
    );
    element(by.css("[value='8d90e950-51a9-11ec-bf7d-4d65eb589446']")).click();
    element(by.css("[value='d36c5fa0-50f4-11ec-bf7d-4d65eb589446']")).click();
    element(by.css("[value='141db6e0-50e4-11ec-bf7d-4d65eb589446']")).click();
    element(by.buttonText("Create Template")).click();
    await common.validateToast1("Error: Atleast one Item must be selected");
    browser.sleep(1000);
  });

  it("TC_085 Keep stage empty", async () => {
    element(by.xpath("//span[contains(.,'Certificates')]")).click();
    element(by.xpath("//a[.='Add Template']")).click();
    element(by.xpath("//input[@id='subject']")).sendKeys("Sample1");
    element(by.css(".c-btn")).click();
    browser.sleep(1000);
    element(by.css(".select-all > label")).click();
    browser.sleep(1000);
    element(by.xpath("//textarea[@id='query']")).sendKeys(
      "{{$RESULT.SetCustomString(normal)\n$RESULT.SetRValue(4)\n$RESULT.SetValue(0)\n$PARAMS.FilterSubtree($Item.GetValue.IsStringEqualTo(PLACEHOLDER1)):=PARAMHOLDERLIST\n$PARAMHOLDERLIST.SeekToBegin\n$PARAMHOLDERLIST.GetCurrentElement:=PARAMHOLDER1\nIf($PARAMHOLDER1.CheckNotNull)\n$X.FilterSubtree($Item.GetValue.IsStringEqualTo(nameOfTheCenter)):=PCENTERLIST\n$PCENTERLIST.SeekToBegin\n$PCENTERLIST.GetCurrentElement:=PCENTER\nIf($PCENTER.CheckNotNull)\nIf($PCENTER.GetLValue.IsStringEqualTo($PARAMHOLDER1.GetLValue))\n$X.FilterSubtree($Item.GetValue.IsStringEqualTo(weightofPowder)):=QTYLIST\n$QTYLIST.SeekToBegin\n$QTYLIST.GetCurrentElement:=QTY\nIf($QTY.CheckNotNull)\n$RESULT.SetValue($QTY.GetLValue)\nEndIf\nEndIf\nEndIf\nEndIf}}"
    );
    element(by.css("[value='8d90e950-51a9-11ec-bf7d-4d65eb589446']")).click();
    element(by.css("[value='d36c5fa0-50f4-11ec-bf7d-4d65eb589446']")).click();
    element(by.css("[value='141db6e0-50e4-11ec-bf7d-4d65eb589446']")).click();
    element(by.buttonText("Create Template")).click();
    await common.validateToast1("Error: Invalid values are present");
    browser.sleep(1000);
  });

  it("TC_086 Keep query field empty", async () => {
    element(by.xpath("//span[contains(.,'Certificates')]")).click();
    element(by.xpath("//a[.='Add Template']")).click();
    element(by.xpath("//input[@id='subject']")).sendKeys("Sample1");
    element(by.css(".c-btn")).click();
    browser.sleep(1000);
    element(by.css(".select-all > label")).click();
    browser.sleep(1000);
    element(by.css("#inputState [value='100']")).click();
    browser.sleep(1000);
    element(by.css("[value='8d90e950-51a9-11ec-bf7d-4d65eb589446']")).click();
    element(by.css("[value='d36c5fa0-50f4-11ec-bf7d-4d65eb589446']")).click();
    element(by.css("[value='141db6e0-50e4-11ec-bf7d-4d65eb589446']")).click();
    element(by.buttonText("Create Template")).click();
    await common.validateToast1("Error: Invalid values are present");
    browser.sleep(1000);
  });

  it("TC_087 Skip selecting authenticate users", async () => {
    element(by.xpath("//span[contains(.,'Certificates')]")).click();
    element(by.xpath("//a[.='Add Template']")).click();
    element(by.xpath("//input[@id='subject']")).sendKeys("Sample1");
    element(by.css(".c-btn")).click();
    browser.sleep(1000);
    element(by.css(".select-all > label")).click();
    browser.sleep(1000);
    element(by.css("#inputState [value='100']")).click();
    browser.sleep(1000);
    element(by.xpath("//textarea[@id='query']")).sendKeys(
      "{{$RESULT.SetCustomString(normal)\n$RESULT.SetRValue(4)\n$RESULT.SetValue(0)\n$PARAMS.FilterSubtree($Item.GetValue.IsStringEqualTo(PLACEHOLDER1)):=PARAMHOLDERLIST\n$PARAMHOLDERLIST.SeekToBegin\n$PARAMHOLDERLIST.GetCurrentElement:=PARAMHOLDER1\nIf($PARAMHOLDER1.CheckNotNull)\n$X.FilterSubtree($Item.GetValue.IsStringEqualTo(nameOfTheCenter)):=PCENTERLIST\n$PCENTERLIST.SeekToBegin\n$PCENTERLIST.GetCurrentElement:=PCENTER\nIf($PCENTER.CheckNotNull)\nIf($PCENTER.GetLValue.IsStringEqualTo($PARAMHOLDER1.GetLValue))\n$X.FilterSubtree($Item.GetValue.IsStringEqualTo(weightofPowder)):=QTYLIST\n$QTYLIST.SeekToBegin\n$QTYLIST.GetCurrentElement:=QTY\nIf($QTY.CheckNotNull)\n$RESULT.SetValue($QTY.GetLValue)\nEndIf\nEndIf\nEndIf\nEndIf}}"
    );
    element(by.buttonText("Create Template")).click();
    await common.validateToast1("Error: Atleast one user must be selected");
    browser.sleep(1000);
  });
});
