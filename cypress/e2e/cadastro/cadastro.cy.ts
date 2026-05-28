import "../support/commands";
import { faker } from "@faker-js/faker";

describe("register - account creation scenarios", () => {
  let email: string;
  let password: string;

  const register = (email: string, password: string) => {
    cy.get("form.register #reg_email").clear().type(email);
    cy.get("form.register #reg_password").clear().type(password, { log: false });
    cy.get('form.register button[name="register"], form.register input[name="register"]').click();
  };

  const uniqueEmail = () => faker.internet.email().toLowerCase();
  const validPassword = () => faker.internet.password({ length: 12, memorable: false });

  beforeEach(() => {
    cy.env(["USER"]).then(({ USER }: { USER: { EMAIL: string; PASSWORD: string } }) => {
      email = USER.EMAIL;
      password = USER.PASSWORD;
    });

    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit("/minha-conta/");
  });

  
  it("2. should create a new account with valid data", () => {
    const email = uniqueEmail();
    const password = validPassword();

    register(email, password);

    cy.url().should("include", "/minha-conta/");
    cy.get("a[href*='customer-logout']").should("be.visible");
    cy.get("#username").should("not.exist");
  });

  it("3. should block registration for duplicated email", () => {
    register(email, password);

    cy.get("ul.woocommerce-error")
      .should("be.visible")
      .and("contain.text", "já está registrado");
  });

  it("4. should show error when trying to register with empty form", () => {
    cy.get('form.register button[name="register"], form.register input[name="register"]').click();

    cy.get("ul.woocommerce-error").should("be.visible");
  });

  it("5. should show error when password is missing on register", () => {
    cy.get("form.register #reg_email").type(uniqueEmail());
    cy.get('form.register button[name="register"], form.register input[name="register"]').click();

    cy.get("ul.woocommerce-error").should("be.visible");
  });

  it("6. should show error when email is missing on register", () => {
    cy.get("form.register #reg_password").type(validPassword(), { log: false });
    cy.get('form.register button[name="register"], form.register input[name="register"]').click();

    cy.get("ul.woocommerce-error").should("be.visible");
  });
});
