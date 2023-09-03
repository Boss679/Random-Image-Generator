const container = document.querySelector('.container');
const unsplashURL = 'https://source.unsplash.com/random/';
const rows = 5;
const imageUrls = new Set(); // To store unique image URLs

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img');
    let imgUrl = `${unsplashURL}${getRandomSize()}`;

    // Check if the image URL is already in the set, and generate a new one if needed
    while (imageUrls.has(imgUrl)) {
        imgUrl = `${unsplashURL}${getRandomSize()}`;
    }

    imageUrls.add(imgUrl); // Add the URL to the set
    img.src = imgUrl;
    container.appendChild(img);
}

function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300;
}

// Add an event listener for the "Reload" button
const reloadButton = document.getElementById('reloadButton');
reloadButton.addEventListener('click', () => {
    location.reload(); // Reload the page to restart the application
});
