///<reference types="cypress"/>

class CartPage {

    elementsCart = {

        acceptCheckbox: () =>
            cy.get('[aria-describedby="label"]'),

        payButton: () =>
            cy.get('#submit-validation-form')
    };

// acceptation des conditions 
    accepterConditions() {
        this.elementsCart.acceptCheckbox()
            .click();
    }
// methode valider paiement 
    cliquerPayer() {
        this.elementsCart.payButton()
            .click();
    }

}

export default new CartPage();