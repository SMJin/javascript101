const gameField = document.querySelector('.game__field');
const playBtn = document.querySelector('.play__btn');

function init() {
    let repeat = 0;
    while (repeat < 10) {
        createImg('./img/carrot.png', '50px', '50px', 'carrot');
        createImg('./img/bug.png', '50px', '50px', 'bug');
        repeat ++;
    }
}

function createImg(src, width, height, alt) {
    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);
    img.setAttribute('width', width);
    img.setAttribute('height', height);

    img.style.position = 'absolute';
    img.style.top = gameField.clientHeight * (Math.random() + 1) + 'px';
    img.style.left = gameField.clientWidth * Math.random() + 'px';

    gameField.appendChild(img);
}

playBtn.addEventListener('click', e => {
    console.log('play button 이 눌렸습니다 !!');
    init();
});