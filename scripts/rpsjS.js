// Rock, paper,scissors game, played in console against a computer
// create a function that returns at random, rock paper or scissors. 
// computerPlayer should be first function 


const rockOption = document.getElementById(`rockOption`); 
const scissorOption = document.getElementById(`scissorOption`); 
const paperOption = document.getElementById(`paperOption`);
const playerResult = document.getElementById(`playerTally`); 
const computerResult = document.getElementById(`computerTally`); 
const score = document.getElementById(`score`); 
const resetGame = document.getElementById(`resetGame`); 



let playerSelection= " ";  
let computerSelection = computerPlayer(); 
let playerScore = 0;
let computerScore = 0; 

        // Random computer selection.

function computerPlayer() {
        let rPS = ["ROCK", "PAPER", "SCISSORS"];
        let compChoice = Math.floor(Math.random() * rPS.length);
        return compChoice == 0 ? "ROCK" :
                compChoice == 1 ? "SCISSORS" :
                "PAPER";   
        };


 // playRound decides the winner
         function playRound(playerSelection, computerSelection) {
                if (playerSelection === computerSelection) {
                        return announcement_box.textContent = "You have both drawn! try again! ";
                } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS"){
                        announcement_box.textContent = "You have chosen well!, you won this round";
                        return playerScore++ ;
                } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
                        announcement_box.textContent = "You have chosen well!, you won this round";
                        return playerScore++;
                } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
                        announcement_box.textContent = "You have chosen well!, you won this round";
                        return playerScore++;
                }  else if (playerSelection === "ROCK" && computerSelection === "PAPER"){
                        announcement_box.textContent = "You have chosen badly!, you lost this round";
                        return computerScore++;
                } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
                        announcement_box.textContent = "You have badly well!, you lost this round";
                        return computerScore++;
                } else if (playerSelection  === "PAPER" && computerSelection === "SCISSORS") 
                        announcement_box.textContent = "You have chosen badly!, you lost this round";
                        return computerScore++;
        }


// gameRound plays the game and updates the DOM with the score. 

function gameRound() {
        computerSelection = computerPlayer();
        playRound(playerSelection, computerSelection);
        playerResult.textContent = playerScore; 
        computerResult.textContent = computerScore;
         decision(playerScore, computerScore);

};

function toggleHide () {
        score.classList.toggle(`hidden`);
        scissorOption.classList.toggle(`hidden`);
        paperOption.classList.toggle(`hidden`);
        rockOption.classList.toggle(`hidden`);
};



function decision (playerScore, computerScore) {
        if (playerScore === 5) {
                toggleHide();
                return announcement_box.textContent ="Well done, you have survived this game"; 
        } else if( computerScore ===5) {
                toggleHide();
                return announcement_box.textContent="Unlucky, you have been thrown back into jail."
        } else return; 
}


function reset () {
        score.classList.remove(`hidden`); 
        scissorOption.classList.remove(`hidden`);
        paperOption.classList.remove(`hidden`);
        rockOption.classList.remove(`hidden`);
        playerScore = 0; 
        computerScore= 0; 
        playerResult.textContent = playerScore; 
        computerResult.textContent = computerScore;
}




rockOption.addEventListener(`click`, () => {
        playerSelection = "ROCK"; 
        gameRound()
});
 

paperOption.addEventListener(`click`, () => {
        playerSelection = "PAPER";
        gameRound() 
});


scissorOption.addEventListener(`click`, () => {
        playerSelection = "SCISSORS"; 
        gameRound()
});

resetGame.addEventListener(`click`, () => {
        reset();
});




        