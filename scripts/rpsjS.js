// Rock, paper,scissors game, played in console against a computer
// create a function that returns at random, rock paper or scissors. 
// computerPlayer should be first function 


const rockBtn = document.getElementById(`rockBtn`); 
const scissorBtn = document.getElementById(`scissorBtn`); 
const paperBtn = document.getElementById(`paperBtn`);
const playerResult = document.getElementById(`playerTally`); 
const computerResult = document.getElementById(`computerTally`); 


let playerSelection= " ";  
let computerSelection = computerPlayer(); 
let playerScore = 0;
let computerScore = 0; 


function computerPlayer() {
        let rPS = ["ROCK", "PAPER", "SCISSORS"];
        let compChoice = Math.floor(Math.random() * rPS.length);
        
        return compChoice == 0 ? "ROCK" :
                compChoice == 1 ? "SCISSORS" :
                "PAPER";   
        }
        
    // computerSelection = computerPlay(); 

       // playerSelection = prompt(); 

    // playRound decides the winner
        function playRound(playerSelection, computerSelection) {
                if (playerSelection.toUpperCase() === computerSelection) {
                        return console.log("DRAW");
                } else if (playerSelection.toUpperCase()=== "ROCK" && computerSelection === "SCISSORS"){
                        console.log("Won")
                        return true;
                } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "PAPER") {
                        console.log("Won")
                        return true;
                } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "ROCK") {
                        console.log("Won")
                        return true;
                }  else if (playerSelection.toUpperCase()=== "ROCK" && computerSelection === "PAPER"){
                        console.log("Loss")
                        return false;
                } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "ROCK") {
                        console.log("Loss")
                        return false;;
                } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "SCISSORS") 
                        console.log("loss")
                        return false;

        }


rockBtn.addEventListener(`click`, () => {
        playerSelection = "rock"; 
        playRound() ;
});


paperBtn.addEventListener(`click`, () => {
        playerSelection = "paper";
        playRound(); 
});


scissorBtn.addEventListener(`click`, () => {
        playerSelection = "scissors"; 
        playRound()
});

  



function gameRound() { 
                for (let i = 0; i<5; i++){
                        
                      let result = playRound(playerSelection, computerPlayer()); //playRound
                      if (result === true) {
                              playerScore++
                      } else if (result === false){
                              computerScore++
                      } 
               
                }
                if (playerScore>computerScore){
                        return "well done! You have won the game!"
                } else if (playerScore<computerScore){
                        return "Unlucky!, you lost good looking!"
                } else return "No one won, you are both equally awful!"
        } 
         
                          
        console.log(gameRound())
