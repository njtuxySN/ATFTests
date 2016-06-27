/**
 * Created by yan.xia on 5/26/16.
 */

var NavigationHelper = function() {
    this.openLoginPage = function (targetInstance) {
        dr.get(targetInstance);
        browser.switchTo().frame('gsft_main');
    };

    this.openUpdateSetListPage = function (targetInstance) {
        dr.get(targetInstance + '/sys_update_set_list.do');
    };

    this.openSystemPropertiesListPage = function (targetInstance) {
        dr.get(targetInstance + '/sys_properties_list.do');
    };

    this.openUpdateSetSourceListPage = function (targetInstance) {
        dr.get(targetInstance + '/sys_update_set_source_list.do');
    };

    this.openLink = function (linkText) {
        this.targetLink = browser.driver.findElement(By.linkText(linkText));
        this.targetLink.click();
    };


    this.openSysDbObjectlistPage = function (targetInstance) {
        dr.get(targetInstance + '/sys_db_object_list.do');
    };

    this.openATFTestListPage = function (targetInstance) {
        dr.get(targetInstance + '/sys_atf_test_list.do');
    }

};

module.exports = NavigationHelper;

