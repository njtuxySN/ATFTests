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

    this.selectFieldToValidateItsMandatory = function (field_name) {
        dr.findElement(By.id('ni.sys_atf_validate_fields.mandatory.select_0')).then(function (field_selector) {
            field_selector.findElement(By.xpath("//*[.=\""+ field_name + "\"]")).click();
        })
    };

    this.clickRightButton = function () {
        dr.findElement(By.id('sys_atf_validate_fields.mandatory_edit')).then(function (edit_area) {
            edit_area.findElements(By.className('icon icon-chevron-right')).then(function (buttons) {
                buttons[0].click();
            })
        })
    };

    this.selectFieldToValidateMandatory = function (field_name) {
        this.selectFieldToValidateItsMandatory(field_name);
        this.clickRightButton();
    };



    this.assertFieldValueIs = function (field_name, expexted_value) {
        dr.findElement(By.id('sys_atf_field_value.field')).then(function (field_selector) {
            field_selector.click();
            field_selector.findElement(By.xpath("//*[.=\""+ field_name + "\"]")).click();
        });

        dr.findElement(By.id('sys_atf_field_value.value')).then(function (field_value_input) {
            field_value_input.sendKeys(expexted_value);
        })
    };

};

module.exports = FieldValidationStepPage;
