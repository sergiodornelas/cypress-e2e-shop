import "../support/commands";
import { faker } from "@faker-js/faker";

describe("login - additional scenarios", () => {
  const { EMAIL, PASSWORD } = Cypress.env("USER");

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit("/minha-conta/");
  });

  it("1. should display main login form elements", () => {
    cy.get("h2").contains("Login").should("be.visible");
    cy.get("#username").should("be.visible");
    cy.get("#password").should("be.visible");
    cy.get('input[type="submit"][name="login"]')
      .should("be.visible")
      .invoke("val")
      .should("match", /^(Acessar|Login)$/i);
  });

  it("2. should keep the user on account page when password is empty", () => {
    cy.fillEmail(EMAIL);
    cy.submitLogin();

    cy.url().should("include", "/minha-conta/");
    cy.get("ul.woocommerce-error").should("be.visible");
  });

  it("3. should keep the user on account page when email is empty", () => {
    cy.fillPassword(PASSWORD);
    cy.submitLogin();

    cy.url().should("include", "/minha-conta/");
    cy.get("ul.woocommerce-error").should("be.visible");
  });

  it("4. should navigate to password reset page from login", () => {
    cy.get('a[href*="lost-password"]')
      .should("be.visible")
      .click();

    cy.url().should("include", "lost-password");
    cy.get("button[type='submit']").should("be.visible");
  });

  it("5. should show login error after attempting with random credentials", () => {
    const fakeEmail = faker.internet.email();
    const fakePassword = faker.internet.password();

    cy.fillForm(fakeEmail, fakePassword);
    cy.submitLogin();

    cy.url().should("include", "/minha-conta/");
    cy.get("ul.woocommerce-error").should("be.visible");
  });
});
