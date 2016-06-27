/**
 * Created by yan.xia on 6/13/16.
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

var SetFieldValuesStepPage = function () {

    this.submitTheStep = function () {
        dr.findElement(By.id('sysverb_insert')).click();
    };

    
    this.setFieldValueForRow = function (row_index, field_type, field_name, field_value) {
        this.filter_rows = dr.findElements(By.className('filter_row')).then(function (filter_rows) {
            var currentRow = filter_rows[row_index];

            //set field name:
            currentRow.findElement(By.id('field')).then(function (field) {
                //Click the field to show the dropdown list.
                field.click();

                //input the field name and click enter on keyboard.
                this.dropDownList = dr.findElement(By.id("select2-drop")).then(function (dropDownList) {
                    dropDownList.findElement(by.tagName('input')).then(function(input_search){
                        input_search.sendKeys(field_name, protractor.Key.ENTER);
                    })
                });
            });


            //set the value:
            currentRow.findElement(By.id('value')).then(function (value) {

                var ft = field_type;

                if (ft == field_types.STRING || ft == field_types.JOURNAL_INPUT || ft == field_types.DATETIME || ft == field_types.DATE || ft == field_types.CURRENCY || ft == field_types.JOURNAL_INPUT || ft == field_types.PRICE){
                    value.findElements(By.className('filerTableInput form-control')).then(function (field_value_inputs) {
                        field_value_inputs[0].click();
                        field_value_inputs[0].sendKeys(field_value);
                    })
                }


                if(ft == field_types.CHOICELIST || ft == field_types.BOOLEAN){
                    value.findElements(By.className('filerTableSelect select2 form-control')).then(function (field_value_inputs) {
                        field_value_inputs[0].click();
                        field_value_inputs[0].findElement(By.xpath("//*[.=\""+ field_value + "\"]")).click();
                    })
                }

                if(field_type == field_types.REFERENCE){
                    value.findElements(By.className('pull-left form-control filter-reference-input')).then(function (field_value_inputs) {
                        field_value_inputs[0].click();
                        // field_value_inputs[0].setAttribute('value', 'new value for element');
                        // browser.sleep(3000);
                        field_value_inputs[0].sendKeys(field_value);
                        browser.sleep(1000); //if no sleep value set, it will be empty.
                    })
                }
            });
        })

    };
};

module.exports = SetFieldValuesStepPage;