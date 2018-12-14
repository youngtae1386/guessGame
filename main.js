function refreshPage() {
    window.location.reload();
}



alert('Ready to play? "Guess Game"');


var computerChoices = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];

var wins = 0;
var losses = 0;
var numbGuesses = 10;
var guesses = [];
var compGuess = [];

var directionsText = document.getElementById("directions-text");

var numberOfGuesses = document.getElementById("numberofGuess-text");
var computerGuessText = document.getElementById("computerGuess-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessText = document.getElementById("guess-text");

document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerGuess =
        computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (userGuess === computerGuess) {
        wins++;
        numbGuesses = 9;
        guesses.push(userGuess);
        compGuess.push(computerGuess);
        guesses = [];
        compGuess = [];

    } else if (userGuess !== computerGuess) {
        numbGuesses--;
        guesses.push(userGuess);
        compGuess.push(computerGuess);
    }

    if (numbGuesses === 0) {
        losses++;
        numbGuesses = 9;
        guesses = [];
        compGuess = [];
        
    }

    directionsText.textContent = "";

    computerGuessText.textContent =
        "Computer guessed: " + compGuess.join([" ,"]);
    numberOfGuesses.textContent = "Guess Left: " + numbGuesses;

    winsText.textContent = "wins: " + wins;

    lossesText.textContent = "losses: " + losses;

    guessText.textContent = "You guessed: " + guesses.join([" ,"]);
};
