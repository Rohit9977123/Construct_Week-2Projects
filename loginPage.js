class LoginPage {
    visit() {
        cy.visit('https://tutorialsninja.com/demo/');
    }

    login(username, password) {
        cy.get('#input-email').type("rohitchouhankgn11@gmail.com");
        cy.get('#input-password').type("Rohit@DmauS6");
        cy.get('input[type="submit"]').click();
    }
}

export default LoginPage;
