'use strict';
import PopUp from "./popup.js";
import GameBuilder from "./game.js";

const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener(() => {
    console.log('replay button is clicked !!');
    game.init();
});

const game = new GameBuilder()
    .withGameDuration(5)
    .withCarrotCount(5)
    .withBugCount(5)
    .build();

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