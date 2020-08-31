function cloneElementNTimes(n, parent, el){
    for (let index = 0; index < n; index++) {
        el.style['animation-delay'] = getRandomArbitrary(-16, 0) + "s"
        parent.appendChild(el.cloneNode());
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function checkIfMobileAspectRatio(){
    let ratio = document.documentElement.clientWidth / document.documentElement.clientHeight;
    return (ratio < 1);
}

function duplicateImgToBg(){
    let img = document.getElementsByClassName("repeat-bg")[0];
    let widthImg = 0;
    if (checkIfMobileAspectRatio()){
        widthImg = document.documentElement.clientWidth/6;
    } else {
        widthImg = document.documentElement.clientWidth/12;
    }
    let bg = img.parentNode;
    img.width = widthImg;
    img.height = widthImg;
    let imgArea = img.offsetWidth * img.offsetHeight;
    let screenArea = window.innerWidth * window.innerHeight;
    let i = Math.floor(screenArea / imgArea);
    cloneElementNTimes(i, bg, img);
}

(duplicateImgToBg())