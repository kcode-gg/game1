


//Player Input 
let playerSelection; //prompt("Please choose one of the following: Rock, Scissor, Paper");


// Check for player input and repeat prompt if not given one of the options
//while (playerSelection.toLowerCase() !== "rock" && playerSelection.toLowerCase() !== "paper" && playerSelection.toLowerCase() !== "scissor"){
//        playerSelection = prompt("Please choose one of the following: Rock, Scissor, Paper");
//    }





//convert input to lowercase so it matches the computer choice in casing
//playerSelection = playerSelection.toLowerCase();




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


let playerScore = 0;
let computerScore = 0;


//one Game Round - still unsure with parameters / arguments of functions
function oneRound (strOutput, playerSelection){
    if (strOutput === "rock" && playerSelection === "scissor"){
        alert(`You Lost. ${strOutput} beats ${playerSelection}!`);
        computerScore++;
    } else if (strOutput === "scissor" && playerSelection === "paper"){
        alert(`You Lost. ${strOutput} beats ${playerSelection}!`);
        computerScore++;
    } else if (strOutput === "paper" && playerSelection === "rock"){
        alert(`You Lost. ${strOutput} beats ${playerSelection}!`);
        computerScore++;
    } else if (strOutput === "rock" && playerSelection === "paper"){
        alert(`Congratulations! ${playerSelection} beats ${strOutput}!`);
       playerScore++;
    } else if (strOutput === "scissor" && playerSelection === "rock"){
        alert(`Congratulations! ${playerSelection} beats ${strOutput}!`);
        playerScore++;
    } else if (strOutput === "paper" && playerSelection === "scissor"){
        alert(`Congratulations! ${playerSelection} beats ${strOutput}!`);
        playerScore++;
    } else {
        alert(`It's a draw. You both chose ${playerSelection}!`)
    }
        
   
    
   
    }
   
    

//game();
//getComputerChoice();
//oneRound(strOutput, playerSelection);
//console.log(strOutput);

function game(){
    getComputerChoice();
    
    playerSelection = prompt("Please choose one of the following: Rock, Scissor, Paper");

    // Check for player input and repeat prompt if not given one of the options
    while (playerSelection.toLowerCase() !== "rock" && playerSelection.toLowerCase() !== "paper" && playerSelection.toLowerCase() !== "scissor"){
        playerSelection = prompt("Please choose one of the following: Rock, Scissor, Paper");
    }

    //convert input to lowercase so it matches the computer choice in casing
    playerSelection = playerSelection.toLowerCase();
   
    //calling one round with computer and play selection
    oneRound(strOutput, playerSelection);
    console.log(computerScore);
    console.log(playerScore);
    alert(`Your score: ${playerScore} \n Computer score: ${computerScore}`);
}

for (let i = 0; i < 5; i++){
    game();
   
}

if (computerScore > playerScore){
    alert("You lost vs a computer LOL! \n \n Refresh to play again.");
} else if (computerScore < playerScore){
    alert("You won! Congratulations you're the GOAT! \n \n Refresh to play again.")
} else {
    alert("It's a tie. \n \n Refresh to play again.")
}