// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  let currentPrice = price.innerHTML;
  let currentQuantity = quantity.value;

  let subtotalPrice = currentPrice * currentQuantity;

  subtotal.innerHTML = subtotalPrice;

  return subtotal.innerHTML;
}

function calculateAll() {
  const allProducts = document.getElementsByClassName('product');
  let totalPrice = document.querySelector('#total-value span');
  let total = 0;

  for (let i = 0; i < allProducts.length; i++) {
    total += +(updateSubtotal(allProducts[i]));
    
  }
  totalPrice.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const row = target.parentNode.parentNode
  console.log('The target in remove is:', target, row);
  const productRemove = document.getElementById('parent');
  productRemove.removeChild(row);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const removeButtons = document.getElementsByClassName('btn-remove');
  calculatePricesBtn.addEventListener('click', calculateAll);

  for(let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }

  //... your code goes here
});
