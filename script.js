


//Player Input 
let playerSelection = prompt("Please choose one of the following: Rock, Scissor, Paper");


// Check for player input and repeat prompt if not given one of the options
while (playerSelection.toLowerCase() !== "rock" && playerSelection.toLowerCase() !== "paper" && playerSelection.toLowerCase() !== "scissor"){
        playerSelection = prompt("Please choose one of the following: Rock, Scissor, Paper");
    }



 alert("Good Luck!")

//convert input to lowercase so it matches the computer choice in casing
playerSelection = playerSelection.toLowerCase();




let strOutput;
//Computer gets a random number which is converted to a string which will be used as the computers choice
function getComputerChoice(){
    let computerSelection = Math.random()
   
    if (computerSelection <= 0.3333){
        strOutput = "rock";
        
    } else if (computerSelection >= 0.3333 && computerSelection <= 0.6666){
        strOutput = "scissor";
       
    } else {
        strOutput = "paper";
        
    }
   
   
}

//one Game Round - still unsure with parameters / arguments of functions
function oneRound (strOutput, playerSelection){
    if (strOutput === "rock" && playerSelection === "scissor"){
        alert(`You Lost. ${strOutput} beats ${playerSelection}!`);
    } else if (strOutput === "scissor" && playerSelection === "paper"){
        alert(`You Lost. ${strOutput} beats ${playerSelection}!`);
    } else if (strOutput === "paper" && playerSelection === "rock"){
        alert(`You Lost. ${strOutput} beats ${playerSelection}!`);
    } else if (strOutput === "rock" && playerSelection === "paper"){
        alert(`Congratulations! ${playerSelection} beats ${strOutput}!`);
    } else if (strOutput === "scissor" && playerSelection === "rock"){
        alert(`Congratulations! ${playerSelection} beats ${strOutput}!`);
    } else if (strOutput === "paper" && playerSelection === "scissor"){
        alert(`Congratulations! ${playerSelection} beats ${strOutput}!`);
    } else {
        alert(`It's a draw. You both chose ${playerSelection}!`)
    }
        
    
    
    
   
    }



getComputerChoice();
oneRound(strOutput, playerSelection);
console.log(strOutput);


