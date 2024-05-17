let currentImageIndex = 0;

function setMainImage(imageSrc) {
    document.getElementById('mainImage').src = imageSrc;
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + 3) % 3;
    updateMainImage();
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % 3;
    updateMainImage();
}

function updateMainImage() {
    const images = document.querySelectorAll('.thumbnail');
    const imageSrc = images[currentImageIndex].src;
    setMainImage(imageSrc);
}
