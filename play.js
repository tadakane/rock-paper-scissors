function getComputerChoice() {
    let random = parseInt(Math.floor(Math.random() * 3) + 1);
    if (random == 1) 
        return "ROCK";
    else if (random == 2) 
        return "PAPER";
    else
        return "SCISSORS";
}

function playRound(playerSelection, computerSelection) {

    console.log("You chose: " + playerSelection + "\n");
    console.log("Computer chose: " + computerSelection + "\n");

    if (playerSelection.toUpperCase() === "ROCK") {
        if (computerSelection === "ROCK") {
            console.log("It's a tie! Rock ties Rock");
            return 0;
        }
        else if (computerSelection === "PAPER") {
            console.log("You lose! Paper beats Rock");
            return -1;
        }
        else {
            console.log("You win! Rock beats Scissors");
            return 1;
        }
    }
    else if (playerSelection.toUpperCase() === "PAPER") {
        if (computerSelection === "ROCK") {
            console.log("You win! Paper beats Rock");
            return 1;
        }
        else if (computerSelection === "PAPER") {
            console.log("It's a tie! Paper ties Paper");
            return 0;
        }
        else {
            console.log("You lose! Scissors beats Paper");
            return -1;
        }
    }
    else {
        if (computerSelection === "ROCK") {
            console.log("You lose! Rock beats Scissors");
            return -1;
        }
        else if (computerSelection === "PAPER") {
            console.log("You win! Scissors beats Paper");
            return 1;
        }
        else {
            console.log("It's a tie! Scissors ties Scissors");
            return 0;
        }
    }
}

function game() {
    if (roundResult > 0)
        playerScore ++;
    else if (roundResult < 0)
        computerScore ++;
    else 
        ties++;
    console.log("\n");

    if (playerScore > computerScore) {
        console.log("You win this game of Rock-Paper-Scissors!");
        console.log("\tWins: " + String(playerScore) + 
                    "\n\tLosses: " + String(computerScore) + 
                    "\n\tTies: " + String(ties) + "\n");
    }
    else if (computerScore > playerScore) {
        console.log("You lost this game of Rock-Paper-Scissors!");
        console.log("\tWins: " + String(playerScore) + 
                    "\n\tLosses: " + String(computerScore) + 
                    "\n\tTies: " + String(ties) + "\n");
    }
    else {
        console.log("You tied this game of Rock Paper Scissors!");
        console.log("\tWins: " + String(playerScore) + 
                    "\n\tLosses: " + String(computerScore) + 
                    "\n\tTies: " + String(ties) + "\n");
    }
    
}

let computerSelection;
let roundResult;
let playerScore = 0, computerScore = 0, ties = 0;


const rockChoice = document.querySelector("#rock");
rockChoice.addEventListener('click', function(e) {
    computerSelection = getComputerChoice();
    roundResult = playRound("ROCK", computerSelection);
    game();
});
const paperChoice = document.querySelector("#paper");
paperChoice.addEventListener('click', function(e) {
    computerSelection = getComputerChoice();
    roundResult = playRound("Paper", computerSelection);
    game();
});
const scissorsChoice = document.querySelector('#scissors');
scissorsChoice.addEventListener('click', function(e) {
    computerSelection = getComputerChoice();
    roundResult = playRound("Scissors", computerSelection);
    game();
});
