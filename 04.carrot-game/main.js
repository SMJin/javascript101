'use strict';

const IMG_SIZE = 50;
const ITEM_COUNT = 5;
const GAME_DURATION_SEC = 5;

const gameField = document.querySelector('.game__field');
// getBoundingClientRect 를 사용하면 필드의 전체적인 사이즈와 포지션을 알 수 있다.
let fieldRect = undefined;
window.onload = function(){
    fieldRect = gameField.getBoundingClientRect();
    console.log("fieldRect : width="+fieldRect.width+", height="+fieldRect.height);
}
const playBtn = document.querySelector('.play__btn');
const gameTimer = document.querySelector('.timer');
const gameScore = document.querySelector('.game__score');
const replayPopUp = document.querySelector('.pop-up');
const replayBtn = document.querySelector('.replay__btn');

let started = false;
let score = 0;
let timer = undefined;

playBtn.addEventListener('click', e => {
    if (!started) {
        console.log('play button 이 눌렸습니다 !!');
        init();
        showTimerAndScore();
        showStopBtn();
        startGameTimer();
    } else {
        if (document.getElementsByClassName('pop-up--hide').length) {
            console.log('stop button 이 눌렸습니다 !!');
            clearInterval(timer);
            hiddenPlayBtn();
            showReplayPopUp();
        }
    }
    started = !started;
});

function showTimerAndScore() {
    gameTimer.style.visibility = 'visible';
    gameScore.style.visibility = 'visible';
}

function hiddenPlayBtn(){
    playBtn.classList.add('play__btn--hide');
}

function showStopBtn() {
    const icon = playBtn.querySelector('.fas');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
}

replayBtn.addEventListener('click', e => {
    init();
    showTimerAndScore();
    startGameTimer();
    replayPopUp.classList.add('pop-up--hide');
    playBtn.classList.remove('play__btn--hide');
    showStopBtn();
    started = !started;
});

function init() {
    gameScore.innerHTML = ITEM_COUNT;
    gameField.innerHTML = '';
    
    let repeat = 0;
    while (repeat < ITEM_COUNT) {
        createImg('./img/carrot.png', `${IMG_SIZE}px`, `${IMG_SIZE}px`, 'carrot');
        createImg('./img/bug.png', `${IMG_SIZE}px`, `${IMG_SIZE}px`, 'bug');
        repeat ++;
    }
}

function createImg(src, width, height, alt) {
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width - IMG_SIZE;
    const y2 = fieldRect.height - IMG_SIZE;
    
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

function startGameTimer() {
    let remainingTimeSec = GAME_DURATION_SEC;
    updateGameTimer(remainingTimeSec);
    // 1초마다 갱신하다가 0초가 되면 return 된다.
    timer = setInterval(() => {
        if (remainingTimeSec <= 0) {
            clearInterval(timer);
            showReplayPopUp();
            return;
        }
        updateGameTimer(-- remainingTimeSec);
    }, 1000);
}

function updateGameTimer(time){
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    gameTimer.innerText = `${minutes}:${seconds}`;
}

function showReplayPopUp() {
    replayPopUp.classList.remove('pop-up--hide');
    hiddenPlayBtn();
    clearInterval(timer);
}