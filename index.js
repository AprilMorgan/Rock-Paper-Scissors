let winners = [];
const choices = ["rock", "paper", "scissors"];

function resetGame() {
  winners = [];
  document.querySelector(".playerScore").textContent = "Score: 0";
  document.querySelector(".computerScore").textContent = "Score: 0";
  document.querySelector(".ties").textContent = "Ties: 0";
  document.querySelector(".winner").textContent = "";
  document.querySelector(".playerChoice").textContent = "";
  document.querySelector(".computerChoice").textContent = "";
  document.querySelector(".reset").style.display = "none";
}

function startGame() { //play until a player reaches 5 wins
    let imgs = document.querySelectorAll("img");
    imgs.forEach((img) => 
    img.addEventListener("click", () => {
      if (img.id) {
        playRound(img.id);
      }
    })
  );
}

function playRound(playerChoice) {
  let wins = checkWins();
  if (wins >= 5) {
    return;
  }

  const computerChoice = computerSelect();

  const winner = checkWinner(playerChoice, computerChoice);
  winners.push(winner);
  tallyWins();

  displayRound(playerChoice, computerChoice, winner);
  wins = checkWins();
  if (wins == 5) {

    displayEnd();
  }
}

function displayEnd() {
  let playerWins = winners.filter((item) => item == "Player").length;
  
  if (playerWins == 5) {
    document.querySelector(".winner").textContent = "Congrats! You have 5 wins!";
  } else {
    document.querySelector(".winner").textContent = "Sorry, you lost!";
  }
  document.querySelextor(".reset").style.display = "flex";
}

function displayRound(playerChoice, computerChoice, winner) {
  document.querySelector(".playerChoice").textContent = `You chose: ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
  document.querySelector(".computerChoice").textContent = `The computer chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
  displayRoundWinner(winner);
}

function displayRoundWinner(winner) {
  if(winner == "Player") {
    document.querySelector(".winner").textContent = "You won that round!";
  } else if (winner == "Computer") {
    document.querySelector(".winner").textContent = "The computer won that round!";
  } else {
    document.querySelector(".winner").textContent = "Tie Round!";
  }
}

function tallyWins() {
  const pWinCount = winners.filter((item) => item == "Player").length;
  const cWinCount = winners.filter((item) => item == "Computer").length;
  const ties = winners.filter((item) => item == "Tie").length; 
  document.querySelector(".playerScore").textContent = `Score: ${pWinCount}`;
  document.querySelector(".computerScore").textContent = `Score: ${cWinCount}`;
  document.querySelector(".ties").textContent = `Ties: ${ties}`;
}

function computerSelect() {
  //update the dom with computer selection
  const choice = choices[Math.floor(Math.random() * choices.length)];

  document.querySelector(`.${choice}`).classList.add("active");

  setTimeout(() => {
    document.querySelector(`.${choice}`).classList.remove("active");
  }, 700);
  
  return choice;
}

function checkWins() {
  const pWinCount = winners.filter((item) => item == "Player").length;
  const cWinCount = winners.filter((item) => item == "Computer").length;
  return Math.max(pWinCount, cWinCount);
}

function checkWinner(choice1, choice2) {
  if (
    (choice1 == "rock" && choice2 == "scissors")||
    (choice1 == "scissors" && choice2 == "paper")||
    (choice1 == "paper" && choice2 == "rock")  
  ) {
    return "Player";
  } else if (choice1 == choice2) {
    return "Tie";
  } else {
    return "Computer";
  }
}

function setWins() {
  const pWinCount = winners.filter((item) => item == "Player").length;
  const cWinCount = winners.filter((item) => item == "Computer").length;
  const ties = winners.filter((item) => item == "Tie").length; 
}

startGame();
