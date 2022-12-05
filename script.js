const images = [
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1422493757035-1e5e03968f95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1493815793585-d94ccbc86df8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTF8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxuYXR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1492273840898-6102ad35701e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA2fHxuYXR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
];
const flexContainer = document.getElementById("flex-container");
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
const containerWIdth = 80;
const flexContainerWidth = images.length * containerWIdth;
flexContainer.style.width = flexContainerWidth;

for (let i = 0; i < images.length; i++) {
    const newImg = document.createElement("img");
    newImg.src = images[i];
    newImg.classList.add("img-style");
    flexContainer.appendChild(newImg);
}
let currentCount = 0;
leftBtn.addEventListener("click", (event) => {
    if (currentCount > 0) {
        currentCount--;
        showImg();
    } else {
        currentCount = images.length - 1;
    }
});
rightBtn.addEventListener("click", (event) => {
    if (currentCount < images.length - 1) {
        currentCount++;
        if (currentCount == images.length - 1) {
            currentCount = 0;
        }
        showImg();
    }else{
        currentCount=0;
    }
});
function showImg() {
    let distance = -currentCount * containerWIdth;
    flexContainer.style.transform = `translateX(${distance}vw)`;
}
