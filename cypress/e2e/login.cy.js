import "../support/commands";
import users from '../fixtures/login.json'

beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit("/minha-conta/");
});

describe("login", () => {
  const {EMAIL, PASSWORD} = Cypress.env('USER')
  const {INVALID_EMAIL, INVALID_PASSWORD} =  users.DATA_INVALID

  it("1. should login successfully with valid credentials", () => {
    cy.fillForm(EMAIL, PASSWORD, { log: false });
    cy.get("h1.page-title")
      .should("be.visible")
      .and("contain.text", "Minha conta");
  });

  it("2. should not login with completely invalid credentials", () => {
    cy.fillForm(INVALID_EMAIL, INVALID_PASSWORD, { log: false });
    cy.contains("Endereço de e-mail desconhecido.")
      .should("be.visible");
  });

  it("3. should not login with empty credentials", () => {
    cy.emptyForm();
    cy.contains("Nome de usuário é obrigatório")
      .should("be.visible");
  });

  it("4. should not login with valid email and invalid password", () => {
    cy.fillForm(EMAIL, INVALID_PASSWORD, { log: false });
    cy.contains("Perdeu a senha?")
      .should("be.visible");
  });

  it("5. should not login with invalid email and valid password", () => {
    cy.fillForm(INVALID_EMAIL, PASSWORD, { log: false });
    cy.contains("Verifique novamente ou tente seu nome de usuário.")
      .should("be.visible");
  });
});

//npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator