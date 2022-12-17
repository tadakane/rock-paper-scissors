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

    const results = document.querySelector("#results");

    const playerChoice = document.createElement("p");
    playerChoice.textContent = "You chose: " + playerSelection;
    results.appendChild(playerChoice);
    const computerChoice = document.createElement("p");
    computerChoice.textContent += "Computer chose: " + computerSelection;
    results.appendChild(computerChoice);

    const resultText = document.createElement("p");

    if (playerSelection.toUpperCase() === "ROCK") {
        if (computerSelection === "ROCK") {
            resultText.textContent = "It's a tie! Rock ties Rock";
            results.appendChild(resultText);
            return 0;
        }
        else if (computerSelection === "PAPER") {
            resultText.textContent = "You lose! Paper beats Rock";
            results.appendChild(resultText);
            return -1;
        }
        else {
            resultText.textContent = "You win! Rock beats Scissors";
            results.appendChild(resultText);
            return 1;
        }
    }
    else if (playerSelection.toUpperCase() === "PAPER") {
        if (computerSelection === "ROCK") {
            resultText.textContent = "You win! Paper beats Rock";
            results.appendChild(resultText);
            return 1;
        }
        else if (computerSelection === "PAPER") {
            resultText.textContent = "It's a tie! Paper ties Paper";
            results.appendChild(resultText);
            return 0;
        }
        else {
            resultText.textContent = "You lose! Scissors beats Paper";
            results.appendChild(resultText);
            return -1;
        }
    }
    else {
        if (computerSelection === "ROCK") {
            resultText.textContent = "You lose! Rock beats Scissors";
            results.appendChild(resultText);
            return -1;
        }
        else if (computerSelection === "PAPER") {
            resultsText.textContent = "You win! Scissors beats Paper";
            results.appendChild(resultText);
            return 1;
        }
        else {
            resultText.textContent = "It's a tie! Scissors ties Scissors";
            results.appendChild(resultText);
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
    roundResult = playRound("PAPER", computerSelection);
    game();
});
const scissorsChoice = document.querySelector('#scissors');
scissorsChoice.addEventListener('click', function(e) {
    computerSelection = getComputerChoice();
    roundResult = playRound("SCISSORS", computerSelection);
    game();
});
