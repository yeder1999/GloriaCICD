///<reference types="cypress"/>

class AccountPage {

    elementsAccount = {

        buyLink: () =>
            cy.get('[href="https://glowria.com/personal/presentation/glowria"]')
    };


    ouvrirPageAchat() {
        this.elementsAccount.buyLink().click();
    }

}

export default new AccountPage();