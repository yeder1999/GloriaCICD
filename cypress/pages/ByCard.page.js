///<reference types="cypress"/>

class CartPage {

    elementsCart = {

        acceptCheckbox: () =>
            cy.get('[aria-describedby="label"]'),

        payButton: () =>
            cy.get('#submit-validation-form')
    };


    accepterConditions() {
        this.elementsCart.acceptCheckbox()
            .click();
    }


    cliquerPayer() {
        this.elementsCart.payButton()
            .click();
    }

}

export default new CartPage();