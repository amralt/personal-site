document.addEventListener("DOMContentLoaded", function() {
    // Example image URLs - replace these with actual URLs of your images
    const imageUrls = [
        "/react.png",
        "/fast-api.png",
        "/sql.png",
        "/django.png",
        // Add more URLs as needed
    ];

    const stackContainer = document.querySelector('.main__my-stack');

    imageUrls.forEach(url => {
        const imgElement = document.createElement('img');
        imgElement.src = 'public' + url;
        imgElement.alt = "some framework"; // Provide a meaningful description for accessibility
        imgElement.className = "small_image"

        stackContainer.appendChild(imgElement);
    });
});
