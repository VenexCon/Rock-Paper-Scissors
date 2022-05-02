# Rock-Paper-Scissors


This is to log my soloution to the RPS challenge for The Odin Project. 

Firstly, I used git-bash to create and upload the repo to GitHub, along with using it for all VC. 

To begin, I have declared the computerPlay function, this will select a random number from a created array, using the math.floor & math.random function. 

         (function computerPlay() {
        let rPS = ["rock", "paper", "scissors"];
        const compChoice = Math.floor(Math.random() * rPS.length);
        return compChoice
               })

To assign a value to each number the ternary operator was used; 


        function computerPlay() {
        let rPS = ["rock", "paper", "scissors"];
        let compChoice = Math.floor(Math.random() * rPS.length);
        
        return compChoice == 0 ? "rock" :
                compChoice == 1 ? "Scissors" :
                "Paper";   
}
 
        console.log (computerPlay())
 

This caused some issues when I did not format the operator correctly, and the compChoice kept going out of scope. In the end I managed to figure out the problem was down to me wrapping the return in parenthesis.

One thing that stuck out in my mind, was that when using if & else if statements, using the equality operator "==", this would convert the string to a number value and therefore, it would choose the winner based on the highest "value", not what I wanted to happen. 

To combat this, I decided to use the strict equlity "===" operator to remove the conversion (I forgot the proper term). I ended up with this.

        function gameFunction(playerSelection, computerSelection) {
                if (playerSelection.toUpperCase() === computerSelection.toUpperCase()){
                        return "DRAW!, Please try again"
                } else if (playerSelection.toUpperCase()=== "ROCK" && computerSelection.toUpperCase()=== "SCISSORS"){
                        return "Nice! You have won this round!"
                } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER") {
                        return "Excellent, good job, you have won!"
                } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") {
                        return "Great job! you rock!"
                }  else if (playerSelection.toUpperCase()=== "ROCK" && computerSelection.toUpperCase()=== "PAPER"){
                        return "Unlucky you lost!"
                } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK") {
                        return "Too bad, better luck next time"
                } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") 
                        return "Better luck next time buddy!" 

        }

I have since realised that there was no way to keep count of the score using the above method, to change this the returns were changed to true and false, and used these to increment a score of each player. I am then planning to use these to keep track of the results of the game. 


I struggled alot to get the loop working, once the loop was working I struggled with some unreachable code. After trying many different things! It became obvious that i was console.log()'ing the result of the round, but was not assigning this to a variable. Once i assigned the playRound() to a result (let result = " ") it all clicked into place and worked as it should! 

the final function is below: 

       function gameRound() {
                for (let i = 0; i<5; i++){
                        
                      let result = playRound(playerSelection, computerPlayer()); //playround
                      if (result === true) {
                              playerScore++
                      } else if (result === false){
                              computerScore++
                      } else drawCounter++
               
                }
                if (playerScore>computerScore){
                        return "well done! You have won the game!"
                } else if (playerScore<computerScore){
                        return "Unlucky!, you lost good looking!"
                } else return "No one won, you are both equally awful!"
        }


note: the xxxxxScore was declared in the global scope. 


Update 

<hr> 

This re-work involved adding an interactive UI to the rock, paper, scissor game and therefore involved re-working the existing javascript and user interface. 

Ths involved getting familiar with ES6 functions and using a combination of skills learnt on FCC, TOP and CSS Tricks along with referencing MDN docs. To make it more interesting I went with using icons instead of simple buttons and used basic CSS to style the page. 

Through doing this i became far more confidenti n functions, DOM manipulation and callback functions. 

<hr> 

The RPS game functionality is finished, but it does require further CSS updates. I like the red background, but not entirely happy with the initial presentation, perhaps yellow would be better and slightly more cartoony. However, CSS takes time, and I would rather become more focucsed on lopps and recursion, although recursion seems very rare. 

I am still getting used to array methods, but after completing FCC's basic javascript and with the etch-a-sketch project left with TOP, i am looking foward to the frontend Dev course even more so. 


