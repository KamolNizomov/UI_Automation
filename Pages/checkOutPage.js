var Data = require("../TestData/data.json");

var checkOutPage=function() {
    
    //Element Locators
    this.pageTitle = $('#contents_wrapper>div:nth-child(2)');
    this.FirstName = $('#first-name');
    this.LastName = $('#last-name');
    this.ZipCode = $('#postal-code');
    this.ContinueButton = $('.checkout_buttons>input');

    
    this.CheckOut=function() {
        
        this.FirstName.sendKeys(Data.FirstName);
        this.LastName.sendKeys(Data.LastName);
        this.ZipCode.sendKeys(Data.ZipCode);
        this.ContinueButton.click();
    }
    
}

module.exports=new checkOutPage();