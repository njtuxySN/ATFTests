/**
 * Created by yan.xia on 6/13/16.
 */


var OpenFormStepPage = function () {

    this.select_form = function (form_name) {
        dr.findElement(By.id('select2-chosen-1')).click();
        browser.sleep(1000);
        dr.findElement(By.id('s2id_autogen1_search')).sendKeys(form_name, protractor.Key.ENTER);
        browser.sleep(1000);
        dr.findElement(By.id('sysverb_insert')).click();
    };

};

module.exports = OpenFormStepPage;
