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
        if (computerSelection == "ROCK")
            console.log("It's a tie! Rock ties Rock");
        else if (computerSelection == "PAPER")
            console.log("You lose! Paper beats Rock");
        else    
            console.log("You win! Rock beats Scissors");
    }
    else if (playerSelection.toUpperCase() == "PAPER") {
        if (computerSelection == "ROCK")
            console.log("You win! Paper beats Rock");
        else if (computerSelection == "PAPER")
            console.log("It's a tie! Paper ties Paper");
        else    
            console.log("You lose! Scissors beats Paper");
    }
    else
        if (computerSelection == "ROCK")
            console.log("You lose! Rock beats Scissors");
        else if (computerSelection == "PAPER")
            console.log("You win! Scissors beats Paper");
        else
            console.log("It's a tie! Scissors ties Scissors");
}
