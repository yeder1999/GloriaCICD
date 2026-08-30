///<reference types="cypress"/>

class HomePage {
    // effectuer une inscription

    elementsHome = {
        accountButton: () =>
            cy.get('[aria-label="account"]'),

        emailInput: () =>
            cy.get('#newEmail'),

        signupButton: () =>
            cy.get('[value="Inscription"]')
    };


    ouvrirCompte() {
        this.elementsHome.accountButton().click();
    }


    saisirAdresseEmail(email) {
        this.elementsHome.emailInput()
            .type(email, { force: true });
    }


    validerInscription() {
        this.elementsHome.signupButton().click();
    }

}

export default new HomePage();