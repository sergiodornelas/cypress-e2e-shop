import '../../support/commands'
import { faker } from '@faker-js/faker';


beforeEach(() => {
  cy.visit("/minha-conta/");
});

describe('login', () => {
  const auth = Cypress.env('validUsers');
  const invalidEmail = faker.internet.email();
  const invalidPassword = faker.internet.password();

  it('1. login with valid credentials.', () => {
    cy.FillForm(Cypress.env(auth).email, Cypress.env(auth).password)
  });

  it('2. login with invalid credentials.', () => {
    cy.FillForm(invalidEmail, invalidPassword)
  });

  it('3. login with empty credentials.', () => {
    cy.EmptyForm()
  });

  it('4. login with valid email and invalid password.', () => {
    cy.FillForm(Cypress.env(auth).email, invalidPassword)
  });

  it('5. login with invalid email and valid password.', () => {
    cy.FillForm(invalidEmail, Cypress.env(auth).password)
  });
});