require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {  
  it('1 - Verifica se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it(`2 - Verifica se ao chamar fetchProducts com o argumento 'computador', a função 'fetch' é chamada`, async () => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalled();
  });
  
  it(`3 - Testa se ao chamar a funçaõ 'fetchProduct' com o argumento 'computador', a funçaõ fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"`, async () => {
    await fetchProducts('computador');
    const endPoint = "https://api.mercadolibre.com/sites/MLB/search?q=computador"
    expect(fetch).toHaveBeenCalledWith(endPoint);
  });

  it(`4 - Testa se o retorno da função 'fetchProducts' com o argumento 'computador' é uma estrutura de dados igual ao objeto "computadorSearch" que já está importada no arquivo`, async () => {
    const expected = await fetchProducts('computador')
    expect(expected).toEqual(computadorSearch);
  });

  it(`5 - Teste se ao chamar a função fetchProducts sem argumento retorna um erro com a mensagem 'You must provide an url'`, async () => {
    const expected = await fetchProducts();
    //expect(expected).toBe(new Error('You must provide an url'));
    expect(expected).toStrictEqual(new Error('You must provide an url'));
  });  
});
