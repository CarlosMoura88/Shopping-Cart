const saveCartItems = () => {
  const itensNoCarrinho = document.querySelector('ol.cart__items');
  localStorage.setItem('cartItems', itensNoCarrinho.innerHTML);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
