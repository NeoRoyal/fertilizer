// Show more details when 'More' button is clicked
function showMoreDetails() {
    const details = document.getElementById('moreDetails');
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}
