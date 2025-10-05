Cypress.Commands.add('fillForm', (email, password, options = {}) => {
  cy.get('[id="username"]').type(email, { log: options.log ?? true });
  cy.get('[id="password"]').type(password, { log: options.log ?? true });
  cy.get('input[type="submit"][name="login"]').click();
});

Cypress.Commands.add('emptyForm', () => {
    cy.get('input[type="submit"][name="login"]').click()
})