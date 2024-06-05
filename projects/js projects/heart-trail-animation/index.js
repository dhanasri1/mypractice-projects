document.addEventListener("mousemove", (event) => {
    let body = document.querySelector("body");
    let heart =document.createElement("span");
    let x = event.offsetX;
    let y = event.offsetY;
    heart.style.left = x + "px";
    heart.style.top = y + "px";
    let size = Math.random() * 100;
    heart.style.width = size + "px";
    heart.style.height = size + "px";
    body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    },2000);
});