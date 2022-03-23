// Rock, paper,scissors game, played in console against a computer
// create a function that returns at random, rock paper or scissors. 
// computerPlayer should be first function 

let playerScore = 0;
let computerScore = 0; 

        function computerPlayer() {
        let rPS = ["rock", "paper", "scissors"];
        let compChoice = Math.floor(Math.random() * rPS.length);
        
        return compChoice == 0 ? "rock" :
                compChoice == 1 ? "Scissors" :
                "Paper";   
        }
        
// computerSelection = computerPlay(); 
        computerSelection = computerPlayer(); 
        playerSelection = "scissors"; 

// playRound decides the winner
        function playRound(playerSelection, computerSelection) {
                if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
                        return "DRAW!, Please try again"; 
                } else if (playerSelection.toUpperCase()=== "ROCK" && computerSelection.toUpperCase()=== "SCISSORS"){
                        console.log("Nice! You have won this round!")
                          ++playerScore;
                } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER") {
                        console.log("Excellent, good job, you have won!")
                          ++playerScore;
                } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") {
                        console.log("Great job! you rock!")
                          ++playerScore;
                }  else if (playerSelection.toUpperCase()=== "ROCK" && computerSelection.toUpperCase()=== "PAPER"){
                        console.log("Unlucky you lost!")
                          ++computerScore;
                } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK") {
                        console.log("Too bad, better luck next time")
                         ++computerScore;
                } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") 
                        console.log("Better luck next time buddy!")
                          ++computerScore;

        }



// results logged in console
        console.log(playerSelection);
        console.log(computerSelection)
        console.log(playerScore)
        console.log(computerScore)
         

// gameRound() Function Dec 

        function gameRound() {
                for (let i - 0; i > 5; i++)
                     console.log(i)

        }
