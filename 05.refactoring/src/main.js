'use strict';
import PopUp from "./popup.js";
import Game from "./game.js";

const GAME_DURATION_SEC = 5;
const CARROT_COUNT = 5;
const BUG_COUNT = 5;

const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener(() => {
    console.log('replay button is clicked !!');
    game.init();
});

const game = new Game(GAME_DURATION_SEC, CARROT_COUNT, BUG_COUNT);
game.setGameStopListener((state) => {
    let message;
    switch (state) {
        case 'win':
            message = 'SUCCESS !!';
            break;
        case 'fail':
            message = 'fail ... replay ?';
            break;
        default:
            throw new Error('not valid state');
    }
    gameFinishBanner.showWithText(message);
});