let humanScore = 0;
let compScore = 0;
let roundCount = 0;
let result;
let buttons;

document.addEventListener('DOMContentLoaded', () => {
    result = document.getElementById("results");
    buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            let target = e.target.textContent.toLowerCase();
            if (humanScore < 5 && compScore < 5) {
                playRound(target);
            }
        })
    })
});

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    switch(compChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(humanChoice) {
    roundCount++;
    const compChoice = getComputerChoice();
    
    if (humanChoice === compChoice) {
        console.log("It's a tie!!");
    } else if ((humanChoice === "rock" && compChoice === "scissors") || 
               (humanChoice === "paper" && compChoice === "rock") || 
               (humanChoice === "scissors" && compChoice === "paper")) {
        humanScore++;
    } else {
        compScore++;
    }
    appendResults(humanChoice, compChoice);
    if (humanScore === 5 || compScore === 5) {
        getWinner();
    }
}

function appendResults(humanChoice, compChoice) {
    const round = document.createElement("p");
    round.textContent = "Round " + roundCount;
    const resultChoices = document.createElement("p");
    const resultPoints = document.createElement("p");
    resultChoices.textContent = "Human choice: " + humanChoice + " | Computer choice: " + compChoice;
    resultPoints.textContent = "Computer Score: " + compScore + "   " + "Human score: " + humanScore;
    result.innerHTML = '';
    result.appendChild(round);
    result.appendChild(resultChoices);
    result.appendChild(resultPoints);
}

function getWinner() {
    const winner = document.createElement("h2");
    if (humanScore > compScore) {
        winner.textContent = "You win!!";
    } else if (humanScore < compScore) {
        winner.textContent = "Computer wins!!";
    }
    result.appendChild(winner);
}

