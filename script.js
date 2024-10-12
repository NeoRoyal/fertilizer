document.getElementById('fertilizerOrderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const fertilizerType = document.getElementById('fertilizerType').value;
    const elementName = document.getElementById('elementName').value;
    const percentage = document.getElementById('percentage').value;

    // Create order confirmation message
    const orderMessage = `You have ordered: ${fertilizerType} with ${percentage}% ${elementName}. Thank you for your order!`;

    // Display order confirmation
    alert(orderMessage);
});
