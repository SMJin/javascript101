'use strict';

const carrotSound = new Audio('./sound/carrot_pull.mp3');
const bugSound = new Audio('./sound/bug_pull.mp3');
const IMG_SIZE = 50;

export default class Field {
    constructor(carrotCount, bugCount) {
        this.carrotCount = carrotCount;
        this.bugCount = bugCount;
        this.gameField = document.querySelector('.game__field');
        this.fieldRect = this.gameField.getBoundingClientRect();
        this.gameField.addEventListener('click', () => {
            this.onClick(event);
        });
    }

    init() {
        this.gameField.innerHTML = '';
        console.log("fieldRect : width=" + this.fieldRect.width 
                + ", height=" + this.fieldRect.height);

        let repeat;
        for (repeat = 0; repeat < this.carrotCount; repeat ++) {
            this._createImg('./img/carrot.png', `${IMG_SIZE}px`, `${IMG_SIZE}px`, 'carrot');
        }
        for (repeat = 0; repeat < this.bugCount; repeat ++) {
            this._createImg('./img/bug.png', `${IMG_SIZE}px`, `${IMG_SIZE}px`, 'bug');
        }
        
    }

    setClickListener(onItemClick) {
        this.onItemClicked = onItemClick;
    }

    onClick(event) {
        const target = event.target;
        if (target.matches('.carrot')) {
            target.remove();
            playSound(carrotSound);
            this.onItemClicked('carrot');
        } 
        else if (target.matches('.bug')) {
            target.remove();
            playSound(bugSound);
            this.onItemClicked('bug');
        }
    }

    _createImg(src, width, height, alt) {
        const x1 = 0;
        const y1 = 0;
        const x2 = this.fieldRect.width - IMG_SIZE;
        const y2 = this.fieldRect.height - IMG_SIZE;

        const img = document.createElement('img');
        img.setAttribute('src', src);
        img.setAttribute('alt', alt);
        img.setAttribute('width', width);
        img.setAttribute('height', height);
        img.setAttribute('class', alt);

        img.style.position = 'absolute';
        const x = randomNumber(x1, x2);
        const y = randomNumber(y1, y2);

        img.style.left = `${x}px`;
        img.style.top = `${y}px`;

        this.gameField.appendChild(img);
    }
}

// static function that exists outside the class
function randomNumber(min, max) {
    return Math.random() * (max-min) + min;
}

// static function that exists outside the class
function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}