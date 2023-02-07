const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log("ERROR: Please enter a valid input");
  }
}

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return 'rock';
  }
  if (randomNumber === 1) {
    return 'paper';
  }
  if (randomNumber === 2) {
    return 'scissors';
  }
}

// console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a tie';
  }
  
  if (userChoice === 'bomb') {
    return 'You used the secret cheatcode ----> instant win';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins';
    } else return 'User wins';
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer wins';
    } else return 'User wins';
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins';
    } else return 'User wins';
  }
}

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  console.log(`You threw: ${userChoice}`);

  const computerChoice = getComputerChoice();
  console.log(`The Computer threw: ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
