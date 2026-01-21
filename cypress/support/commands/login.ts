
Cypress.Commands.add('fillEmail', (email: string) => {
  cy.get('[id="username"]').type(email);

})

Cypress.Commands.add('fillPassword', (password: string) => {
  cy.get('[id="password"]').type(password);

})

Cypress.Commands.add('submitLogin', () => {
  cy.get('input[type="submit"][name="login"]').click();
});

Cypress.Commands.add('fillForm', (email: string, password: string) => {
  cy.get('[id="username"]').type(email);
  cy.get('[id="password"]').type(password);
})