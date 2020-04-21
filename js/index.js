// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  //price
  const $price = product.querySelector(".price span");
  const priceValue = Number($price.innerText);

  //quantity
  const $quantity = product.querySelector(".quantity input");
  const quantityValue = $quantity.valueAsNumber;

  const subtotal = priceValue * quantityValue;

  const $subtotal = product.querySelector(".subtotal span");

  $subtotal.innerText = subtotal;

  return subtotal;

}
// ITERATION 2

function calculateAll() {

  const allProducts = document.querySelectorAll('.product');

  let total = 0;

  for (let i=0; i<allProducts.length; i++){ 
    total += updateSubtotal(allProducts[i]);
  }

  // ITERATION 3

  const $total = document.querySelector('#total-value span');

  $total.innerText = total;

}

// ITERATION 4

const $action = document.getElementsByClassName('action');


function removeProduct(event) {
  //actual btn
  const $target = event.currentTarget;

  //path to the td
  const $tdOfButton = $target.parentNode

  //path to the tr
  const $trOfTdOfButton = $tdOfButton.parentNode 

  // path to the tbody
  const $tbodytrOfTdOfButton = $trOfTdOfButton.parentNode 

  // remove the entire tr!
  $tbodytrOfTdOfButton.removeChild($tbodytrOfTdOfButton); 

  console.log('The target in remove is:', $target);
  
}

const $btnRemove = document.querySelectorAll(tbodytrOfTdOfButton);
  
  for (let removeProduct of $btnRemove){
    removeProduct.addEventListener('click', removeProduct('.action button'))
  }

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

});
