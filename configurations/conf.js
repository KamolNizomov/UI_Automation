
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
     //webdriver conection 
    directConnect: true,
    

    capabilities: {
        
        //Setting browers type 
        browserName: 'firefox',

        //Setting browser to run test with a headless mode 
        // chromeOptions: {
        //     args: ["--headless", "--disable-gpu", "--window-size=800,600"],
        // }
    },

    //Running test against multiple browers
    // multiCapabilities:[

    //    {browserName: 'chrome' },
    //    {browserName: 'firefox'},  
    // ],



    //The test we choose to run 
    specs: ['../Tests/test.js'],


    //Creating suites to run Smoke or Regrassion Test Scripts if needed
    // suites: {
    //     smoke: ['./smoke.js'],
    //     regression: ['.regresiion/*test.js'],
    //     all: ['./*/*.test.js']
    // }


    //adding spec reporter, maximizing window && waits
    onPrepare: function () {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(6000);
        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailuredSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true
        }));
    }
};