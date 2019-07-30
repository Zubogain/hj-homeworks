"use strict";
const pathToImg = "./i";
const imgArray = [
    "breuer-building.jpg",
    "guggenheim-museum.jpg",
    "headquarters.jpg",
    "IAC.jpg",
    "new-museum.jpg"
];
const slider = document.getElementById("currentPhoto");
const nextPhoto = document.getElementById("nextPhoto");
const prevPhoto = document.getElementById("prevPhoto");

let counter = 0;
function setImg(number) {
    slider.src = `${pathToImg}/${imgArray[number]}`;
}
setImg(counter);

nextPhoto.onclick = function() {
    counter < imgArray.length - 1 ? counter++ : (counter = 0);
    setImg(counter);
};

prevPhoto.onclick = function() {
    counter > 0 ? counter-- : (counter = imgArray.length - 1);
    setImg(counter);
};
