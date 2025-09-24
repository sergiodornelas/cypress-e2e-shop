declare namespace Cypress {
  interface Chainable {
    //Custom commands for entering the service queue.
    FillForm(email: string, password: string): Chainable<void>
    EmptyForm(): Chainable<void>
  }
}