
const images = [
    "download/aaimage1.jpg", "download/aaimage2.jpg", "download/aaimage3.jpg", "download/aaimage4.jpg",
    "download/aaimage5.jpg", "download/aaimage6.jpg", "download/aaimage7.jpg", "download/aaimage8.jpg",
    "download/aaimage12.jpg", "download/aaimage10.jpg", "download/aaimage11.jpg", "download/aaimage13.jpg",
    "download/aaimage15.jpg", "download/aaimage14.jpg", "download/aaimage16.jpg", "download/aaimage18.jpg", 


];

let currentSet = 0;

function changeImages() {
    const imageContainers = document.querySelectorAll('.image-container img');
    for (let i = 0; i < imageContainers.length; i++) {
        const imageIndex = (currentSet * 8 + i) % images.length;
        imageContainers[i].src = images[imageIndex];
    }
    currentSet = (currentSet + 1) % 2; // Toggle between 0 and 1
}

setInterval(changeImages, 5000); // Change images every 5 seconds

// Initial load
document.addEventListener("DOMContentLoaded", () => {
    changeImages();
});

