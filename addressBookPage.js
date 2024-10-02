class AddressBookPage {
    goToAddressBook() {
        cy.get('a[href*="account/address"]').click();  // Address Book option
    }

    editAddress() {
        cy.get('a.btn.btn-info').click();  // Edit button
    }

    updateAddress(firstName, lastName, company, address1, address2, city, postcode, country, region) {
        cy.get('#input-firstname').clear().type(firstName);
        cy.get('#input-lastname').clear().type(lastName);
        cy.get('#input-company').clear().type(company);
        cy.get('#input-address-1').clear().type(address1);
        cy.get('#input-address-2').clear().type(address2);
        cy.get('#input-city').clear().type(city);
        cy.get('#input-postcode').clear().type(postcode);
        cy.get('#input-country').select(country);
        cy.get('#input-zone').select(region);
        cy.get('input[type="submit"]').click();  // Continue button
    }
}

export default AddressBookPage;
