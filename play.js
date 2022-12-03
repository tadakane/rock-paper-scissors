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
    if (playerSelection.toUpperCase() == "ROCK") {
        if (computerSelection == "ROCK") {
            console.log("It's a tie! Rock ties Rock");
            return 0;
        }
        else if (computerSelection == "PAPER") {
            console.log("You lose! Paper beats Rock");
            return -1;
        }
        else {
            console.log("You win! Rock beats Scissors");
            return 1;
        }
    }
    else if (playerSelection.toUpperCase() == "PAPER") {
        if (computerSelection == "ROCK") {
            console.log("You win! Paper beats Rock");
            return 1;
        }
        else if (computerSelection == "PAPER") {
            console.log("It's a tie! Paper ties Paper");
            return 0;
        }
        else {
            console.log("You lose! Scissors beats Paper");
            return -1;
        }
    }
    else {
        if (computerSelection == "ROCK") {
            console.log("You lose! Rock beats Scissors");
            return -1;
        }
        else if (computerSelection == "PAPER") {
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
    let playerSelection;
    let computerSelection;
    for (let i = 1; i < 6; i++) {
        playerSelection = prompt("Enter your selection: ");
        computerSelection = getComputerChoice();
        console.log("Round " + i + "\n");
        console.log("You chose: " + playerSelection + "\n");
        console.log("Computer chose: " + computerSelection + "\n");
        console.log(playRound(playerSelection, computerSelection));
        console.log("\n");
    }
}

game();