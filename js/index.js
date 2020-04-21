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

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  const listProducts = target.parentNode;
  const orderedProductList = listProducts.parentNode;

  orderedProductList.removeChild(listProducts);
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
