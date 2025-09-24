
Cypress.Commands.add('fillForm', (email: string, password: string) => {
    cy.get('[id="username"]').type(email)
    cy.get('[id="password"]').type(password)
    cy.get('input[type="submit"][name="login"]').click()
})

Cypress.Commands.add('emptyForm', () => {
    cy.get('input[type="submit"][name="login"]').click()
})
