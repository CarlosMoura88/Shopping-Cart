const fetchProducts = async (produto) => {
  if (produto === undefined) return new Error('You must provide an url');
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${produto}`;  
  try {
  const response = await fetch(url);
  const data = await response.json();      
  return data.results;  
} catch (error) {
  return console.log(error);
} 
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
