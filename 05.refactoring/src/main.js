'use strict';
import Field from "./field.js";
import PopUp from "./popup.js";

const GAME_DURATION_SEC = 5;
const CARROT_COUNT = 5;
const BUG_COUNT = 5;

const playBtn = document.querySelector('.play__btn');
const gameTimer = document.querySelector('.timer');
const gameScore = document.querySelector('.game__score');

const alertSound = new Audio('./sound/alert.wav');
const bgSound = new Audio('./sound/bg.mp3');
const winSound = new Audio('./sound/game_win.mp3');

let started = false;
let score = 0;
let timer = undefined;

const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener(() => {
    console.log('replay button 이 눌렸습니다 !!');
    playSound(bgSound);
    init();
    showTimerAndScore();
    startGameTimer();
    gameFinishBanner.hide();
    playBtn.classList.remove('play__btn--hide');
    showStopBtn();
    started = !started;
    console.log('모드 전환!');
    gameScore.innerHTML = CARROT_COUNT;
});

const gameField = new Field(CARROT_COUNT, BUG_COUNT);
gameField.setClickListener(onItemClick);

function onItemClick(item) {
    if (!started) {
        return;
    } else {
    if (item == 'carrot') {
        console.log("You clicked CARROT !!");
        score ++;
        gameScore.innerHTML = CARROT_COUNT - score;
        if (CARROT_COUNT - score == 0) {
            playSound(winSound);
            clearInterval(timer);
            showReplayPopUp("SUCCESS !!");
            started = !started;
            console.log('CHANGE MODE !');
            return;
        }
    } else if (item == 'bug') {
        console.log("You clicked BUG !!");
        clearInterval(timer);
        showReplayPopUp("fail...replay ?");
        started = !started;
        console.log('CHANGE MODE !');
    }
}
}

function init() {
    score = 0;
    gameScore.innerHTML = CARROT_COUNT;
    gameField.init();
}

playBtn.addEventListener('click', e => {
    if (!started) {
        console.log('play button 이 눌렸습니다 !!');
        init();
        showTimerAndScore();
        showStopBtn();
        startGameTimer();
        playSound(bgSound);
    } else {
        console.log('stop button 이 눌렸습니다 !!');
        clearInterval(timer);
        hiddenPlayBtn();
        showReplayPopUp("fail...replay ?");
    }
    started = !started;
    console.log('모드 전환!');
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

function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}

function stopSound(sound) {
    sound.pause();
}

function startGameTimer() {
    let remainingTimeSec = GAME_DURATION_SEC;
    updateGameTimer(remainingTimeSec);
    // 1초마다 갱신하다가 0초가 되면 return 된다.
    timer = setInterval(() => {
        if (remainingTimeSec <= 0) {
            clearInterval(timer);
            showReplayPopUp("fail...replay ?");
            started = !started;
            console.log('모드 전환!');
            playSound(alertSound);
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

function showReplayPopUp(text) {
    gameFinishBanner.showWithText(text);
    hiddenPlayBtn();
    stopSound(bgSound);
}