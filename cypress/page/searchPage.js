class SearchPage {

  acessarSite() {
    cy.visit('https://blogdoagi.com.br');
    cy.get('body');
    cy.should('be.visible');
  }

  abrirBusca() {
    cy.wait(3000);
    cy.reload();
    cy.contains('Produtos')
      .click()
      .wait(3000);

// abrir a busca
cy.get('a[aria-label="Search button"]')
 //.should('be.visible')
  .click();

// esperar o campo aparecer
cy.get('.search-field')
  .should('be.visible')
  }

  buscar(termo) {
    cy.get('.search-field')
      .should('be.visible')
      .type(`${termo}{enter}`);
  }

  validarResultado(termo) {
    cy.contains('Resultados encontrados para:')
      .should('contain.text', termo);
  }

  validarSemResultado() {
    cy.contains('Lamentamos, mas nada foi encontrado')
      .should('be.visible');
  }
}

export default new SearchPage();