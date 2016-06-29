/**
 * Created by yan.xia on 6/13/16.
 */

'use strict';

var TestHelper = require('./../automated-testing-framework-test-helper');
//load test data
var alm_hardware = require('./../../test_data/alm_hardware');

describe('test list Sanity Check', function() {

    var testHelper;
    const TARGET_INSTANCE= browser.baseUrl;
    const TEST_NAME_1 = "TEST 0001";
    var timeStamp = Math.floor(Date.now() / 1000);

    beforeAll(function() {
        isAngularSite(false);
        testHelper = new TestHelper();
    });

    // beforeEach(function() {
    // });

    it('Create a new test', function () {
        testHelper.loginTargetInstanceAsAdmin(TARGET_INSTANCE);
        // testHelper.createANewTest(TARGET_INSTANCE, TEST_NAME_1);
    });


   it('open the test', function () {
        testHelper.openATest(TARGET_INSTANCE, TEST_NAME_1);
    });


    it('add field validation step', function () {
        testHelper.createAFieldValidationStep();
        testHelper.unlockMandatoryValidation();
        testHelper.selectFieldToValidateMandatory("Model category (+)");
        testHelper.selectFieldToValidateMandatory("Model (+)");
    });

    /*
    // for(var i=0; i< 20; i++){
        it('add open form step', function () {
            testHelper.createAOpenFormStep("[alm_hardware]");
        });


        it('add set field value step', function () {
            testHelper.createASetFieldValuesStep();
            // var i=0;
            for(var i = 0; i < alm_hardware.fields.length; i++){
                var current_field = alm_hardware.fields[i];
                testHelper.setFieldValueForRow(i, current_field.field_type, current_field.field_name, current_field.field_value);
            }
            testHelper.submitTheStep();
        });


        it('add assert value step', function () {
            for(var i = 0; i < alm_hardware.fields.length; i++){
                var current_field = alm_hardware.fields[i];
                testHelper.createAAssertValueStep();
                testHelper.assertFieldValueIs(current_field.field_name, current_field.field_value);
                testHelper.submitTheStep();
            }
        });


        it('add submit step', function () {
            testHelper.createASubmitFormStep();
            testHelper.submitTheStep();
        });

        */

    // }

});


