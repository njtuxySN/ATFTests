/**
 * Created by yan.xia on 5/25/16.
 */
const SINGLE_INSTANCE_URL = 'http://10.11.83.238:16001';
// const SINGLE_INSTANCE_URL = 'https://demonightlyteamdev.service-now.com';

/**
 * Test Report using protractor-jasmine2-screenshot-reporter
*/
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var reporter = new HtmlScreenshotReporter({
    dest: '/Users/yan.xia/WebstormProjects/AFTTests/testReporter',
    filename: 'my-report.html',
    reportTitle: SINGLE_INSTANCE_URL
});


exports.config = {

    // capabilities: {
    //     browserName: 'firefox'
    // },

    /*Overwrite the default timeout, otherwise tests will throw random errors*/
    jasmineNodeOpts: {
        defaultTimeoutInterval: 2500000
    },

    /*When testing with parent child nodes, tests need those 2 urls*/
    params: {
        // parent_instance: PARENT_INSTANCE_URL,
        // child_instance: CHILD_INSTANCE_URL
    },

    /*selenium server address */
    seleniumAddress: 'http://localhost:4444/wd/hub',

    /*Protractor need this spec configuration, to run the tests*/
    specs: ['tests/03-automated-testing-framework-tests/01_test.js'],
    // specs: ['updateSetTests_1.js', 'updateSetTests_2.js', 'updateSetTests_3.js', 'updateSetTests_4.js'],

    /*When running with single instance, tests need to use this baseURL*/
    baseUrl: SINGLE_INSTANCE_URL,

    allScriptsTimeout: 30000,


    onPrepare: function(){
        /*Switch for non-angular tests. */
        global.isAngularSite = function(flag){
            browser.ignoreSynchronization = !flag;
        };

        /* Assign the test reporter to each running instance */
        jasmine.getEnv().addReporter(reporter);
        global.dr = browser.driver;
    },

    /* Setup the report before any tests start */
    beforeLaunch: function() {
        return new Promise(function(resolve){
            reporter.beforeLaunch(resolve);
        });
    },

    /* Close the report after all tests finish */
    afterLaunch: function(exitCode) {
        return new Promise(function(resolve){
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    }
};


