

var basePage= function(){
    
    
   this.navigateHomePage = function() {

        browser.manage().timeouts().implicitlyWait(30000);
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        browser.get('https://www.saucedemo.com/');   
    }
}
 
module.exports = new basePage();

