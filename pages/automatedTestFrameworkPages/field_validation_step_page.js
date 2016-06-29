/**
 * Created by yan.xia on 6/28/16.
 */

const SLEEP=500;

var FieldValidationStepPage = function () {

    this.submitTheStep = function () {
        dr.findElement(By.id('sysverb_insert')).click();
    };

    this.unlockMandatoryValidation = function () {
        dr.findElement(By.id('sys_atf_validate_fields.mandatory_unlock')).click();
    };

    this.unlockIsNotMandatoryValidation = function () {
        dr.findElement(By.id('sys_atf_validate_fields.not_mandatory_unlock')).click();
    };


    this.selectFieldToValidateMandatory = function (field_name) {
        //Select value from the box
        dr.findElement(By.id('sys_atf_validate_fields.mandatory_edit')).then(function (edit_area) {
            edit_area.findElement(By.id('ni.sys_atf_validate_fields.mandatory.select_0')).then(function (field_selector) {
                field_selector.findElement(By.xpath("//*[.=\""+ field_name + "\"]")).click();
            });

            //Click th '>' button to move the value
            edit_area.findElements(By.className('icon icon-chevron-right')).then(function (buttons) {
                buttons[0].click();
            })
        });
    };

    //this method doesn't work, might be a selenium bug. 
    this.selectFieldToValidateIsNotMandatory = function (field_name) {
        //Select value from the box
        dr.findElement(By.id('sys_atf_validate_fields.not_mandatory_edit')).then(function (edit_area) {
            edit_area.findElement(By.id('ni.sys_atf_validate_fields.not_mandatory.select_0')).then(function (no_mandatory_field_selector) {
            no_mandatory_field_selector.findElement(By.xpath("//*[.=\""+ field_name + "\"]")).click();
            });
            //Click th '>' button to move the value
            edit_area.findElements(By.className('icon icon-chevron-right')).then(function (buttons) {
                buttons[0].click();
            })
        });
    };
};

module.exports = FieldValidationStepPage;


