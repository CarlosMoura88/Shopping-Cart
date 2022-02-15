const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  const argumento = '<ol><li>Item</li></ol>';
  const metodo = localStorage.setItem;
  it(`1 - Testa se ao executar 'saveCartItems' com o argumento '<ol><li>Item</li></ol>' o método 'localStorage.setItem' é chamado`, () => {
    saveCartItems(argumento);     
    expect(metodo).toHaveBeenCalled();
  });

  it(`2 - Testa se ao executar 'savedCartItems' o método 'localStorage.setItem' é chamado com dois parâmetros`, async () => {    
    saveCartItems(argumento);
    expect(metodo).toHaveBeenCalledWith('cartItems', argumento);
  });
});
