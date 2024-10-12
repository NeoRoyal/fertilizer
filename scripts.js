let cart = [];

function addToCart(productName, price, quantity) {
    const item = { name: productName, price: price, quantity: quantity };
    cart.push(item);
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

// Call this function on cart.html load to display cart items
function loadCart() {
    displayCartItems();
}

// Function to handle checkout (can be expanded later)
function proceedToCheckout() {
    alert('Proceeding to checkout!');
}

// Call loadCart when the cart page is loaded
if (document.title === "Cart") {
    loadCart();
}
