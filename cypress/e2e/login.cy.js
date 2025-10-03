import '../support/commands'

beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit("/minha-conta/");
});

describe('login', () => {

const { EMAIL, PASSWORD } = Cypress.env('USER');

  it.only('1. should login successfully with valid credentials', () => {
    cy.fillForm(EMAIL,PASSWORD,{log: false});
    cy.get('h1.page-title')
    .should('be.visible')
      .and('contain.text', 'Minha conta');
  });

  it('2.should not login with completely invalid credentials', () => {
    cy.fillForm(testUsers.invalid.email, testUsers.invalid.password);
    cy.contains('não está registrado neste site.')
        .should('be.visible');
  });

  it('3. should not login with empty credentials', () => {
    cy.emptyForm();
    cy.contains('Nome de usuário é obrigatório')
        .should('be.visible');
  });

  it('4.should not login with valid email and invalid password', () => {
    cy.fillForm(testUsers.valid.email, testUsers.invalid.password);
    cy.contains('Perdeu a senha?')
        .should('be.visible');
  });

  it('5. should not login with invalid email and valid password', () => {
    cy.fillForm(testUsers.invalid.email, testUsers.valid.password);
    cy.contains('Se você não está certo de seu nome de usuário, experimente o endereço de e-mail.')
        .should('be.visible');
  });
});