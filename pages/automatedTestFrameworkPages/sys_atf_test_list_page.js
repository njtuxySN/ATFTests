/**
 * Created by yan.xia on 6/13/16.
 */

var SysAtfTestListPage = function () {

    this.createNewTest = function (name_of_test) {
        this.newButton = dr.findElement(By.id('sysverb_new'));
        this.newButton.click();
        dr.findElement(By.id('sys_atf_test.name')).sendKeys(name_of_test);
        //submit the test
        dr.findElement(By.id('sysverb_insert_and_stay')).click();
    };


};

module.exports = SysAtfTestListPage;