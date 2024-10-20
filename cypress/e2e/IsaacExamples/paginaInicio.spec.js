// cypress/e2e/pruebas/paginaInicio.spec.js

describe('Página de Inicio', () => {
    it('Debería cargar la página de inicio correctamente', () => {
      cy.visit('/') // Utiliza la baseUrl definida en cypress.config.js
  
      // Verificar el título de la página
      cy.title().should('include', 'Título Esperado')
  
      // Verificar que un elemento específico está visible
      cy.get('h1').should('be.visible').and('contain', 'Bienvenido')
    })
  })
  