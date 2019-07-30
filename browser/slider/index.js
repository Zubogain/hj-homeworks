const pathToImg = "./i";
const imgArray = [
    "airmax-jump.png",
    "airmax-on-foot.png",
    "airmax-playground.png",
    "airmax-top-view.png",
    "airmax.png"
];
const slider = document.getElementById("slider");
let step = 0;
setInterval(function() {
    slider.src = `${pathToImg}/${imgArray[step++]}`;
    if (step >= imgArray.length) {
        step = 0;
    }
}, 5000);
