///<reference types="cypress"/>

class SignupPage {

    elementsSignup = {

        firstNameInput: () =>
            cy.get('#customer_firstName'),

        lastNameInput: () =>
            cy.get('#customer_lastName'),

        emailConfirmationInput: () =>
            cy.get('#customer_emailConfirm'),

        passwordInput: () =>
            cy.get('#customer_password'),

        birthDateInput: () =>
            cy.get('#customer_birthday'),

        conditionsCheckbox: () =>
            cy.get('#legalmentions'),

        registrationButton: () =>
            cy.get('#submitBtn')
    };


    saisirPrenom(prenom) {
        this.elementsSignup.firstNameInput()
            .type(prenom, { force: true });
    }


    saisirNom(nom) {
        this.elementsSignup.lastNameInput()
            .type(nom, { force: true });
    }


    saisirConfirmationEmail(email) {
        this.elementsSignup.emailConfirmationInput()
            .type(email, { force: true });
    }


    saisirMotDePasse(password) {
        this.elementsSignup.passwordInput()
            .type(password, { force: true });
    }


    saisirDateNaissance(date) {
        this.elementsSignup.birthDateInput()
            .type(date, { force: true });
    }


    accepterConditions() {
        this.elementsSignup.conditionsCheckbox()
            .click();
    }


    cliquerInscription() {
        this.elementsSignup.registrationButton()
            .click();
    }

}

export default new SignupPage();