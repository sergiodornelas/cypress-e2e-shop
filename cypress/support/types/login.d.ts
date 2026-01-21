declare namespace Cypress {
  interface Chainable {
    fillEmail(email: string): Chainable<void>;
    fillPassword(password: string): Chainable<void>;
    submitLogin(): Chainable<void>;
    fillForm(email: string, password: string): Chainable<void>;
  }
}