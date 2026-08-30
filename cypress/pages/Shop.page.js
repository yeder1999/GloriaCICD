///<reference types="cypress"/>

class ShoppingPage {
    // effectuer un shop

    elementsShopping = {

        productCard: () =>
            cy.get('[data-name="glplan12"]')
    };


    selectionnerProduit() {
        this.elementsShopping.productCard().click();
    }

}

export default new ShoppingPage();