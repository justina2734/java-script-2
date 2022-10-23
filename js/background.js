let images = [
    "0.jpeg",
    "6.jpeg",
    "9.jpeg",
    "10.jpeg",
]

const chosenImg = images[Math.floor(Math.random()*images.length)];

function paintImage (imgNumber) {
    const backgroundImage = "js-img/"
    bgImg.classList.add("bgImg");
}
 
const bgImg = document.createElement("img");
bgImg.src=`js-img/${chosenImg}`;

document.body.appendChild(bgImg);
