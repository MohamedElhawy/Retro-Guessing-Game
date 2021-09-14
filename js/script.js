// activate strict mode

"use strict";




// capturing dom objects

const gameDisplayText = document.querySelector(".game-display-text");
const gameMechanicsInput = document.querySelector(".game-mechanics-input");
const gameMechanicsHint = document.querySelector(".game-mechanics-hint");
const gameMechanicsScore = document.querySelector(".game-mechanics-score span");
const gameMechanicsHighscore = document.querySelector(".game-mechanics-highscore span");
const gameMechanicsBtn = document.querySelector(".game-mechanics-btn");
const pageBody = document.querySelector("body");
const headerText = document.querySelector(".header-text");
const headerBtn = document.querySelector(".header-btn");



// on page load
// create random numbers
let randNumber;
generateRandNumber();


function generateRandNumber ()
{
    randNumber = Math.trunc(Math.random() * 20) + 1;
}


// saving the score value
let score = 5;
let highscore = 0;

gameMechanicsScore.textContent = score;
gameMechanicsHighscore.textContent = highscore;





// event handler "check button"
function checkBtnClicked ()
{

    let secretNumber = randNumber;

    let guessNumber = Number(gameMechanicsInput.value);


    // making sure the guessed number is a number and between 1 and 20
    if ( guessNumber === NaN || guessNumber < 1 || guessNumber > 20 )
    {
        alert("Please enter a number from (1 - 20).");
        gameMechanicsInput.value = "";
    }
    else
    {
        if ( guessNumber === secretNumber )
        {
            gameDisplayText.textContent = secretNumber;
            gameMechanicsHint.textContent = "🥂 Correct Guess!";
            pageBody.style.background = "#e0ffae";
            headerText.style.color= "#679436";
    
            // save high score
            if ( score > highscore )
            {
                highscore = score;
                gameMechanicsHighscore.textContent = highscore;
            }
        }
        else if ( guessNumber > secretNumber )
        {
            gameMechanicsHint.textContent = "😲 Too High!";
            score--;
            gameMechanicsScore.textContent = score;
    
            // when score decrease to 0
            if (score === 0)
            {
                gameMechanicsHint.textContent = "💩 You Lost!";
                gameDisplayText.textContent = secretNumber;
            }
        }
        else if ( guessNumber < secretNumber )
        {
            gameMechanicsHint.textContent = "😒 Too Low!";
            score--;
            gameMechanicsScore.textContent = score;
    
            // when score decrease to 0
            if (score === 0)
            {
                gameMechanicsHint.textContent = "💩 You Lost!";
                gameDisplayText.textContent = secretNumber;
            }
        }
    }
    
}


gameMechanicsBtn.addEventListener("click" , checkBtnClicked);



// event handler "again button"
function againBtnClicked ()
{
    pageBody.style.background = "#679436";
    headerText.style.color = "#fff";
    gameDisplayText.textContent = "?";
    generateRandNumber();
    gameMechanicsInput.value = "";
    gameMechanicsHint.textContent = "Start Guessing....";
    score = 5;
    gameMechanicsScore.textContent = score;
}



headerBtn.addEventListener("click" , againBtnClicked );