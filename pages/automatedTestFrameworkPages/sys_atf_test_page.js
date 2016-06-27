/**
 * Created by yan.xia on 6/13/16.
 */
const SLEEP=500;

var SysAtfTestPage = function () {

    this.createAOpenFormStep = function () {
        this.createNewTestStep();
        this.getButtonAndClick(0);
        browser.sleep(SLEEP);
        browser.switchTo().frame('dialog_frame');
    };

    this.createASetFieldValuesStep = function () {
        this.createNewTestStep();
        this.getButtonAndClick(1);
        browser.sleep(SLEEP);
        browser.switchTo().frame('dialog_frame');
    };


    this.createAAssertValueStep = function () {
        this.createNewTestStep();
        this.getButtonAndClick(2);
        browser.sleep(SLEEP);
        browser.switchTo().frame('dialog_frame');
    };

    this.createASubmitFormStep = function () {
        this.createNewTestStep();
        this.getButtonAndClick(4);
        browser.sleep(SLEEP);
        browser.switchTo().frame('dialog_frame');
    };


    this.createNewTestStep = function () {
        dr.findElement(By.id('sysverb_new')).click();
    };

    this.getButtonAndClick = function (button_index) {
        browser.sleep(500);
        browser.driver.findElement(by.id('sys_atf_step_creator')).then(function(container){
            container.findElement(by.tagName('table')).then(function(table){
                table.findElement(by.tagName('tbody')).then(function(tbody){
                    tbody.findElements(by.tagName('tr')).then(function(rows){

                        /**
                         * rows[0] - button to create a 'Open a form' step
                         * rows[1] - button to create a 'Set Field Values' step.
                         * rows[1] - button to create a 'Assert Value' step.
                         * rows[2] - button to create a 'Field Validation' step.
                         */

                        rows[button_index].findElements(by.tagName('td')).then(function(cols){
                            cols[2].click();
                            browser.sleep(5000);
                        });
                    });
                });
            });

        });
    };

};

module.exports = SysAtfTestPage;
