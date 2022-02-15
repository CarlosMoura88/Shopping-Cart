const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it(`1 - Testa se ao executar 'getSavedCartItems' o método 'localStorage.getItem' é chamado`, () => {
    getSavedCartItems(); 
    const metodo = localStorage.getItem; 
    expect(metodo).toHaveBeenCalled();
  });

  it(`2 - Testa se ao executar 'getSavedCartItems' o método 'localStorage.getItem' é chamado com o 'cartItems' como parâmetro`, async () => {
    const expected = localStorage.getItem;
    getSavedCartItems()
    expect(expected).toHaveBeenCalledWith('cartItems');
  });
});
