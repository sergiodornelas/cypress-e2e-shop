declare namespace Cypress {
  interface Chainable {
    //Custom commands for entering the service queue.
    fillForm(email: string, password: string): Chainable<void>
    emptyForm(): Chainable<void>
  }
}