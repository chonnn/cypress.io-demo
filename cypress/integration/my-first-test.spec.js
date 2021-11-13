/// <reference types="Cypress" />

describe('My First Test.',  () => {
    it('Shuold Validate Username', () => {
        cy.visit('https://www.saucedemo.com/');

        cy.get('[data-test=login-button]').click();

        cy.get('[data-test=error]').should('have.text', 'Epic sadface: Username is required');
    });

    it('Shuold Validate Password', () => {
        cy.visit('https://www.saucedemo.com/');

        cy.get('[data-test=username]').type('standard_user');

        cy.get('[data-test=login-button]').click();

        cy.get('[data-test=error]').should('have.text', 'Epic sadface: Password is required');
    });

    it('Shuold Login Success', () => {
        cy.visit('https://www.saucedemo.com/');

        cy.get('[data-test=username]').type('standard_user');
        cy.get('[data-test=password]').type('secret_sauce');

        cy.get('[data-test=login-button]').click();

        cy.get('div[class=header_secondary_container]')
            .get('span[class=title]')    
            .should('have.text','Products');
    });
});