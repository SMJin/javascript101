'use strict';

export default class PopUp {
    constructor() {
        this.replayPopUp = document.querySelector('.pop-up');
        this.replayBtn = document.querySelector('.replay__btn');
        this.popupMessage = document.querySelector('.pop-up__message');
        this.replayBtn.addEventListener('click', () => {
            this.onClick && this.onClick();
            this.hide();
        });
    }

    setClickListener(onClick) {
        this.onClick = onClick;
    }

    showWithText(text) {
        this.popupMessage.innerHTML = text;
        this.replayPopUp.classList.remove('pop-up--hide');
    }

    hide() {
        this.replayPopUp.classList.add('pop-up--hide');
    }

}