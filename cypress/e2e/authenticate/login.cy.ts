/// <reference types="cypress" />

beforeEach(() => {
  cy.visit("/minha-conta/");
});


describe('login', () => {
  const users = Cypress.env('users');

  it('login with valid credentials', () => {
    cy.get('[id="username"]').type(users[1].email, {log:false}), 
    cy.get('[id="password"]').type(users[1].password, {log:false})
    cy.get('input[type="submit"][name="login"]').click()
  });
});

