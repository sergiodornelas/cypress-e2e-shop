import "../support/commands";
const users = require("../fixtures/users");

beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit("/minha-conta/");
});

describe("login", () => {
  it("1. should login successfully with valid credentials", () => {
    cy.fillForm(users.valid.email, users.valid.password, { log: false });
    cy.get("h1.page-title")
      .should("be.visible")
      .and("contain.text", "Minha conta");
  });

  it("2. should not login with completely invalid credentials", () => {
    cy.fillForm(users.invalid.email, users.invalid.password);
    cy.contains("Endereço de e-mail desconhecido.")
      .should("be.visible");
  });

  it("3. should not login with empty credentials", () => {
    cy.emptyForm();
    cy.contains("Nome de usuário é obrigatório")
      .should("be.visible");
  });

  it("4. should not login with valid email and invalid password", () => {
    cy.fillForm(users.valid.email, users.invalid.password, { log: false });
    cy.contains("Perdeu a senha?")
      .should("be.visible");
  });

  it("5. should not login with invalid email and valid password", () => {
    cy.fillForm(users.invalid.email, users.valid.password, { log: false });
    cy.contains("Verifique novamente ou tente seu nome de usuário.")
      .should("be.visible");
  });
});
