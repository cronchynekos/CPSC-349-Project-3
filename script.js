const option = ["rock", "paper", "scissor"]; 
let playerScore;
let computerScore;
let playerSelection = "";
let Round_winner = "";

function computerPlay(){ 
  return option[Math.floor(Math.random()*option.length)] 
}; 


//get Score or initialize empty array for player & computer keys
const compScoreLocal = localStorage.getItem('compScore') || 0;
if(localStorage.getItem('compScore') == null){
  computerScore = 0;
}else{
  computerScore = compScoreLocal;
  localStorage.setItem('compScore', computerScore);
}

const playerScoreLocal = localStorage.getItem('playerScore') || 0;
if(localStorage.getItem('playerScore') == null){
  playerScore = 0;
}else{
  playerScore = playerScoreLocal;
  localStorage.setItem('playerScore', playerScore);
}

function playRound(playerSelection, computerSelection) { 
  if(playerSelection == computerSelection){ 
    Round_winner = "Tied game";
  } else if
  ((computerSelection == "rock" && playerSelection == "scissor") || 
  (computerSelection == "scissor" && playerSelection == "paper") || 
  (computerSelection == "paper" && playerSelection == "rock")){
    computerScore++;
    localStorage.setItem('compScore', computerScore)
    Round_winner = "You lost";
  }else if 
  ((playerSelection == "rock" && computerSelection == "scissor") || 
  (playerSelection == "scissor" && computerSelection == "paper") || 
  (playerSelection == "paper" && computerSelection == "rock") ){
    playerScore++;
    localStorage.setItem('playerScore', playerScore)
    Round_winner = "You won";
  }
}; 

//UI
const display = document.querySelector(".display_round");
const round_result = document.getElementById("round_result");
const rock_btn = document.querySelector(".rock-btn");
const paper_btn = document.querySelector(".paper-btn");
const scissor_btn = document.querySelector(".scissor-btn");
const player_score = document.querySelector('#player_score');
const comp_score = document.querySelector('#comp_score');
const player_pick = document.querySelector(".playerPick");
const comp_pick = document.querySelector(".compPick");
const playerPickIcon = document.querySelector(".playerPick");
const compPickIcon = document.querySelector(".compPick");


rock_btn.addEventListener('click', () => game("rock"));

paper_btn.addEventListener('click', () => game("paper"));

scissor_btn.addEventListener('click', () => game("scissor"));


function game(playerSelection){
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  updateRound();;
  updatePick(playerSelection, computerSelection);
};


function updateRound(){
  round_result.textContent = Round_winner;
  player_score.textContent = `Player: ${playerScore}`;
  comp_score.textContent = `Computer: ${computerScore}`;
};

function updatePick(playerSelection, computerSelection){
  if(playerSelection == 'rock'){
    playerPickIcon.src="./imgs/rock.png"; 
  }else if(playerSelection == 'paper'){
    playerPickIcon.src="./imgs/paper.png";
  }else{
    playerPickIcon.src="./imgs/scissors.png";
  }

  if(computerSelection == 'rock'){
    compPickIcon.src="./imgs/rock.png";  
  }else if(computerSelection == 'paper'){
    compPickIcon.src="./imgs/paper.png";
  }else{
    compPickIcon.src="./imgs/scissors.png";
  }
};

updateRound();