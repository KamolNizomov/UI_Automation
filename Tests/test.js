//importing needed files
var basePage = require("../Utilities/basePage.js");
var HomePage = require("../Pages/loginPage.js");
var Data = require("../TestData/data.json");
var ProductPage = require("../Pages/productPage.js");
var cartPage = require("../Pages/myCartPage.js");
var checkOutPage = require("../Pages/checkOutPage.js");




describe('Swag Labs Test Suite',() => {

    beforeEach(() => { 
        basePage.navigateHomePage();
    });
   
 
    it('TC#1  Checking Login functionality', ()  => {  
       expect(browser.getTitle()).toEqual(Data.homePageTitle);
       HomePage.Login();
       expect(ProductPage.pageTitle.getText().isDisplayed()).toBe(true);
    });

    it('TC#2 Soring  items && adding 1 item to shopping cart ', () => {
        HomePage.Login();
        ProductPage.sortLowToHigh.click();
        cartPage.add_1ItemToShoppingCart();
        ProductPage.shoppingCart.click();
        expect(cartPage.pageTitle.getText().isDisplayed());
        expect(ProductPage.allProductsName.getText().isDisplayed());
    });

    it('TC#3 Adding 2 items to shopping cart', () => {

        HomePage.Login();
        expect(ProductPage.pageTitle.getText().isDisplayed()).toBe(true);
        cartPage.add_2ItemsToShoppingCart();
        ProductPage.shoppingCart.click();
        expect(cartPage.pageTitle.getText().isDisplayed());
        expect(ProductPage.allProductsName.getText().isDisplayed());   
    });

    it('TC#4 Removing Item from shopping cart && adding && cheching out', () => {

        HomePage.Login();
        expect(ProductPage.pageTitle.getText().isDisplayed()).toBe(true);
        expect(ProductPage.allProductsName.count()).toBe(6);
        cartPage.add_2ItemsToShoppingCart();
        ProductPage.shoppingCart.click();
        cartPage.removeItemFromShopping();
        cartPage.navigateToProductPage();
        cartPage.add_1ItemToShoppingCart();
        ProductPage.shoppingCart.click();
        cartPage.checkOut.click();
        expect(checkOutPage.pageTitle.getText().isDisplayed()).toBe(true);
        checkOutPage.CheckOut();
        expect(ProductPage.inventoryPrices.getText().isDisplayed())



        
    });
});