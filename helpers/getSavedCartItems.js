const getSavedCartItems = () => {
  const minhaLista = document.querySelector('ol.cart__items');
  const meuSave = localStorage.getItem('cartItems');  
  minhaLista.innerHTML = meuSave;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
