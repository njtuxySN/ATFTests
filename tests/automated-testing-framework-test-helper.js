/**
 * Created by yan.xia on 6/13/16.
 */

'use strict';

var config = {
    module1: { value: 'config1' },
    module2: { value: 'config2' }
};

var Pages = require('require-dir-all')('./../pages', { map: function(reqModule) { reqModule.exports = new reqModule.exports( config[reqModule.name] );}});
var Helpers = require('require-dir-all')('./../helpers', {map: function(reqModule) {reqModule.exports = new reqModule.exports( config[reqModule.name] );}});
var AutomatedTestingFrameworkHelpers = require('require-dir-all')('./../pages/automatedTestFrameworkPages', {map: function(reqModule) {reqModule.exports = new reqModule.exports( config[reqModule.name] );}});
// var TablesData = require('require-dir-all')('./../test_data', {map: function(reqModule) {reqModule.exports = new reqModule.exports( config[reqModule.name] );}});

var timeStamp = Math.floor(Date.now() / 1000);




var navigationHelper = Helpers.navigationHelper;
var loginPage = Pages.loginPage;
var testListPage = AutomatedTestingFrameworkHelpers.sys_atf_test_list_page;
var testDetailsPage = AutomatedTestingFrameworkHelpers.sys_atf_test_page;
var openFormStepPage = AutomatedTestingFrameworkHelpers.open_form_step_page;
var setFieldValueStepPage = AutomatedTestingFrameworkHelpers.set_field_values_step_page;
var assertValueStepPage = AutomatedTestingFrameworkHelpers.assert_value_step_page;


var TestHelper = function () {

    this.loginTargetInstanceAsAdmin = function (target_instance){
        navigationHelper.openLoginPage(target_instance);
        loginPage.loginAsAdmin();
    };
    
    this.createANewTest = function (target_instance, testName) {
        navigationHelper.openATFTestListPage(target_instance);
        testListPage.createNewTest(testName);
    };

    this.openATest = function (target_instance, testName) {
        navigationHelper.openATFTestListPage(target_instance);
        navigationHelper.openLink(testName);
    };

    this.createAOpenFormStep = function (form_name) {
        testDetailsPage.createAOpenFormStep();
        openFormStepPage.select_form(form_name);
    };
    
    this.createASetFieldValuesStep = function () {
        testDetailsPage.createASetFieldValuesStep();
    };

    this.createASubmitFormStep = function () {
        testDetailsPage.createASubmitFormStep();
    };

    this.setFieldValueForRow = function (row_index, field_type, field_name, field_value) {
        setFieldValueStepPage.setFieldValueForRow(row_index, field_type, field_name, field_value);
    };

    this.setFieldValueOfChoiceListTypeForRow = function (row_index, field_name, field_value) {
        setFieldValueStepPage.setFieldValueOfChoiceListTypeForRow(row_index, field_name, field_value);
    };


    this.createAAssertValueStep = function () {
        testDetailsPage.createAAssertValueStep();
    };

    this.assertFieldValueIs = function (field_name, expected_field_value) {
        assertValueStepPage.assertFieldValueIs(field_name, expected_field_value);
    };

    this.submitTheStep = function () {
        setFieldValueStepPage.submitTheStep();
    }



};

module.exports = TestHelper;
