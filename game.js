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

let gameCards = cardsArray,
        flipCounter = 0,
        firstClick = 0,
        matchedCards = [],
        timeRemaining,
        currentName = '',
        clickCounter = 98,
        previousImgId = 0,
        timerId;


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
        let clickCount = document.querySelector('#flip-counter');
        clickCount.textContent = clickCounter;
    }

    function shuffleCards(array) {
  var shuffledCards = array.length,
   t, i;

  // While there remain elements to shuffle…
  while (shuffledCards > 0) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * shuffledCards);
    shuffledCards--;

    // And swap it with the current element.
    t = array[shuffledCards];
    array[shuffledCards] = array[i];
    array[i] = t;
  }

  return array;
}

function createBoard(gameCards){
    const grid = document.getElementById('grid');

    let id = 1;
    gameCards.array.forEach(element => {
        let card = document.createElement('img');
        card.setAttribute('id', id);
        card.setAttribute('src', defaultImage);
        card.setAttribute('data-name', element.name);
        card.setAttribute('data-path', element.img);
        card.classList.add('card');
        card.onclick = function() {
            if(flipCounter < 2) {
                flipCard(this);
                flipCount();
            }
        };

        grid.appendChild(card);
        id++;
    });
}

shuffleCards(gameCards);
createBoard(gameCards);

function disableCards(card) {
    card.classList.add('disable-card');
    card.src = card.getAttribute('data-path');
    setTimeout(checkForMatch(card), 500);
}

function checkForMatch() {
    card.src = card.getAttribute('data-path');
    let cardName = card.getAttribute('data-name');

    let currentImgId = card.getAttribute('id');
    flipCounter++;

    if(parseInt(flipCounter) === 1) {
        disableCards(card);
        currentName = cardName;
        previousImgId = card.getAttribute('id');
        return;
    } else if (cardName === currentName) {
        disableCards(card);
        flipCounter = 0;
        currentName = '';
        matchedCards.push(card);
    } else if (flipCounter === maxFlip && cardName !== currentName) {
        timeoutID = window.setTimeout(function() {
            unFlip(previousImgId, currentImgId);
            flipCounter = 0,
            currentName = '';
        }, 1000);
    }
}



})