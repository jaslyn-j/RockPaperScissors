let humanScore=0;
let compScore=0;

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
function getHumanChoice(){
    let humanChoice=String(prompt("Enter your choice (Rock/Paper/Scissor):")).toLowerCase();
    return humanChoice;
}
function playRound(humanChoice, compChoice){
    if(humanChoice===compChoice){
        alert("It's a tie!!");
    }else if((humanChoice==="rock" && compChoice==="scissor") || (humanChoice==="paper" && compChoice==="rock") || (humanChoice==="scissor" && compChoice==="paper")){
        humanScore++;
        alert("You win this round!");
    }else{
        compScore++;
        alert("Computer wins this round!");
    }
    alert(`Current Score\n YOur Score: ${humanScore}\n Computer Score: ${compScore}`);
}
function playGame(){
    for(let i=0; i<5; i++){
        alert(`Round ${i+1}`);
        playRound(getHumanChoice(), getComputerChoice());
    }console.log("Game Over");

    if(humanScore>compScore){
        alert("You win!");
    } 
    else if(humanScore<compScore){
        alert("You lose!");
    }
    else{
        alert("It's a tie");
    }
}
playGame();

