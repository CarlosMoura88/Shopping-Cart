const saveCartItems = (salvar) => localStorage.setItem('cartItems', salvar);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
