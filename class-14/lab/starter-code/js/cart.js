/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  // get tbody element and set innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body - LIKE ABOVE

  // TODO: Iterate over the items in the cart - for loop thru cart.items array
  // TODO: Create a TR - create row
  // TODO: Create a TD for the delete link, quantity,  and the item create / give content / append to row
  // TODO: Add the TR to the TBODY and each of the TD's to the TR - append row to tbody (parent - window to DOM)

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item - remove from array here
  // TODO: Save the cart back to local storage - we have a method for that: saveToLocalStorage()
  // TODO: Re-draw the cart table - cool we have a method for that - showCart()

}

// This will initialize the page and draw the cart on screen
renderCart();
