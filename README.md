# Rock-Paper-Scissors


This is to log my soloution to the RPS challenge for The Odin Project. 

Firstly, i used git-bash to create and upload the repo to GitHub, along with using it for all VC. 

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
 

This caused some issues when I did not format the operator correctly, and the compChoice kept going out of scope. In the end i managed to figure out the problem was wrapping the return in parenthesis.

One thing that stuck out in my mind, was that when using if & else if statements, using the equality operator "==", this would convert the string to a number value and therefore, it would choose the value with the highest "value", not what i wnated to happen. 

To combat this, I decided to use the strict equlity "===" operator to remove the conversion (I forgot the proper term). I ended up with this. 
