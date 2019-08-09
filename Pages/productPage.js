//All elements found by using css (shortcut "$") locator 

var productPage = function(){

    this.pageTitle = $('.product_label');
    this.sortLowToHigh = $(".product_sort_container").$("option[value='lohi']");
    this.inventoryPrices=$$('.inventory_item_price');
    this.Products = $$('.btn_primary.btn_inventory');
    this.allProductsName = $$('.inventory_item_name');
    this.shoppingCart = $('#shopping_cart_container>a');

    
    

    
}

module.exports = new productPage();