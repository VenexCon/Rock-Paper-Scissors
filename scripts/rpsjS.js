// Rock, paper,scissors game, played in console against a computer
// create a function that returns at random, rock paper or scissors. 
// computerPlayer should be first function 



        function computerPlayer() {
        let rPS = ["ROCK", "PAPER", "SCISSORS"];
        let compChoice = Math.floor(Math.random() * rPS.length);
        
        return compChoice == 0 ? "ROCK" :
                compChoice == 1 ? "SCISSORS" :
                "PAPER";   
        }
        
// computerSelection = computerPlay(); 
        computerSelection = computerPlayer(); 
        playerSelection = prompt(); 

// playRound decides the winner
        function playRound(playerSelection, computerSelection) {
                if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
                        console.log("DRAW!, Please try again");
                        return null; 
                } else if (playerSelection.toUpperCase()=== "ROCK" && computerSelection.toUpperCase()=== "SCISSORS"){
                        console.log("Nice! You have won this round!")
                        return true;
                } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER") {
                        console.log("Excellent, good job, you have won!")
                        return true;
                } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") {
                        console.log("Great job! you rock!")
                        return true;
                }  else if (playerSelection.toUpperCase()=== "ROCK" && computerSelection.toUpperCase()=== "PAPER"){
                        console.log("Unlucky you lost!")
                        return false;
                } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK") {
                        console.log("Too bad, better luck next time")
                        return false;;
                } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") 
                        console.log("Better luck next time buddy!")
                        return false;

}
               



// results logged in console
       // console.log(playerSelection);
        //console.log(computerSelection)
        //console.log(playerScore)
        //console.log(computerScore)
         

// gameRound() Function Dec 
let playerScore = 0;
let computerScore = 0; 
let drawCounter = 0; 


        function gameRound() {
                for (let i = 0; i<5; i++){
                        console.log(playRound(playerSelection, computerPlayer()));
                } if (true) {
                        playerScore++
                } else if (false){
                        computerScore++
                } else {
                        drawCounter++
                }
        }
         
                          
        console.log(gameRound())
        console.log(playerScore)
        console.log(computerScore)
        console.log(drawCounter)