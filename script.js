let cart = [];

// Filter menu items
function filterMenu(category) {
  const items = document.querySelectorAll('.menu-item');
  items.forEach(item => {
    if (category === 'all' || item.dataset.category === category) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Add to cart
function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

// Update cart display
function updateCart() {
  const cartContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');

  cartContainer.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const div = document.createElement('div');
    div.classList.add('cart-item');
    div.innerHTML = `
      <span>${item.name} - $${item.price.toFixed(2)}</span>
      <button onclick="removeItem(${index})">❌</button>
    `;
    cartContainer.appendChild(div);
  });

  totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Remove item from cart
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

// Place order
function placeOrder() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  alert('🎉 Thank you for your order! Your delicious meal is being prepared.');
  cart = [];
  updateCart();
}
