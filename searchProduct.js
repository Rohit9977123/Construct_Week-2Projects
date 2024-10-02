import SearchPage from "../page_objects/searchPage";

describe('Search Product', () => {
    const searchPage = new SearchPage();

    it('should search and add product to cart', () => {
        cy.visit('https://tutorialsninja.com/demo');
        searchPage.searchProduct('iPhone');
        searchPage.addToCart();
    });
});