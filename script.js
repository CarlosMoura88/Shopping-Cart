const secItems = document.querySelector('.items');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ id, title, thumbnail }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function cartItemClickListener(event) { // listener para remover o produto do carrinho de compras;
  event.target.remove();
  saveCartItems();
}

function createCartItemElement({ id, title, price }) { // cria o item no carrinho e deve ser filho da OL;
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${id} | NAME: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

async function getSkuFromProductItem(item) { // recupera o ID do produto
  const itemID = item.querySelector('span.item__sku').innerText;  
  const result = await fetchItem(itemID);  
  const carrinho = document.querySelector('.cart__items');
  carrinho.appendChild(createCartItemElement(result));
}

const insereNoCarrinho = async (event) => {
  const itemID = event.target.parentNode;
  await getSkuFromProductItem(itemID);
  saveCartItems();
};

const insereEvento = () => {
  getSavedCartItems();
  const listaSalva = document.querySelectorAll('.cart__item');// inseri o listener porque ao carregar a página ele não era carregado junto ao HTML, sendo necessário reinserir
  listaSalva.forEach((element) => element.addEventListener('click', cartItemClickListener));
};

const loadProducts = (async () => { 
  const produtosEscolhidos = await fetchProducts('computador');
  produtosEscolhidos.forEach((element) => secItems.appendChild(createProductItemElement(element)));
  const botaoAdd = document.querySelectorAll('button.item__add');
  botaoAdd.forEach((element) => element.addEventListener('click', insereNoCarrinho));
  insereEvento();
});

window.onload = () => { 
  loadProducts();
};
