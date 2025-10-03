const users = {
  valid: {
    email: Cypress.env("USER").EMAIL,
    password: Cypress.env("USER").PASSWORD,
  },
  invalid: {
    email: "teste@invalido.com",
    password: "wrongpass",
  },
};

module.exports = users;

