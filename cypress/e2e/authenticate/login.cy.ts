/// <reference types="cypress" />
import cypress = require('cypress');
import '../../support/commands'


beforeEach(() => {
  cy.visit("/minha-conta/");
});

describe('login', () => {
  const authValid = Cypress.env('validUsers');
  const authInvalid = Cypress.env('invalidUsers');
  it('1. login with valid credentials.', () => {
    cy.LoginDataValid(Cypress.env(authValid).email, Cypress.env(authValid).password)
  });

  it('2. login with invalid credentials.', () => {
    cy.get('[id="username"]').type(Cypress.env(authInvalid).email, { log: false }),
    cy.get('[id="password"]').type(Cypress.env(authInvalid).password, { log: false })
    cy.get('input[type="submit"][name="login"]').click()
  });

  it('3. login with empty credentials.', () => {
    cy.get('[id="username"]')
    cy.get('[id="password"]')
    cy.get('input[type="submit"][name="login"]').click()
  });

  it('4. login with valid email and invalid password.', () => {
    cy.get('[id="username"]').type(Cypress.env(authValid).email, { log: false }),
    cy.get('[id="password"]').type(Cypress.env(authInvalid).password, { log: false })
    cy.get('input[type="submit"][name="login"]').click()
  });

  it('5. login with invalid email and valid password.', () => {
    cy.get('[id="username"]').type(Cypress.env(authInvalid).email, { log: false }),
    cy.get('[id="password"]').type(Cypress.env(authValid).password, { log: false })
  });
});