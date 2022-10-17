const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
]

const chosenImg = images[Math.floor(Math.random()*images.length)];

const bgImg = document.createElement("img");
bgImg.src=`js-img/${chosenImg}`;

document.body.appendChild(bgImg);
