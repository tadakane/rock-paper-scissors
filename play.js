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
            return "It's a tie! Rock ties Rock";
        else if (computerSelection == "PAPER")
            return "You lose! Paper beats Rock";
        else    
            return "You win! Rock beats Scissors";
    }
    else if (playerSelection.toUpperCase() == "PAPER") {
        if (computerSelection == "ROCK")
            return "You win! Paper beats Rock";
        else if (computerSelection == "PAPER")
            return "It's a tie! Paper ties Paper";
        else    
            return "You lose! Scissors beats Paper";
    }
    else
        if (computerSelection == "ROCK")
            return "You lose! Rock beats Scissors";
        else if (computerSelection == "PAPER")
            return "You win! Scissors beats Paper";
        else
            return "It's a tie! Scissors ties Scissors";
}

