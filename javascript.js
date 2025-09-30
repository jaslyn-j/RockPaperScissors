let humanScore = 0;
let compScore = 0;
let roundCount = 0;
let result;
let buttons;

// Wait for DOM to load before accessing elements
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

/*let humanScore=0;
let compScore=0;
let round=0;
const result=document.getElementById("results");
const buttons=document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let target = e.target.textContent;
        if (humanScore < 5 && compScore< 5) {
            playRound(target);
        }
    })
})

function getComputerChoice(){
    let compChoice=Math.floor(Math.random()*3);
    switch(compChoice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor"
    }
}
function getHumanChoice(humanChoice){
    if(humanChoicechoice==="ROCK"){
        humanChoice="rock";
    }else if(choice==="PAPER"){
        humanChoice="paper";
    }else if(choice==="SCISSOR"){
        humanChoice="scissor";
    }return humanChoice
}
function playRound(humanChoice, compChoice){
    l
    if(humanChoice===compChoice){
        console.log("It's a tie!!");
    }else if((humanChoice==="rock" && compChoice==="scissor") || (humanChoice==="paper" && compChoice==="rock") || (humanChoice==="scissor" && compChoice==="paper")){
        humanScore++;
    }else{
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
    resultChoices.textContent = "Human choice: "+humanChoice+ " | Computer choice: "+compChoice;
    resultPoints.textContent = "Computer Score: "+compScore+"   "+"Human score: "+humanScore;
    result.innerHTML = '';
    result.appendChild(round);
    result.appendChild(resultChoices);
    result.appendChild(resultPoints);
}

function getWinner() {
    const winner = document.createElement("h2");
    if (humanScore>compScore) {
        winner.textContent = "You win!!";
    } else if (humanScore <compScore) {
        winner.textContent = "Computer wins!!";
    }
    result.appendChild(winner);
}



const resultDiv = document.getElementById("results");
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let target = e.target.textContent;
        if (humanScore < 5 && computerScore < 5) {
            playRound(target);
        }
    })
})

function getComputerChoice() {
    let choice = 0;
    choice = (Math.floor((Math.random() * 3) + 1));
    return choice;
}

function getHumanChoice(choice) {
    if (choice === "ROCK") {
        choiceNumber = 1;
    } else if (choice === "PAPER") {
        choiceNumber = 2;
    } else if (choice === "SCISSORS") {
        choiceNumber = 3;
    }
    return choiceNumber;
}

function playRound(human) {
    roundCount++;
    let humanChoice = getHumanChoice(human);
    let computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        console.log("DRAW!")
    } else if (humanChoice === 1 && computerChoice === 2) {
        computerScore++;
    } else if (humanChoice === 1 && computerChoice === 3) {
        humanScore++;
    } else if (humanChoice === 2 && computerChoice === 1) {
        humanScore++;
    } else if (humanChoice === 2 && computerChoice === 3) {
        computerScore++;
    } else if (humanChoice === 3 && computerChoice === 1) {
        computerScore++;
    } else if (humanChoice === 3 && computerChoice === 2) {
        humanScore++;
    }

    appendResults(humanChoice, computerChoice);

    if (humanScore === 5 || computerScore === 5) {
        getWinner();
        console.log("!!!!!!!!!!!!!");
    }
}

function appendResults(humanChoice, computerChoice) {
    const round = document.createElement("p");
    round.textContent = "Round " + roundCount;
    const resultChoices = document.createElement("p");
    const resultPoints = document.createElement("p");
    resultChoices.textContent = "Human choice: " + choiceToString(humanChoice) + " / Computer choice: " + choiceToString(computerChoice);
    resultPoints.textContent = "Computer Score: " + computerScore + "   " + "Human score: " + humanScore;
    resultDiv.innerHTML = '';
    resultDiv.appendChild(round);
    resultDiv.appendChild(resultChoices);
    resultDiv.appendChild(resultPoints);
}

function choiceToString(number) {
    switch (number) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }
}

function getWinner() {
    const winner = document.createElement("h2");
    if (humanScore > computerScore) {
        winner.textContent = "YOU ARE THE WINNER!!";
        winner.style.color = "green";
    } else if (humanScore < computerScore) {
        winner.textContent = "YOU LOSE!!";
        winner.style.color = "red";
    }
    resultDiv.appendChild(winner);
}
*/
