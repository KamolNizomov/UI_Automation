var data = require('../TestData/data.json');



//All elements found by using css (shortcut "$") locator 

 var HomePage = function(){
    
        
        this.Username = $('#user-name');
        this.Password = $('#password');
        this.LoginButton = $('.btn_action');
    

        this.Login = function(){
           browser.waitForAngularEnabled(false);
           this.Username.sendKeys(data.username[0]);
           this.Password.sendKeys(data.password);
           this.LoginButton.click();
        }
}

module.exports = new HomePage();