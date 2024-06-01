document.addEventListener("DOMContentLoaded", () => {
    const allImages = document.querySelectorAll(".graduation-photos img, .portrait-photos img, .city-photos img, .event-photos img");
    const popup = document.getElementById("popup");
    const popupImage = document.querySelector(".popup-img");

    allImages.forEach(image => {
        image.addEventListener("click", () => {
            popupImage.src = image.src;
            popup.style.display = "flex";
        });
    });

    popup.addEventListener("click", () => {
        popup.style.display = "none";
    });
});



