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

    const results = document.querySelector("#gameResults");
    const resultText = document.createElement("p");

    if (playerSelection.toUpperCase() === "ROCK") {
        if (computerSelection === "ROCK") {
            resultText.textContent = "It's a tie! Rock ties Rock";
            resultText.style.color = 'gray';
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
            resultText.style.color = 'gray';
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
            resultText.style.color = 'gray';
            results.appendChild(resultText);
            return 0;
        }
    }
}

function game() {
    const results = document.querySelector("#gameResults");
    const winnerText = document.createElement("p");

    if (roundResult > 0)
        playerScore ++;
    else if (roundResult < 0)
        computerScore ++;
    else 
        ties++;

    score.textContent = "Wins: " + String(playerScore) + 
                        "\tLosses: " + String(computerScore) + 
                        "\tTies: " + String(ties);

    if (playerScore === 5 || computerScore === 5 || ties === 5) {
        if (playerScore === 5) {
            winnerText.textContent = "You win this game of Rock-Paper-Scissors!";
            winnerText.style.color = 'green';
        }
        else if (computerScore === 5) {
            winnerText.textContent = "You lost this game of Rock-Paper-Scissors!";
            winnerText.style.color = 'red';
        }
        else if (ties === 5){
            winnerText.textContent = "You tied this game of Rock Paper Scissors!";
            winnerText.style.color = 'gray';
        }
        winnerText.style.fontWeight = 'bold';
        winnerText.style.fontSize = 'x-large';
        results.appendChild(winnerText);

        playerScore = 0, computerScore = 0, ties = 0;

        rockChoice.disabled = true;
        paperChoice.disabled = true;
        scissorsChoice.disabled = true;
        let playAgain = document.createElement("button");
        playAgain.textContent = "Play Again";
        results.append(playAgain);
        playAgain.addEventListener('click', () => {
            rockChoice.disabled = false;
            paperChoice.disabled = false;
            scissorsChoice.disabled = false;
            while (gameResults.firstChild) {
                gameResults.removeChild(gameResults.firstChild);
            }
        score.textContent = "Wins: " + String(playerScore) + 
                            "\tLosses: " + String(computerScore) + 
                            "\tTies: " + String(ties);
        });
    }
}

document.querySelector('body').style.backgroundColor = 'lightblue';
document.querySelector('body').style.textAlign = 'center';

let computerSelection;
let roundResult;
let playerScore = 0, computerScore = 0, ties = 0;

let results = document.querySelector('#results');
let labels = document.createElement('div');
let gameOutput = document.createElement('div');
gameOutput.setAttribute('id', 'gameResults');
let score = document.createElement('h2');
score.textContent = "Wins: " + String(playerScore) + 
                    "\tLosses: " + String(computerScore) + 
                    "\tTies: " + String(ties);
labels.append(score);
results.append(labels);
results.append(gameOutput);

const rockChoice = document.querySelector("#rock");
rockChoice.style.margin = '15px';
rockChoice.addEventListener('click', function(e) {
    computerSelection = getComputerChoice();
    roundResult = playRound("ROCK", computerSelection);
    game();
});

const paperChoice = document.querySelector("#paper");
paperChoice.style.margin = '15px';
paperChoice.addEventListener('click', function(e) {
    computerSelection = getComputerChoice();
    roundResult = playRound("PAPER", computerSelection);
    game();
});

const scissorsChoice = document.querySelector('#scissors');
scissorsChoice.style.margin = '15px';
scissorsChoice.addEventListener('click', function(e) {
    computerSelection = getComputerChoice();
    roundResult = playRound("SCISSORS", computerSelection);
    game();
});
