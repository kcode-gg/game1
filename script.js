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






const rock = document.getElementById("rock");
rock.addEventListener("click", choseRock);

const paper = document.getElementById("paper");
paper.addEventListener("click", chosePaper);

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", choseScissors);




function choseRock() {
    playerSelection = "rock";
    game();
}

function chosePaper() {
    playerSelection = "paper";
    game();
}

function choseScissors() {
    playerSelection = "scissor";
    game();
}



let playerScore = 0;
let computerScore = 0;


//one Game Round - still unsure with parameters / arguments of functions
function oneRound (strOutput, playerSelection){
    if (strOutput === "rock" && playerSelection === "scissor"){
        document.getElementById("statusRound").innerHTML = `You Lost. Rock beats Scissors!`;
        computerScore++;
    } else if (strOutput === "scissor" && playerSelection === "paper"){
        document.getElementById("statusRound").innerHTML = `You Lost. Scissors beats Paper!`;
        computerScore++;
    } else if (strOutput === "paper" && playerSelection === "rock"){
        document.getElementById("statusRound").innerHTML = `You Lost. Paper beats Rock!`;
        computerScore++;
    } else if (strOutput === "rock" && playerSelection === "paper"){
        document.getElementById("statusRound").innerHTML = `Congratulations! Paper beats Rock!`;
        playerScore++;
    } else if (strOutput === "scissor" && playerSelection === "rock"){
        document.getElementById("statusRound").innerHTML = `Congratulations! Rock beats Scissors!`;
        playerScore++;
    } else if (strOutput === "paper" && playerSelection === "scissor"){
        document.getElementById("statusRound").innerHTML = `Congratulations! Scissors beats Paper!`;
        playerScore++;
    } else {
        document.getElementById("statusRound").innerHTML = `It's a draw. You both chose ${playerSelection}!`;
    }     
    }

function game(){
    getComputerChoice();
    oneRound(strOutput, playerSelection);
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
    if (playerScore >= 5){
        document.getElementById("statusRound").innerHTML = "You won the Game!";
        document.getElementById("endText").innerHTML = "Congratulations you're the GOAT! Refresh to play again.";
        // const btn = document.createElement("button");
        // btn.innerText = "Play Again";
        // document.querySelector(".descriptioncont").appendChild(btn);
        // btn.classList.add("btnEffect", "btnShapeEffect", "m1");
      

    } else if (computerScore >= 5) {
        document.getElementById("statusRound").innerHTML = "You lost the Game!";
        document.getElementById("endText").innerHTML = "Refresh to play again.";
    //     const btn = document.createElement("button");
    //     btn.innerText = "Play Again";
    //     document.querySelector(".descriptioncont").appendChild(btn);
    //     btn.classList.add("btnEffect", "btnShapeEffect", "m1");
    };
}



//Overlay function with winner or loser message
function showOverlay(message) {
    const overlay = document.getElementById('overlay');
    const overlayText = document.getElementById('overlay-text');
    overlayText.innerText = message;
    overlay.style.display = 'block';
  }


// resets the scores and removes overlay
  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('computerScore').innerHTML = computerScore;
    document.getElementById('overlay').style.display = 'none';
  }

//adds an event listener to the play again button which calls resetGame();
  const playAgainButton = document.getElementById('play-again');
  playAgainButton.addEventListener('click', resetGame);


//game function
  function game() {
    getComputerChoice();
    oneRound(strOutput, playerSelection);
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('computerScore').innerHTML = computerScore;
    if (playerScore === 5) {
      showOverlay("You won the Game! Congratulations you're the GOAT!");
    } else if (computerScore === 5) {
      showOverlay("You lost the Game! Maybe next time.");
    }
  }