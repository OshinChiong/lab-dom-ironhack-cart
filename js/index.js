// ITERATION 1

function updateSubtotal(product) {
  //Get Price
  let price = product.querySelector('.price span').innerHTML;

  //Get Quantity
  let quantity = product.querySelector('.quantity input');

  //Get Subtotal
  let subtotal = product.querySelector('.subtotal span');

  let sub = price * quantity.value;

  subtotal.innerHTML = sub;

  return sub;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const allProducts = document.querySelectorAll('.product');
  let allProducts = document.getElementsByClassName('product');

  let fullTotal = 0;
  for (let i = 0; i < allProducts.length; i++) {
    fullTotal += updateSubtotal(allProducts[i]);
  }
  let total = document.querySelector('#total-value span');
  total.innerHTML = fullTotal;
}

// ITERATION 4

function removeProduct(e) {
  const target = e.currentTarget;

  let row = target.parentNode.parentNode;
  // let table = target.parentNode.parentNode.parentNode;
  let table = document.querySelector('tbody');
  //This removes the row
  table.removeChild(row);
}

// ITERATION 5

function createProduct() {
  //... your code goes here

  // let productProperties = document.querySelectorAll('.create-product input');

  let newProductName = document.querySelector(
    '.create-product input[type=text]'
  );
  let newProductPrice = document.querySelector(
    '.create-product input[type=number]'
  );

  let newTableRow = document.createElement('tr');
  newTableRow.className = 'product';
  newTableRow.innerHTML = `
    <td class="name">
    <span>${newProductName.value}</span>
  </td>
  <td class="price">$<span>${newProductPrice.value}.00</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`;

  let rmvBtn = newTableRow.querySelector('.btn-remove');
  rmvBtn.addEventListener('click', removeProduct);

  let body = document.querySelector('tbody');
  body.appendChild(newTableRow);

  newProductName.value = '';
  newProductPrice.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  let removeButtons = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }

  const createNewProductBtn = document.getElementById('create');
  createNewProductBtn.addEventListener('click', createProduct);
});