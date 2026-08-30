///<reference types="cypress"/>

import SignupPage from '../pages/signUp.page';
import HomePage from '../pages/Pagehome.page';
import { faker } from '@faker-js/faker';
import AccountPage from '../pages/Achat.page';
import ShoppingPage from '../pages/Shop.page';
import OrderPage from '../pages/information.page';
import CartPage from '../pages/ByCard.page';


describe('Parcours inscription et commande', () => {

    beforeEach(() => {
        cy.visit('https://glowria.com/#');
    });


    it('Créer un compte et effectuer une commande', () => {

        // =========================================
        // INSCRIPTION
        // =========================================

        HomePage.ouvrirCompte();

        const email = faker.internet.email({
            allowSpecialCharacters: true
        });

        HomePage.saisirAdresseEmail(email);

        HomePage.validerInscription();


        // =========================================
        // FORMULAIRE INSCRIPTION
        // =========================================

        SignupPage.saisirPrenom(
            faker.person.firstName()
        );

        SignupPage.saisirNom(
            faker.person.lastName()
        );

        SignupPage.saisirConfirmationEmail(email);

        SignupPage.saisirMotDePasse(
            'ICEcream123@'
        );

        SignupPage.saisirDateNaissance(
            '01011990'
        );

        SignupPage.accepterConditions();

        SignupPage.cliquerInscription();


        // =========================================
        // VERIFICATION CREATION COMPTE
        // =========================================

        cy.url().should('not.include', '/signup');
    });
});