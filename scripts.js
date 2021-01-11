function cloneElementNTimes(n, parent, el) {
    for (let index = 0; index < n; index++) {
        el.style['animation-delay'] = getRandomArbitrary(-16, 0) + "s"
        parent.appendChild(el.cloneNode());
    }
}

function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function checkIfMobileAspectRatio() {
    let ratio = window.screen.width / window.screen.height;
    return (ratio < 1);
}

function bindClicks() {
    document.getElementsByClassName("projects-btn")[0].addEventListener('click', () => {
        document.getElementById("projects").scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    })
}

function duplicateImgToBg() {
    let img = document.getElementsByClassName("repeat-bg")[0];
    let widthImg = 0;
    if (checkIfMobileAspectRatio()) {
        widthImg = window.screen.width / 3;
    } else {
        widthImg = (window.screen.width / 12) - 1;
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
window.onload = bindClicks();