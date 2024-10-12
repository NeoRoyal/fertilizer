let cart = [];

// Load cart from local storage when the script runs
function loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem('cart');
    cart = storedCart ? JSON.parse(storedCart) : [];
    updateCartCount();
}

function addToCart(productName, price, quantity) {
    const item = { name: productName, price: price, quantity: quantity };
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to local storage
    updateCartCount();
    alert(`${productName} has been added to your cart!`);
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    cartCount.innerText = cart.length;
}

function displayCartItems() {
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = ''; // Clear existing items

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>No items in cart yet</p>';
    } else {
        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.innerHTML = `<p>${item.name} - ${item.quantity}: ${item.price} AZN</p>`;
            cartItemsDiv.appendChild(itemDiv);
        });
    }
}

function loadCart() {
    displayCartItems();
}

// Call this function on cart.html load to display cart items
if (document.title === "Cart") {
    loadCart();
} else {
    loadCartFromLocalStorage(); // Load cart on other pages
}

// Function to handle checkout (can be expanded later)
function proceedToCheckout() {
    alert('Proceeding to checkout!');
}
