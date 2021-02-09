'use strict'

const formToAdd = document.getElementsByClassName('shop__add-to-cart-form')[0];
const productAdded = document.getElementsByClassName('shop__product-added')[0];
const imgSelector = document.getElementById('img-selector');
const imgActive = document.getElementById('img-active');

formToAdd.addEventListener('submit', (e) => {
  e.preventDefault();
  productAdded.style.display = 'block';
  setTimeout(() => {
    productAdded.style.display = 'none';
  }, 3000);
});

imgSelector.addEventListener('click', (e) => {
  if (e.target.tagName === 'FIGURE') {
    let selector = imgSelector.firstElementChild;
    while (selector) {
      selector.classList.remove('active');
      selector = selector.nextElementSibling;
    }
    e.target.classList.add('active');
    imgActive.firstElementChild.src = e.target.firstElementChild.src;
  }
});