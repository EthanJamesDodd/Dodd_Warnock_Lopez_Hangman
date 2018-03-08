// JavaScript Document

(() => {
  console.log('hangman script fired');

  // create an array to hold the words to be guessed
  const wordsArray = ["blue", "red", "white", "orange", "purple", "yellow", "green"];

  // set up a variable stack
  let currentWord = null;
      wordHint = document.querySelector('.hint-string'),
      guessInput = document.querySelector('.user-guess'),
      wrongGuesses = 0, //Count the # of wrong guesses.
      correctGuesses = 0, //Count the # of correct guesses.
      resetScreen = document.querySelector('.reset-screen'),
      resetButton = resetScreen.querySelector('button'),
      wrongLetterList = document.querySelector('.wrong-letters'),
      wrongLetterArray = [];

  function resetGame(){
    let gamePieces = Array.from(document.querySelectorAll('.show-piece'));
    gamePieces.forEach(piece => piece.classList.remove('show-piece'));
    wrongGuesses = 0;
    correctGuesses = 0;
    wrongLetterList.textContent = ""

    init();
  }

  function init() {
    currentWord = wordsArray[Math.floor(Math.random()*(wordsArray.length))]; //Math.floor rounds down, Math.random does a random number eg// 0.1, 0.2, 0.3, 0.4, 0.5,
    console.log(`Guess this word: ${currentWord}. It's at ${wordsArray.indexOf(currentWord)}`); // ${} concatinates what would have been ()"Guess this word" + currentWord). Inputs a variable into a string
                                                                                                // wordsArray.indexOf(currentWord) finds index # of currentWord in the array wordsArray
    wordHint.textContent = currentWord.split("").map(letter => letter = "__").join(" ")//wordHint.textContent finds the content of the slector with the class .wordhint
    console.log(wordHint)                                                              // .split turns letters into an array, .map turns current letter into __, .join makes an array text
  }

  function showResetScreen(message){
    // user has lost or won, reset the stuff and start over
    console.log('Game Reset.');
    resetScreen.classList.add('show-piece');

    resetScreen.querySelector('h3').textContent = message;
  }

  function takeGuess() {

    if (this.value == "" || this.value.length < 1) {
      return;
    }

    let currentGuess = this.value; // this is the current letter in the input

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

      if(wrongGuesses >=5){ // **
        showResetScreen('You Lose!');
        document.querySelector('#face').classList.add('show-piece');
      } else {
        // increment wrongGuesses
        wrongGuesses++;
      } //End If **

    } else {
      // winning path; If statement on line 43
      let matchAgainst = currentWord.split("");
      var hintString = wordHint.textContent.split(" ")

      matchAgainst.forEach((letter, index) => {
        if(letter === currentGuess){
          hintString[index] = currentGuess;
          correctGuesses++; //Add correct guesses.
        }
      });

      wordHint.textContent = ""; //Make the hint on the screen be empty
      wordHint.textContent = hintString.join(" "); //Add Hintstring to Wordhint

      if(correctGuesses === currentWord.length){
        showResetScreen('You Win!');
      }
    }

  }



  //Event handling at the bottom
  // initButton.addEventListener('click', init);
  init();
  guessInput.addEventListener('keyup', takeGuess)
  resetButton.addEventListener('click', resetGame)

})();
