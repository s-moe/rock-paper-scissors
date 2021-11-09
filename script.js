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