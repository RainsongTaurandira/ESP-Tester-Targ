
const squareArray = ['red', 'yellow', 'green', 'blue'];
const pass = document.getElementById('pass');
const guess = document.querySelector('#guess');
const lights = document.querySelectorAll('.light');
const redLight = document.getElementById('red');
const yellowLight = document.getElementById('yellow');
const greenLight = document.getElementById('green');
const blueLight = document.getElementById('blue');
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
    let selectSquare = Math.floor(Math.random() * squareArray.length);
    let computerSelection = squareArray[selectSquare];

    let computerLight = document.getElementById(`${ computerSelection }`);
    computerLight.classList.add("target");

    guess.innerHTML = "The computer RNG selected " + computerSelection;
    // computerSelection will be red, blue, green or yellow (not the index number)

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
    
    score.innerHTML = "Your current score (by percentage correct) is " + percentageScore + "%";
    guessTally.innerHTML = "You've made " + guesses + " guesses so far this round,";
    correctGuessTally.innerHTML = "And " + correctGuesses + " have been correct."

    // reset the light-square back to original appearance
    setTimeout(() => {
        computerLight.classList.remove("target");
      }, "1000")
}

// determine P-score
// https://statisticsbyjim.com/hypothesis-testing/how-to-find-p-value/
// function calcPScore() {

// }

// commit scores to local storage
// function updateLocalStorage() {
//     localStorage.setItem('highScore', 'percentageScore');
// }
// const highScore = localStorage.getItem('highScore');


