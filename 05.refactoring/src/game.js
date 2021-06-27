'use strict';
import * as sound from "./sound.js";
import { Field, ImgType } from "./field.js";

export const State = Object.freeze({
    win: 'win',
    fail: 'fail',
    cancel: 'cancel',
});

export class GameBuilder {
    withGameDuration(duration) {
        this.gameDuration = duration;
        return this;
    }

    withCarrotCount(num) {
        this.carrotCount = num;
        return this;
    }

    withBugCount(num) {
        this.bugCount = num;
        return this;
    }

    build() {
        console.log(this);
        return new Game(
            this.gameDuration,
            this.carrotCount,
            this.bugCount
        );
    }
}

class Game {
    constructor(gameDuration, carrotCount, bugCount) {
        this.gameDuration = gameDuration;
        this.carrotCount = carrotCount;
        this.bugCount = bugCount;

        this.started = false;
        this.score = 0;
        this.timer = undefined;
        
        this.playBtn = document.querySelector('.play__btn');
        this.gameTimer = document.querySelector('.timer');
        this.gameScore = document.querySelector('.game__score');
        this.playBtn.addEventListener('click', () => {
            if (this.started) {
                this.stop();
            } else {
                this.init();
            }
        });

        this.gameField = new Field(carrotCount, bugCount);
        this.gameField.setClickListener(this.onItemClick);
    }

    init() {
        console.log('play button is clicked !!');
        this.start();
    }

    start() {
        this.score = 0;
        this.gameScore.innerHTML = this.carrotCount;
        this.gameField.init();
        this.showTimerAndScore();
        this.startGameTimer();
        this.hiddenPlayBtn();
        this.showStopBtn();
        sound.playBackground();
        this.changeGameMode();
    }

    stop() {
        console.log('stop button is clicked !!');
        this.finish();
        this.onGameStop(State.cancel);
        sound.playalert();
    }

    finish() {
        this.stopGameTimer();
        this.changeGameMode();
        this.hiddenPlayBtn();
        sound.stopBackground();
    }

    setGameStopListener(onGameStop){
        this.onGameStop = onGameStop;
    }

    onItemClick = item => {
        if (!this.started) {
            return;
        } else {
            if (item == ImgType.carrot) {
                console.log("You clicked CARROT !!");
                this.score ++;
                if (this.updateScoreBoard() == 0) {
                    sound.playWin();
                    this.finish();
                    this.onGameStop(State.win);
                    return;
                }
            } else if (item == ImgType.bug) {
                console.log("You clicked BUG !!");
                this.finish();
                this.onGameStop(State.fail);
            }
        }
    };

    updateScoreBoard() {
        this.gameScore.innerHTML = this.carrotCount - this.score;
        return this.carrotCount - this.score;
    }

    startGameTimer() {
        let remainingTimeSec = this.gameDuration;
        this._updateGameTimer(remainingTimeSec);
        // renews every seconds and returns when 0 second.
        this.timer = setInterval(() => {
            if (remainingTimeSec <= 0) {
                this.finish();
                this.onGameStop(State.fail);
                sound.playalert();
                return;
            }
            this._updateGameTimer(-- remainingTimeSec);
        }, 1000);
    }

    showStopBtn() {
        this.playBtn.classList.remove('play__btn--hide');
        const icon = this.playBtn.querySelector('.fas');
        icon.classList.add('fa-stop');
        icon.classList.remove('fa-play');
    }

    hiddenPlayBtn() {
        this.playBtn.classList.add('play__btn--hide');
    }

    showTimerAndScore() {
        this.gameTimer.style.visibility = 'visible';
        this.gameScore.style.visibility = 'visible';
    }

    changeGameMode() {
        this.started = !this.started;
        console.log('CHANGE MODE !');
    }

    stopGameTimer() {
        clearInterval(this.timer);
    }

    _updateGameTimer(time) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        this.gameTimer.innerText = `${minutes}:${seconds}`;
        console.log(this.gameTimer.innerText);
    }
}