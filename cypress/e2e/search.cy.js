describe('Busca no Blog do Agi', () => {

  beforeEach(() => {
    cy.visit('https://blogdoagi.com.br');
  });

  it('Deve realizar busca com termo válido', () => {

    // Abrir campo de busca
    cy.wait(3000);
    cy.reload();
    cy.contains('Produtos')
    .click()
  .wait(5000);
    cy.get('a[aria-label="Search icon link"]:visible')
  .should('exist')
  .click()

    // Digitar termo válido
    cy.get('.search-field')
      .should('be.visible')
      .type('pix{enter}');

    // Validar resultados
    cy.contains('Resultados encontrados para:')
  .should('contain.text', 'pix')
  });

  it('Deve exibir mensagem ao buscar termo inexistente', () => {

    // Abrir campo de busca
    // Abrir campo de busca
    cy.wait(3000);
    cy.reload();
    cy.contains('Produtos')
    .click()
  .wait(5000);
    cy.get('a[aria-label="Search icon link"]:visible')
  .should('exist')
  .click()

    // Digitar termo válido
    cy.get('.search-field')
      .should('be.visible')
      .type('asfasfas{enter}');
      

    // Validar resultados
    cy.contains('Resultados encontrados para:')
  .should('contain.text', 'asfasfas');

  cy.contains('Lamentamos, mas nada foi encontrado')
  .should('be.visible')
  });

});