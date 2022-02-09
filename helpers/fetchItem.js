const fetchItem = async (itemID) => {
    if (itemID === undefined) return new Error('You must provide an url');
    const url = `https://api.mercadolibre.com/items/${itemID}`;    
    try {
    const response = await fetch(url);
    const data = await response.json();      
    return data;
  } catch (error) {
    return console.log(error);
  } 
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
