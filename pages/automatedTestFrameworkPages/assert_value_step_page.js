/**
 * Created by yan.xia on 6/24/16.
 */

const SLEEP=500;

var field_types;
field_types = {
    STRING: 1,
    JOURNAL_INPUT: 2,
    CHOICELIST: 3,
    REFERENCE: 4,
    DATETIME: 5,
    BOOLEAN: 6,
    CURRENCY: 7,
    DATE: 8,
    INTEGER: 9,
    PRICE: 10,
    CLASS: 11
};

var AssertValuesStepPage = function () {

    this.submitTheStep = function () {
        dr.findElement(By.id('sysverb_insert')).click();
    };

    this.assertFieldValueIs = function (field_name, expexted_value) {
        dr.findElement(By.id('sys_atf_field_value.field')).then(function (field_selector) {
            field_selector.click();
            field_selector.findElement(By.xpath("//*[.=\""+ field_name + "\"]")).click();
        })

        dr.findElement(By.id('sys_atf_field_value.value')).then(function (field_value_input) {
            field_value_input.sendKeys(expexted_value);
        })
    };

};

module.exports = AssertValuesStepPage;