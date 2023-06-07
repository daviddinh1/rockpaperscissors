function getComputerChoice() {
 let choices = ['rock','paper','scissors'];
 let choice = choices[Math.floor(Math.random() * choices.length)];
 return choice;
}

let userScore = 0;
let computerScore =0;

function playRound(playerSelection, computerSelection){
 let userInput = playerSelection.toLowerCase();

 if(userInput === computerSelection){
  userScore++;
  computerScore++;
  return "Tie!! BOZO";
 } else if(userInput === 'rock' && computerSelection ==='scissors'){
  userScore++;
  return "You picked rock! Rock beats scissors you WON!";
 } else if(userInput === 'paper' && computerSelection ==='rock'){
   userScore++;
  return "You picked paper! paper beats rock you WON!";
 } else if(userInput === 'scissors' && computerSelection ==='paper'){
   userScore++;
  return "You picked scissors! scissors beats paper you WON!";
 }else if(computerSelection === 'rock' && userInput ==='scissors'){
  computerScore++;
  return "Bot picked rock! Rock beats scissors you LOST!";
 } else if(computerSelection === 'paper' && userInput ==='rock'){
  computerScore++;
  return "Bot picked paper! paper beats rock you LOST!";
 } else if(computerSelection === 'scissors' && userInput ==='paper'){
  computerScore++;
  return "BOT picked scissors! scissors beats paper you LOST!";
 }

}

function game(){
 for(let i = 0 ; i<5 ;i++){
  let playerSelection = prompt("Please enter rock, paper, or scissors");
  let computerSelection = getComputerChoice();
  console.log(playRound(playerSelection,computerSelection));
  let display = `SCORES: User: ${userScore} Bot: ${computerScore}`;
  console.log(display);
 }
 if(userScore > computerScore){
  console.log("you won"); 
 }
 else{
  console.log("you lost");
 }
}

game();


