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
    const resultText = document.createElement("p");

    if (playerSelection.toUpperCase() === "ROCK") {
        if (computerSelection === "ROCK") {
            resultText.textContent = "It's a tie! Rock ties Rock";
            results.appendChild(resultText);
            return 0;
        }
        else if (computerSelection === "PAPER") {
            resultText.textContent = "You lose! Paper beats Rock";
            resultText.style.color = 'red';
            results.appendChild(resultText);
            return -1;
        }
        else {
            resultText.textContent = "You win! Rock beats Scissors";
            resultText.style.color = 'green';
            results.appendChild(resultText);
            return 1;
        }
    }
    else if (playerSelection.toUpperCase() === "PAPER") {
        if (computerSelection === "ROCK") {
            resultText.textContent = "You win! Paper beats Rock";
            resultText.style.color = 'green';
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
            resultText.style.color = 'red';
            results.appendChild(resultText);
            return -1;
        }
    }
    else {
        if (computerSelection === "ROCK") {
            resultText.textContent = "You lose! Rock beats Scissors";
            resultText.style.color = 'red';
            results.appendChild(resultText);
            return -1;
        }
        else if (computerSelection === "PAPER") {
            resultText.textContent = "You win! Scissors beats Paper";
            resultText.style.color = 'green';
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

    const results = document.querySelector("#results");
    const winnerText = document.createElement("p");
    const score = document.createElement("p");
    const horizontal = document.createElement("hr");

    if (playerScore === 5 || computerScore === 5 || ties === 5) {
        if (playerScore === 5) {
            winnerText.textContent = "You win this game of Rock-Paper-Scissors!";
            score.textContent = "\tWins: " + String(playerScore) + 
                        "\n\tLosses: " + String(computerScore) + 
                        "\n\tTies: " + String(ties) + "\n";
            winnerText.style.fontWeight = 'bold';
            winnerText.style.fontSize = 'x-large';
            winnerText.style.color = 'green';
            score.style.fontWeight = 'bold';
            results.appendChild(winnerText);
            results.appendChild(score);
        }
        else if (computerScore === 5) {
            winnerText.textContent = "You lost this game of Rock-Paper-Scissors!";
            score.textContent = "\tWins: " + String(playerScore) + 
                        "\n\tLosses: " + String(computerScore) + 
                        "\n\tTies: " + String(ties) + "\n";
            winnerText.style.fontWeight = 'bold';
            winnerText.style.fontSize = 'x-large';
            winnerText.style.color = 'red';
            score.style.fontWeight = 'bold';
            results.appendChild(winnerText);
            results.appendChild(score);
        }
        else if (ties === 5){
            winnerText.textContent = "You tied this game of Rock Paper Scissors!";
            score.textContent = "\tWins: " + String(playerScore) + 
                        "\n\tLosses: " + String(computerScore) + 
                        "\n\tTies: " + String(ties) + "\n";
            winnerText.style.fontWeight = 'bold';
            winnerText.style.fontSize = 'x-large';
            score.style.fontWeight = 'bold';
            results.appendChild(winnerText);
            results.appendChild(score);
        }
        
        playerScore = 0, computerScore = 0, ties = 0;
        results.appendChild(horizontal);
    }
}

document.querySelector('body').style.backgroundColor = 'lightblue';
document.querySelector('body').style.textAlign = 'center';

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
