describe('Prueba de búsqueda en Google', () => {
  it('Busca en Google', () => {
    cy.visit('https://www.google.com');
    cy.get('input[name="q"]').type('Cypress testing framework{enter}');
    cy.get('#search').should('contain', 'Cypress.io');
  });
});
