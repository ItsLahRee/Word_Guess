//DEFINE VARIABLES
var words = [""]

//EMPTY VARIABLES TO STORE VALUES
var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

//COUNTER VARIABLES
var wins = 0;
var losses = 0;
var guessesRemaining = 9;

//FUNCTIONS


//START THE GAME FUNCTION

function Game() {
//generate random from words array
randomWord = words[Math.floor(Math.random() * words.length)];

//split word into seperate arrays, store in new array
lettersOfWord = randomWord.split("")

//store length of word in blanks
blanks = lettersOfWord.length;

//CREATE A LOOP TO GENERATE "_ FOR EACH LETTER IN ARRAY
for (var i = 0; i < blanks; i++) {
  blanksAndCorrect.push("_")
}

//SHOW THE "_" IN HTML
document.getElementById("currentword").innerHTML = " " + blanksAndCorrect.join(" ")

//CONSOLE.LOG OUTPUT
console.log(randomWord);
console.log(blanks);
console.log(blanksAndCorrect);
console.log(lettersOfWord);


}

//RESET FUNCTION
function reset() {
  guessesRemaining = 9;
  wrongGuess = [];
  blanksAndCorrect = [];
  Game()

}

//CHECK LETTERS/COMPARE FUNCTION
//USE IF/ELSE STATEMENT, TO SEE IF LETTER MATCHES WORD
function checkLetters(letter) {
  var letterInWord = false;
  //TRUE IF GENERATED RANDOMWORD IS EQUAL TO LETTER ENTERED
  for (var i=0; i < blanks; i++) {
    if (randomWord[i] == letter) {
      letterInWord = true;
    }
  }
}
//IF LETTER IN WORD IS FALSE
    if (letterInWord) {
        //LOOP OVER EACH LETTER TO SEE IF IT MATCHES THE WORD
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    //ELSE, PUSH INCORRECT GUESS INTO WRONG GUESSES & REDUCE REMAINING GUESSES
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);

//CHECK TO SEE IF THE PLAYER WON FUNCTION
function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    //IF WON, ALERT & RESET NEW ROUND
    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        reset()
        //DISPLAY WINS IN DOM
        document.getElementById("winstracker").innerHTML = " " + wins;

        //IF LOST, ALERT & RESET NEW ROUND 
    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "./assets/images/try-again.png"
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    //DISPLAY LOSSES AND GUESSES REMAINING 
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}

//EXECUTE CODE
//CALL TO START THE GAME
Game()

//CHECK FOR KEY UP, CONVERT TO LOWERCASE TO STORE IN GUESSES
document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    //CHECK TO SEE IF GUESS ENTERED IS EQUAL TO RANDOM WORD
    checkLetters(guesses);
    //PROCESS WINS & LOSSES 
    complete();
    //CONSOLE.LOG PLAYER GUESS 
    console.log(guesses);

    //DISPLAY/STORE INCORRECT LETTERS IN HTML
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}

