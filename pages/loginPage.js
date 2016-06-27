/**
 * Created by yan.xia on 5/26/16.
 */


/* loginPage.js */
var LoginPage = function() {
    this.login = function(username, password) {

        this.username = browser.driver.findElement(By.id('user_name'));
        this.password = browser.driver.findElement(By.id('user_password'));
        this.button = browser.driver.findElement(By.id('sysverb_login'));

        this.username.sendKeys(username);
        this.password.sendKeys(password);
        this.button.click();
    };

    this.loginAsAdmin = function() {

        this.username = browser.driver.findElement(By.id('user_name'));
        this.password = browser.driver.findElement(By.id('user_password'));
        this.button = browser.driver.findElement(By.id('sysverb_login'));

        this.username.sendKeys('admin');
        this.password.sendKeys('admin');
        this.button.click();
    };

};

module.exports = LoginPage;