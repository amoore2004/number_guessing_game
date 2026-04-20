/*    Guess The Number project!
First full-web project. (incorporates HTML, JavaScript, and CSS.). This is intended only for practice and not   for real-world use.
Date started: 15:52 April 5, 2026

The structure of this script and additional comments should be used for later reference when working on other projects. When coding structure is improved, this script will be edited after it is completed.
*/

/*          Common Mistakes Made
        Code after the return statement. A function will end when return has been called.

*/

// Beginning Variables
let input;
let guesses = 20;
const MAX_TARGET_NUMBER = 50;
let randomNumber = Math.floor(Math.random() * MAX_TARGET_NUMBER);
let iliketurtles;
const ANNOUNCER_TEXT = document.getElementById("announce");
const BEGINNING_GUESSES = 20;
const SUBMIT_BUTTON = document.getElementById("btn");
const GUESS_COUNTER = document.getElementById("guess_tag");
const TEXT_FIELD = document.getElementById("text_input");
const DEBUG_FIELD = document.getElementById("debug");

// Game Events
    // every action is individually divided into functions for cleaner coding.
    
function checkNumber(guessedNumber) {
    if (guessedNumber === randomNumber) {
        return [true, 100];
    }
    if (guessedNumber < randomNumber) {
        return [false, 150];
    }
    if guessedNumber > randomNumber) {
        return [false, 200];
    }
    return [false, 0];
}

function announce(numberOfGuesses, guessedNumber) {
    // Default messages. 
    if (guesses === BEGINNING_GUESSES) {
        return "Let the games begin!";
    }
    if (guesses === 15) {
        if (checkNumber()[0] == true) {
            SUBMIT_BUTTON.removeEventListener("click", onGuessButtonClick);
            return "Congratulations! You won!";
        }
            
        }
        return "You are half way through your guesses. Be wise.";
    if (guesses === 0) {
        SUBMIT_BUTTON.removeEventListener("click", onGuessButtonClick);
        return "Ruh roh! You lost the game.";
    }
    if (guessedNumber > MAX_TARGET_NUMBER) {
        return `Do not exceed ${MAX_TARGET_NUMBER}.`
    }
    // Messages returned when guess is not correct, and default messages are not thrown.
    if (guessedNumber > randomNumber) {
        return "Your guess is above the correct number. Please guess lower.";
    }
    if (guessedNumber < randomNumber) {
        return "Your guess is below the correct number. Please guess higher.";
    }
    if (checkNumber()[0] == true) {
        SUBMIT_BUTTON.removeEventListener("click", onGuessButtonClick);
        return "Congratulations! You won!";
    }
    return "ERR !> All False Statements.";
}

function onGuessButtonClick() {
    iliketurtles = Number(TEXT_FIELD.value);
    GUESS_COUNTER.textContent = `Guesses: ${guesses}`;
    ANNOUNCER_TEXT.textContent = announce(guesses, iliketurtles);
    
    /*if (TEXT_FIELD.textContent === randomNumber) {
        announcerText.textContent = announce(guesses, true);
    
    }*/
}
SUBMIT_BUTTON.addEventListener("click", onGuessButtonClick);

// Initialization
GUESS_COUNTER.textContent = `Guesses: ${guesses}`;
ANNOUNCER_TEXT.textContent = "Let the games begin!";
DEBUG_FIELD.textContent = `Your random number is: ${randomNumber}`;
