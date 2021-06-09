const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGameButton = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const phrases = 
  ['when pigs fly',
  'wild goose chase',
  'break a leg',
  'raining cats and dogs',
  'piece of cake'
  ];
const ul = document.querySelector('#phrase ul');


// Track number of wrong guesses. Player loses game after guessing wrong 5 times.
let missed = 0; 

// Hide start game screen overlay
startGameButton.style.cursor = 'pointer';
startGameButton.addEventListener('click', (e) => {
  overlay.style.display = 'none';
});

// Start game
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

keyboard.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const letterClicked = e.target;

    letterClicked.classList.add('chosen');
    letterClicked.setAttribute('disabled', '');

    const match = checkLetter(letterClicked);

    if (match === null) {
      missed++;

      const lives= document.querySelectorAll('.tries img');
      const lostLife = 5 - missed;

      lives[lostLife].setAttribute('src', 'images/lostHeart.png');
      console.log(lives);
    }
    // checkWin(); need to still write this
  }
});

// Get random phrase from phrases array
function getRandomPhraseAsArray(arr) {
  const randomPhrase = arr[Math.floor(Math.random() * arr.length)].split('');
  return randomPhrase;
}

// Setup game display
function addPhraseToDisplay(arr) {
  const gameDisplay = arr;
  for(let i = 0; i < gameDisplay.length; i += 1) {
      let li = document.createElement('li');
      li.textContent = gameDisplay[i];
      ul.appendChild(li);
      if (gameDisplay[i] != ' ') {
          li.className = 'letter';
      } else {
          li.className = 'space';
      }
  }
}

// Check if player's selection matches letter in phrase
function checkLetter(button) {
  const letters = document.querySelectorAll('.letter');
  let letterFound = null;
  for (let i = 0; i < letters.length; i++) {
    if (button.textContent === letters[i].textContent) {
      letters[i].classList.add('show');
      letters[i].style.transition = '1s ease-in';
      letterFound = true;
    }
  } return letterFound;
}

// Check if player has won or lost game
function checkWin() {

}