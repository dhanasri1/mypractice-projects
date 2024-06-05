const imageContainer = document.querySelector(".image-container");
const btnE1 = document.querySelector(".btn");
btnE1.addEventListener("click", () => {
     imageNum = 10;
    addNewImages();
})

function addNewImages() {
    for(let index = 0; index < imageNum; index++) {
        const newImg = document.createElement("img");
    newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
    imageContainer.appendChild(newImg);
    }
}