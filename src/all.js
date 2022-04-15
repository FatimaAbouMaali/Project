
let i = 0;
let images = [];
let time = 4000;
//images[0] = "assets/images/banner1C.jpeg";
//images[1] = "assets/images/banner2C.jpeg";
//images[2] = "assets/images/banner3C.jpeg";
//images[3] = "assets/images/banner4C.jpeg";
function slideShow() {
    let slide = document.getElementById('slide');

    slide.src = images[i];

    if (i < images.length - 1) {
        i++
    }
    else {
        i = 0;
    }
    setTimeout("slideShow()", time)
}