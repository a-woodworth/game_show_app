const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGameButton = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const phrases = 
  ['curiosity killed the cat',
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
  if (e.target.textContent === 'Start Game') {
    overlay.style.display = 'none';
  }
});

// Start game
const phraseArray = getRandomPhraseArray(phrases);
addPhraseToDisplay(phraseArray);
console.log(phraseArray);

// Get random phrase from phrases array
function getRandomPhraseArray(arr) {
  randomPhrase = arr[Math.floor(Math.random() * arr.length)];
  return randomPhrase;
}

// Setup game display
function addPhraseToDisplay(arr) {
  gameDisplay = arr;
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
