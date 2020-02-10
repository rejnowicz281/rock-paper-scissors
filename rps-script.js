let playerPoints = 0;
let computerPoints = 0;

function computerPlay() {
  let rng = Math.floor(Math.random() * 3);
  return (rng == 0) ? "Rock" :
    (rng == 1) ? "Paper" :
      (rng == 2) ? "Scissors" :
        false;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    alert(
      `
       Player choice: ${playerSelection}
       Computer choice: ${computerSelection}
       Draw! 
       Current Score: P ${playerPoints} - C ${computerPoints}
      `
    );
  } else if (
    playerSelection === "Rock" && computerSelection === "Scissors" ||
    playerSelection === "Paper" && computerSelection === "Rock" ||
    playerSelection === "Scissors" && computerSelection === "Paper"
  ) {
    playerPoints++;
    alert(
      `
       Player choice: ${playerSelection}
       Computer choice: ${computerSelection}
       Player wins this round! 
       Current Score: P ${playerPoints} - C ${computerPoints}
      `
    );
  } else if (
    computerSelection === "Rock" && playerSelection === "Scissors" ||
    computerSelection === "Paper" && playerSelection === "Rock" ||
    computerSelection === "Scissors" && playerSelection === "Paper"
  ) {
    computerPoints++;
    alert(
      `
       Player choice: ${playerSelection}
       Computer choice: ${computerSelection}
       Computer wins this round! 
       Current Score: P ${playerPoints} - C ${computerPoints}
      `
    );
  } else {
    alert("There's been a mistake.");
  }
}