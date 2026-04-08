import searchPage from '../page/searchPage.js';

describe('Busca no Blog do Agi', () => {

  beforeEach(() => {
    searchPage.acessarSite();
  });

  it.only('Deve realizar busca com termo válido', () => {

    searchPage.abrirBusca();
    searchPage.buscar('pix');
    searchPage.validarResultado('pix');

  });

  it('Deve exibir mensagem ao buscar termo inexistente', () => {

    searchPage.abrirBusca();
    searchPage.buscar('asfasfas');
    searchPage.validarResultado('asfasfas');
    searchPage.validarSemResultado();

  });

});