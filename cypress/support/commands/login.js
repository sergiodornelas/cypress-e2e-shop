
Cypress.Commands.add('fillEmail', (email) => {
  cy.get('[id="username"]').type(email);

})

Cypress.Commands.add('fillPassword', (password) => {
  cy.get('[id="password"]').type(password);

})

Cypress.Commands.add('submitLogin', () => {
  cy.get('input[type="submit"][name="login"]').click();
});

Cypress.Commands.add('fillForm', (email, password) => {
  cy.get('[id="username"]').type(email);
  cy.get('[id="password"]').type(password);
})