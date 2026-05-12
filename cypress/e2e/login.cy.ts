import "../support/commands";
import { faker } from '@faker-js/faker';

beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit("/minha-conta/");
});

describe("login", () => {
  const {EMAIL, PASSWORD} = Cypress.env('USER');
  const fakeEmail = faker.internet.email().toLowerCase();
  const fakePassword = faker.internet.password({ length: 12, memorable: false });

  it("1. should authenticate the user when valid credentials are provided", () => {
    cy.fillForm(EMAIL, PASSWORD);
    cy.submitLogin();
    cy.get("h1.page-title")
      .should("be.visible")
      .and("contain.text", "Minha conta");
      cy.url().should("include", "/minha-conta/");
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
    cy.contains("Erro: A senha fornecida para o e-mail sergiodornelasqa@gmail.com está incorreta.")
      .should("be.visible");
  });

  it("5. should reject login when the password is valid but the email is invalid", () => {
    cy.fillForm(fakeEmail, PASSWORD);
    cy.submitLogin();
    cy.contains("Verifique novamente ou tente seu nome de usuário.")
      .should("be.visible");
  });

  it("6. should preserve typed username after failed login", () => {
    cy.fillForm(fakeEmail, fakePassword);
    cy.submitLogin();
    cy.get("#username").should("have.value", fakeEmail);
  });
  
  it("7. should keep password input masked", () => {
    cy.get("#password")
      .should("have.attr", "type", "password")
      .and("be.visible");
  });

  it("8. should logout successfully after valid login", () => {
    cy.fillForm(EMAIL, PASSWORD);
    cy.submitLogin();
    cy.logout();
    cy.url().should("include", "/minha-conta/");
    cy.get("#username").should("be.visible");
    cy.get('input[type="submit"][name="login"]').should("be.visible");
  });


  it("9. should allow toggling remember me option", () => {
    cy.get("#rememberme").should("exist").and("not.be.checked");
    cy.get("#rememberme").check({ force: true }).should("be.checked");
    cy.get("#rememberme").uncheck({ force: true }).should("not.be.checked");
  });


})



//npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator