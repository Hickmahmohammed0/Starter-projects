const productList = document.getElementById('product-list');
const cart = [];

// Fetch products from Fake Store API
async function fetchProducts() {
  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json();
  renderProducts(products);
}

// Render products to the DOM
function renderProducts(products) {
  productList.innerHTML = '';
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.description.substring(0, 50)}...</p>
      <p>Price: $${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id}, '${product.title}', ${product.price})">Add to Cart</button>
    `;
    productList.appendChild(productDiv);
  });
}

// Add item to the cart
function addToCart(id, title, price) {
  const cartItem = { id, title, price };
  cart.push(cartItem);
  renderCart();
}

// Render cart to the DOM
function renderCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  if (cart.length === 0) {
    cartItems.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }

  cart.forEach(item => {
    const cartItemDiv = document.createElement('div');
    cartItemDiv.className = 'cart-item';
    cartItemDiv.innerHTML = `
      <span>${item.title} - $${item.price.toFixed(2)}</span>
      <button onclick="removeFromCart(${item.id})">Remove</button>
    `;
    cartItems.appendChild(cartItemDiv);
  });
}

// Remove item from the cart
function removeFromCart(id) {
  const itemIndex = cart.findIndex(item => item.id === id);
  if (itemIndex > -1) {
    cart.splice(itemIndex, 1);
    renderCart();
  }
}

// Checkout
function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  alert('Thank you for your purchase!');
  cart.length = 0;
  renderCart();
}

// Fetch products on page load
fetchProducts();