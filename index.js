const choices = ["rock", "paper", "scissors"]
const results = [];
function game() {
  for (let i = 0; i <= 5; i++) {
    playRound();
  }
}

function playRound() {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const results = checkResults(playerSelection, computerSelection);
  
  console.log(results);
}

function playerChoice() {
  let input = prompt('Choose Rock, Paper, or Scissors');
  while (input == null) {
    input = prompt('Choose Rock, Paper, or Scissors');
  }
  input = input.toLowerCase();
  let check = validateInput(input);
    while (check == false) {
      input = prompt('Choose Rock, Paper, or Scissors');
    while (input ==  null) {
      input = prompt('Choose Rock, Paper, or Scissors')
    }
      input = input.toLowerCase(); 
      check = validateInput(input);
  }
  return input;
}

function computerChoice() {
  return choices[Math.floor(Math.random()*choices.length)]//length is number of array choices
}

function validateInput(choice) {
  return (choices.includes(choice));
}  

function checkResults(choicePlayer, choiceComputer) {
  if(choicePlayer === choiceComputer) {
    return 'Tie';
  } else if (
    (choicePlayer === 'rock' && choiceComputer == 'scissors') || 
    (choicePlayer === 'paper' && choiceComputer == 'rock') ||
    (choicePlayer === 'scissors' && choiceComputer == 'paper')
    ) {
    return 'Player wins!'
  } else {
    return 'Computer wins!'
  }
}

game();