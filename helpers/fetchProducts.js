const fetchProducts = async (produto) => {  
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${produto}`;
  
  try {
  const response = await fetch(url);
  const data = await response.json();      
  return data.results;  
} catch (error) {
  return console.log(error);
} 
};

console.log(fetchProducts());

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
