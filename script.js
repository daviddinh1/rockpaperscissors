function getComputerChoice(){
  const selection = ['rock','paper','scissors'];
  let randomIndex = Math.floor(Math.random() * selection.length);
  let computerChoice = selection[randomIndex];
  return computerChoice;
}

let userScore = 0;
let computerScore = 0;
let compChoice = getComputerChoice();

function playRound(playerSelection, compChoice){
  while(userScore < 5 || computerScore < 5){
    if (userScore === 5){
      return "You won!";
      break;
    } else if (computerScore === 5){
      return "You lost";
      break;
    } else if(playerSelection === compChoice){
      userScore++;
      computerScore++;
      return "Tie!";
    } else if(playerSelection === 'rock' && compChoice === 'scissors'){
      userScore++;
      return "You win, Rock beats scissors";
    } else if(playerSelection === 'paper' && compChoice === 'rock'){
      userScore++;
      return "You win, paper beats rock";
    } else if(playerSelection === 'scissors' && compChoice === 'paper'){
      userScore++;
      return "You win, scissors beats paper";
    } else if(compChoice === 'rock' && playerSelection === 'scissors'){
      computerScore++;
      return "You lost, Rock beats scissors";
    } else if(compChoice === 'paper' && playerSelection === 'rock'){
      computerScore++;
      return "You lost, paper beats rock";
    } else if(compChoice === 'scissors' && playerSelection === 'paper'){
      computerScore++;
      return "You lost, scissors beats paper";
    } 
  }
  
  
}

function scoreDisplay(userScore,computerScore){
  return `SCORES: User: ${userScore} Bot: ${computerScore}`;
}

function showMovesUser(userChoice){
  if(userChoice === 'rock'){
    return "✊";
  }
  else if(userChoice === 'paper'){
    return "🖐️";
  }
  else if(userChoice === 'scissors'){
    return "✌️";
  }
}

function showMovesComputer(compChoice){
  if(compChoice === 'rock'){
    return "✊";
  }
  else if(compChoice === 'paper'){
    return "🖐️";
  }
  else if(compChoice === 'scissors'){
    return "✌️";
  }
}


const rockSelector = document.querySelector(".rock");
rockSelector.addEventListener('click', function(){
    document.getElementById("result").innerHTML = playRound('rock',compChoice)
    document.getElementById("scores").innerHTML = scoreDisplay(userScore,computerScore)
    if(userScore && computerScore < 5){
      document.getElementById("userSelection").innerHTML = showMovesUser('rock')
      document.getElementById("computerSelection").innerHTML = showMovesComputer(compChoice)
    }
});

const paperSelector = document.querySelector(".paper");
paperSelector.addEventListener('click', function(){
    document.getElementById("result").innerHTML = playRound('paper',compChoice)
    document.getElementById("scores").innerHTML = scoreDisplay(userScore,computerScore)
    if(userScore && computerScore < 5){
      document.getElementById("userSelection").innerHTML = showMovesUser('paper')
      document.getElementById("computerSelection").innerHTML = showMovesComputer(compChoice)
    }
});

const scissorsSelector = document.querySelector(".scissors");
scissorsSelector.addEventListener('click', function(){
    document.getElementById("result").innerHTML = playRound('scissors',compChoice)
    document.getElementById("scores").innerHTML = scoreDisplay(userScore,computerScore)
    if(userScore && computerScore <5){
      document.getElementById("userSelection").innerHTML = showMovesUser('scissors')
      document.getElementById("computerSelection").innerHTML = showMovesComputer(compChoice)
    } 
});




