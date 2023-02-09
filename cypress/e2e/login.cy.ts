describe('login', () => {
  it('user should be able to log in', () => {
    cy.visit('/')

    // fill in the form
    cy.get('input[name="username"]').clear().type('admin');
    cy.get('input[name="password"]').clear().type('1234');

    // submit the form 
    cy.get('button').contains('Sign In').click();
    cy.contains('h5', 'Calculator Page').should('be.visible');
  });
});
