class CheckoutPage {
    completeCheckout() {
        cy.get('input[type="button"][value="Continue"]').click({ multiple: true });
        cy.get('input[type="checkbox"]').check();  // Terms & Conditions checkbox
        cy.get('input[type="button"][value="Continue"]').click();
        cy.get('input[type="button"][value="Confirm Order"]').click();  // Confirm order
    }
}

export default CheckoutPage;
