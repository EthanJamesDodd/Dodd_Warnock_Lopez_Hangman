// JavaScript Document

(() => {
  console.log('hangman script fired');

  // create an array to hold the words to be guessed
  const wordsArray = ["Blue", "Red", "White", "Orange", "Purple", "Yellow", "Green"];

  // set up a variable stack
  let currentWord = null;
      wordHint = document.querySelector('.hint-string'),
      guessInput = document.querySelector('.user-guess'),
      wrongGuesses = 0, //Count the # of wrong guesses.
      resetScreen = document.querySelector('.reset-screen'),
      resetButton = resetScreen.querySelector('button'),
      wrongLetterList = document.querySelector('.wrong-letters'),
      wrongLetterArray = [];

  function resetGame(){
    let gamePieces = Array.from(document.querySelectorAll('.show-piece'));
    gamePieces.forEach(piece => piece.classList.remove('show-piece'));
    wrongGuesses = 0;

    init();
  }

  function init() {
    currentWord = wordsArray[Math.floor(Math.random()*(wordsArray.length))]; //Math.floor rounds down, Math.random does a random number eg// 0.1, 0.2, 0.3, 0.4, 0.5,
    console.log(`Guess this word: ${currentWord}. It's at ${wordsArray.indexOf(currentWord)}`); // ${} concatinates what would have been ()"Guess this word" + currentWord). Inputs a variable into a string
                                                                                                // wordsArray.indexOf(currentWord) finds index # of currentWord in the array wordsArray
    wordHint.textContent = currentWord.split("").map(letter => letter = "__").join(" ")//wordHint.textContent finds the content of the slector with the class .wordhint
    console.log(wordHint)                                                              // .split turns letters into an array, .map turns current letter into __, .join makes an array text
  }

  function showResetScreen(){
    // user has lost, reset the stuff and start over
    console.log('you lose, loser!');
    resetScreen.classList.add('show-piece');
  }

  function takeGuess() {

    if (this.value == "" || this.value.length < 1) {
      return;
    }

    console.log(this.value);
  // set up the win lose paths (if / else)
  // compare the letter guessed with the word(wordsArray) to see if there is a match
    if (!currentWord.includes(this.value)){
      // losing path
      console.log('Invalid Letter!');
      //Put wrong letters into an array
      wrongLetterArray.push(this.value);
      //Make the array a string, put it into a <p> tag
      wrongLetterList.textContent = wrongLetterArray.join(" ");
      document.querySelector(`.wrong${wrongGuesses}`).classList.add('show-piece');

      if(wrongGuesses >=5){
        showResetScreen();
      } else {
        // increment wrongGuesses
        wrongGuesses++;
      }

    } else {
      // winning path
    }

  }



  //Event handling at the bottom
  // initButton.addEventListener('click', init);
  init();
  guessInput.addEventListener('keyup', takeGuess)
  resetButton.addEventListener('click', resetGame)

})();
