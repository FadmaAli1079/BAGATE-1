function addToWishlist(productId) {
  var product = document.getElementById(productId);
  // Add product details to the wishlist
  addToWishlistPage(product);
  // Change the heart color
  var heart = product.querySelector('.like');
  heart.style.color = 'black'; // Change the color to black
}

function addToWishlistPage(product) {
  // Get product details
  var productName = product.querySelector('h3').textContent;
  var productPrice = product.querySelector('.price').textContent;
  
  // Save product details to local storage or send them to server
  // For simplicity, let's just store them in local storage
  var wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  wishlist.push({ name: productName, price: productPrice });
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
}