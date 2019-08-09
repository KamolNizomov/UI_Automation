
var ProductPage = require("../Pages/productPage.js");

var myCartPage=function() {
     
    //Element Locators
    this.pageTitle = $('.subheader');
    this.removeItem = $$('.btn_secondary.cart_button');
    this.manuButton = $('.bm-burger-button');
    this.allItems = $('#inventory_sidebar_link');
    this.checkOut = $('.cart_footer>a:nth-child(2)');
    this.ContinueShopping = $('.cart_footer>a:nth-child(1)');



    //Methods 
    this.add_1ItemToShoppingCart=function(){
        ProductPage.Products.first().click();
    }

    this.add_2ItemsToShoppingCart=function() { 
        ProductPage.Products.first().click();
        ProductPage.Products.get(1).click();    
    }


    this.removeItemFromShopping=function(){
        this.removeItem.get(0).click();
    }

    this.navigateToProductPage= function() {
        this.manuButton.click();
        this.allItems.click();    
    }

}

module.exports= new myCartPage();