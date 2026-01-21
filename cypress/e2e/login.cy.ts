import "../support/commands";
import { faker } from '@faker-js/faker';

beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit("/minha-conta/");
});

describe("login", () => {
  const {EMAIL, PASSWORD} = Cypress.env('USER');
  const fakeEmail = faker.internet.email();
  const fakePassword = faker.internet.password();

it("1. should authenticate the user when valid credentials are provided", () => {
    cy.fillForm(EMAIL, PASSWORD);
    cy.submitLogin();
    cy.get("h1.page-title")
      .should("be.visible")
      .and("contain.text", "Minha conta");
  });

  it("2. should block login when both email and password are invalid", () => {
    cy.fillForm(fakeEmail, fakePassword);
    cy.submitLogin();
    cy.contains("Endereço de e-mail desconhecido.")
      .should("be.visible");
  });

  it("3. should display a required field error when submitting empty credentials", () => {
    cy.submitLogin();
    cy.contains("Nome de usuário é obrigatório")
      .should("be.visible");
  });

  it("4. should reject login when the email is valid but the password is incorrect", () => {
    cy.fillForm(EMAIL, fakePassword);
    cy.submitLogin();
    cy.contains("Endereço de e-mail desconhecido.")
      .should("be.visible");
  });

  it("5. should reject login when the password is valid but the email is invalid", () => {
    cy.fillForm(fakeEmail, PASSWORD);
    cy.submitLogin();
    cy.contains("Verifique novamente ou tente seu nome de usuário.")
      .should("be.visible");
  });
})

  


//npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator