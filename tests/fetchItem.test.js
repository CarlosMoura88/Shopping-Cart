require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('1 - Verifica se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });

  it(`2 - Verifica se ao executar fetchItem com o argumento 'MLB1615760527', a função 'fetch' é chamada`, async () => {
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalled();
  });
  
  it(`3 - Testa se ao chamar a funçaõ 'fetchItem' com o argumento 'MLB1615760527', a funçaõ fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527"`, async () => {
    await fetchItem('MLB1615760527');
    const endPoint = "https://api.mercadolibre.com/items/MLB1615760527"
    expect(fetch).toHaveBeenCalledWith(endPoint);
  });

  it(`4 - Testa se o retorno da função 'fetchItem' com o argumento 'MLB1615760527' é uma estrutura de dados igual ao objeto "item" que já está importada no arquivo`, async () => {
    const expected = await fetchItem('MLB1615760527')
    expect(expected).toEqual(item);
  });

  it(`5 - Teste se ao chamar a função fetchItem sem argumento retorna um erro com a mensagem 'You must provide an url'`, async () => {
    const expected = await fetchItem();
    //expect(expected).toBe(new Error('You must provide an url'));
    expect(expected).toStrictEqual(new Error('You must provide an url'));
  });
});
