document.addEventListener('DOMContentLoader', () => {


const defaultImage = 'images/batman-logo',
maxFlip = 2,
cardsArray = [{
    name:'batman',
    img: 'images/batman-img'
},{
    name:'batman',
    img: 'images/batman-img'
},{
    name:'bane',
    img: 'images/bane-img'
},{
    name:'bane',
    img: 'images/bane-img'
},{
    name:'joker',
    img: 'images/joker-img'
},{
    name:'joker',
    img: 'images/joker-img'
},{
    name:'penguin',
    img: 'images/penguin-img'
},{
    name:'penguin',
    img: 'images/penguin-img'
},{
    name:'freeze',
    img: 'images/freeze-img'
},{
    name:'freeze',
    img: 'images/freeze-img'
},{
    name:'ivy',
    img: 'images/ivy-img'
},{
    name:'ivy',
    img: 'images/ivy-img'
},{
    name:'robin',
    img: 'images/robin-img'
},{
    name:'robin',
    img: 'images/robin-img'
},{
    name:'harley',
    img: 'images/harley-img'
},{
    name:'harley',
    img: 'images/harley-img'
}];

let gameCard = cardsArray;
let flipCount = 0;
let firstClick = 0;
let timeLeft;
let matchedCards = [];
let timerId;

document.getElementById('reset-btn').addEventListener('click', resetGame, false);


// timer function from stack overflow

function gameTimer(duration, display) {
        let timer = duration,
            minutes, seconds;

        timerId = setInterval(function() {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            display.textContent = minutes + ':' + seconds;

            if (timer-- <= 0) {
                loseGame(timer);
                timer = duration;
                clearTimeout(timerId);
            }
            // stop timer if game is won
            if (matchedCards.length === (cardsArray.length / 2)) {
                clearTimeout(timerId);
            }
        }, 1000);
    }

    // start timer on click

    let game = document.querySelector('container');
    game.onclick = (function() {
        firstClick++;
        if(parseInt(firstClick) < 2) {
            game.removeAttribute('onclick');
            timeLeft = 25 * 2,
            display = document.querySelector('#game-timer')
        }
    });

    function flipCount() {
        clickCounter++;
        let clickCounter = document.querySelector('#flip-counter');
        clickCounter.textContent = clickCounter;
    }




})