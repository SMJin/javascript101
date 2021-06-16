'use strict';

const IMG_SIZE = 730;
const ITEM_COUNT = 5;
const gameField = document.querySelector('.game__field');
// getBoundingClientRect 를 사용하면 필드의 전체적인 사이즈와 포지션을 알 수 있다.
const fieldRect = gameField.getBoundingClientRect();
const playBtn = document.querySelector('.play__btn');
const stopBtn = document.querySelector('.stop__btn');
const timer = document.querySelector('.timer');
const score = document.querySelector('.game__score');

function init() {
    let repeat = 0;
    while (repeat < ITEM_COUNT) {
        createImg('./img/carrot.png', '50px', '50px', 'carrot');
        createImg('./img/bug.png', '50px', '50px', 'bug');
        repeat ++;
    }
}

function createImg(src, width, height, alt) {
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width - IMG_SIZE;
    const y2 = fieldRect.right - 1321;
    console.log("fieldRect : x="+x2+", y="+y2);
    
    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);
    img.setAttribute('width', width);
    img.setAttribute('height', height);

    img.style.position = 'absolute';
    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);
    console.log("left : " + x +", top : " + y);
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    gameField.appendChild(img);
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

playBtn.addEventListener('click', e => {
    console.log('play button 이 눌렸습니다 !!');
    init();
    timer.classList.remove('timer--hide');
    score.classList.remove('game__score--hide');
    playBtn.classList.add('play__btn--hide');
    stopBtn.classList.remove('stop__btn--hide');
});