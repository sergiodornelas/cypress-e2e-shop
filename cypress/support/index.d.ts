declare namespace Cypress {
  interface Chainable {
    //Custom commands for entering the service queue.
    LoginDataValid(email: string, password: string): Chainable<void>
    //JoinQueueValidData(): Chainable<void>                                 

  }
}