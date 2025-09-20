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

  it('login with invalid credentials', () => {
    cy.get('[id="username"]').type(users[0].email, {log:false}), 
    cy.get('[id="password"]').type(users[0].password, {log:false})
    cy.get('input[type="submit"][name="login"]').click()
  }); 

  it('login with empty credentials', () => {
    cy.get('[id="username"]')
    cy.get('[id="password"]')
    cy.get('input[type="submit"][name="login"]').click()
  });

  it('login with valid email and invalid password', () => {
    cy.get('[id="username"]').type(users[1].email, {log:false}), 
    cy.get('[id="password"]').type(users[0].password, {log:false})
    cy.get('input[type="submit"][name="login"]').click()
  });

it('login with invalid email and valid password', () => {
    cy.get('[id="username"]').type(users[0].email, {log:false}), 
    cy.get('[id="password"]').type(users[1].password, {log:false})
    cy.get('input[type="submit"][name="login"]').click()
  });

});

