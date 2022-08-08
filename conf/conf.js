exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: "firefox",
  },

  // Framework to use. Jasmine is recommended.
  framework: "jasmine",

  // Spec patterns are relative to the current working directory when
  // protractor is called.

  // seleniumAddress: "http://localhost:4444/wd/hub",

  specs: [
    // "../test/signIn.spec.js",
    "../test/logIn.spec.js",
    // "../test/dashBoard.spec.js",
    //"../test/userManagement.spec.js",
    // "../test/masterData.spec.js",
    // "../test/tracifiedItems.spec.js",

    //'../test/bcAccount.spec.js',
    //'../test/basicPlan.spec.js',
    //'../test/mediumPlan.spec.js',
    //'../test/addOns.spec.js',
    // // '../test/ecomToken.spec.js',
    // "../test/qrCodes.spec.js",
    // "../test/accountSettings.spec.js",
    // "../test/rePorts.spec.js",
    // "../test/certiFicates.spec.js",
    // "../test/authoRization.spec.js",

    //'../test/priceTiers.spec.js'
  ],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 2600000,
    allScriptsTimeout: 1200000,
  },
};
