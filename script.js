const getUserChoice = userInput  => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error - please submit a valid input')
  }
}; 
function getComputerChoice(){
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice < 1) {
    return 'rock'
  } else if (computerChoice < 2) {
    return 'paper'
  } else {
    return 'scissors'
  }
}
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It was a tie!'
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'computer won!'
    } else {
      return 'user won!'
    }
  }
if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'computer won!'
    } else {
      return 'user won!'
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'computer won!'
    } else {
      return 'user won!'
    }
  }
  if (userChoice === 'bomb') {
    return 'bomb dropped! automatic win'
  }
}
const playGame = () => {
    let userChoice = getUserChoice('paper');
    let computerChoice = getComputerChoice()
    console.log(userChoice)
    console.log(computerChoice)
    console.log(determineWinner(userChoice, computerChoice))
  }
  playGame()
