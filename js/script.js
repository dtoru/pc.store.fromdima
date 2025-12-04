let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
  cart.push({name, price});
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
  alert(name + ' додано в кошик!');
}

function updateCart() {
  const list = document.getElementById('cart-items');
  const totalEl = document.getElementById('total');
  const countEl = document.getElementById('cart-count');
  if (countEl) countEl.textContent = cart.length;
  if (!list || !totalEl) return;
  list.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price}₴`;
    list.appendChild(li);
    total += item.price;
  });
  totalEl.textContent = 'Загальна сума: ' + total + '₴';
}

window.onload = updateCart;