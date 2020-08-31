function cloneElementNTimes(n, parent, el){
    for (let index = 0; index < n; index++) {
        el.style['animation-delay'] = getRandomArbitrary(-16, 0) + "s"
        parent.appendChild(el.cloneNode());
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function duplicateImgToBg(){
    let img = document.getElementsByClassName("repeat-bg")[0];
    let widthImg = document.documentElement.clientWidth/12;
    let bg = img.parentNode;
    console.log(widthImg);
    img.width = widthImg;
    img.height = widthImg;
    let imgArea = img.offsetWidth * img.offsetHeight;
    let screenArea = window.innerWidth * window.innerHeight;
    let i = Math.floor(screenArea / imgArea);
    cloneElementNTimes(i, bg, img);
}

(duplicateImgToBg())