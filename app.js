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

// Track number of wrong guesses. Player loses game after guessing wrong 5 times.
let missed = 0; 

// Hide start game screen overlay
startGameButton.addEventListener('click', (e) => {
  if (e.target.textContent === 'Start Game') {
    overlay.style.display = 'none';
  }
});

// Get random phrase from phrases array
function getRandomPhraseArray(arr) {
  randomPhrase = arr[Math.floor(Math.random() * arr.length)];
  return randomPhrase;
}
