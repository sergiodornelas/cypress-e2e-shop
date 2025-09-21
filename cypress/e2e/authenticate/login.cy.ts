/// <reference types="cypress" />
import '../../support/commands'

beforeEach(() => {
  cy.visit("/minha-conta/");
});

describe('login', () => {
  const users = Cypress.env('users');

  it('1. login with valid credentials.', () => {
    cy.LoginDataValid(users[1].email, users[1].password)
  });

  it('2. login with invalid credentials.', () => {
    cy.get('[id="username"]').type(users[0].email, {log:false}), 
    cy.get('[id="password"]').type(users[0].password, {log:false})
    cy.get('input[type="submit"][name="login"]').click()
  }); 

  it('3. login with empty credentials.', () => {
    cy.get('[id="username"]')
    cy.get('[id="password"]')
    cy.get('input[type="submit"][name="login"]').click()
  });

  it('4. login with valid email and invalid password.', () => {
    cy.get('[id="username"]').type(users[1].email, {log:false}), 
    cy.get('[id="password"]').type(users[0].password, {log:false})
    cy.get('input[type="submit"][name="login"]').click()
  });

it('5. login with invalid email and valid password.', () => {
    cy.get('[id="username"]').type(users[0].email, {log:false}), 
    cy.get('[id="password"]').type(users[1].password, {log:false})
    cy.get('input[type="submit"][name="login"]').click()
  });

});

