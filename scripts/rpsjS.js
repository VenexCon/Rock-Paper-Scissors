// Rock, paper,scissors game, played in console against a computer
// create a function that returns at random, rock paper or scissors. 
// computerPlayer should be first function 

function computerPlay() {
        let rPS = ["rock", "paper", "scissors"];
        const compChoice = Math.floor(Math.random() * rPS.length);
        return compChoice
}

console.log (computerPlay())