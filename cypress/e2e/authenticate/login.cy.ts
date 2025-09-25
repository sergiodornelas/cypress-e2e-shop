import '../../support/commands';
import { faker } from '@faker-js/faker';


beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit("/minha-conta/");
});

describe('login', () => {
  const auth = Cypress.env('user');
  const invalidEmail = faker.internet.email();
  const invalidPassword = faker.internet.password();

  it('1. login with valid credentials.', () => {
    cy.fillForm(Cypress.env(auth).email, Cypress.env(auth).password);
  });

  it('2. login with invalid credentials.', () => {
    cy.fillForm(invalidEmail, invalidPassword);
  });

  it('3. login with empty credentials.', () => {
    cy.emptyForm();
  });

  it('4. login with valid email and invalid password.', () => {
    cy.fillForm(Cypress.env(auth).email, invalidPassword);
  });

  it('5. login with invalid email and valid password.', () => {
    cy.fillForm(invalidEmail, Cypress.env(auth).password);
  });
});