class SearchPage {

  acessarSite() {
    cy.visit('https://blogdoagi.com.br');
  }

  abrirBusca() {
    cy.wait(3000);
    cy.reload();
    cy.contains('Produtos')
      .click()
      .wait(5000);

    cy.get('a[aria-label="Search icon link"]:visible')
      .should('exist')
      .click();
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