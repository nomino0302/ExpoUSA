var msImagesDelay = 5000;
var imagesPaths = ["assets/img/pictures/jardin-chateau-de-versailles.jpeg", "assets/img/pictures/la-defense.jpeg", "assets/img/pictures/mont-saint-michel.jpeg", "assets/img/pictures/montpellier-promenade-du-peyrou.webp", "assets/img/pictures/ocres-roussillon.jpeg", "assets/img/pictures/petite-france-strasbourg.jpeg", "assets/img/pictures/val-isere.jpeg", "assets/img/pictures/vieux-port-marseille.jpeg"];
const imagePlaceholder = document.getElementById("image-to-place");

function placeImage(imgPath) {
    imagePlaceholder.src = imgPath;
}
var img = imagesPaths.shift();
imagesPaths.push(img);
placeImage(img);

window.onload = () => {
    setInterval(() => {
        img = imagesPaths.shift();
        imagesPaths.push(img);
        placeImage(img);
    }, msImagesDelay);
}
