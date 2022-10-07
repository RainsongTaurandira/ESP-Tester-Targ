const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const squareArray = ['red', 'yellow', 'green', 'blue'];
const pass = document.getElementById('pass');
const guess = document.querySelector('#guess');
const lights = document.querySelectorAll('.light');
const runTallySpot = document.querySelector('#runTally');
const guessTally = document.getElementById('guessTally');
const correctGuessTally = document.getElementById('correctGuessTally');
const score = document.getElementById('score');
var runTally = 0;
var guesses = 0;
var passTally = 0;
var correctGuesses = 0;
var scoreGuesses = 1;
var percentageScore = 0;

// record click on Pass button
pass.addEventListener('click', randomlySelectSquare);

// record clicks from the light squares, and identify which light square was clicked
function getClick() {
    for (let i=0; i < lights.length; i++) {
        lights[i].addEventListener("click", randomlySelectSquare);
     }
}
getClick();

// randomly select next light, after a square is clicked
// note which light square was selected by the RNG
// tally the clicks
// tally score to make "percentage of guesses that are correct"
function randomlySelectSquare(event) {
    let playerGuess = event.target.id;
    //console.log(playerGuess);
     let selectSquare = Math.floor(Math.random() * squareArray.length);
     let computerSelection = squareArray[selectSquare];
    guess.innerHTML = "The computer RNG selected " + computerSelection;


    runTally++;
    if (playerGuess === "pass") {
        passTally++;
    } else if (playerGuess === computerSelection) {
        guesses++;
        correctGuesses++;
    } else {
        guesses++;
    }

    scoreGuesses = correctGuesses/guesses;
    percentageScore = (scoreGuesses * 100).toFixed(2);
    //console.log(percentageScore);
    score.innerHTML = "Your current score (by percentage correct) is " + percentageScore + "%";
}

// determine P-score
// https://statisticsbyjim.com/hypothesis-testing/how-to-find-p-value/
function calcPScore() {

}

// commit scores to local storage
function updateLocalStorage() {

}

// ========================================================================
// ------------------  END JS ---------------------------------------------
// ========================================================================