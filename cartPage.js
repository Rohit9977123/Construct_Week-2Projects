class CartPage {
    goToCart() {
        cy.xpath("//a[contains(text(),'shopping cart')]").click();  // Shopping cart link in the success message
        
    }

    proceedToCheckout() {
        cy.get('#content .pull-right a[href*="checkout"]').click();  // Checkout button
    }
}

export default CartPage;
