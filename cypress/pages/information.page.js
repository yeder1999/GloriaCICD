///<reference types="cypress"/>

class OrderPage {

    elementsOrder = {

        addressInput: () =>
            cy.get('#user_input_autocomplete_address'),

        phoneInput: () =>
            cy.get('#subscription_deliveryContact_phoneNumber'),

        submitButton: () =>
            cy.get('#submit-creation-form')
    };


    saisirAdresse(adresse) {
        this.elementsOrder.addressInput()
            .type(adresse, { force: true });

        cy.contains(adresse)
            .click({ force: true });
    }


    saisirTelephone(phone) {
        this.elementsOrder.phoneInput()
            .type(phone, { force: true });
    }


    validerCommande() {
        this.elementsOrder.submitButton()
            .click();
    }

}

export default new OrderPage();