let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// Step 3: Generate a random number from 0 to 9
const generateTarget = () => {
    return Math.floor(Math.random() * 9);
}

// Step 6 part 1: Declare new function for absoulte value
const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2);
}

// Step 4: Compare the guesses and declare a winner
const compareGuesses = (user, computer, secret) => {
    //let userVal = Math.abs(user - secret);
    //let computerVal = Math.abs(computer - secret);

    if (user < 0 || user > 9) {
        window.alert("You must select a number between 0 and 9. Please try again.");
    }else if (getAbsoluteDistance(user, secret) <= getAbsoluteDistance(computer, secret)) {
        return true;
    } else {
        return false;
    }
};

// Step 5: Update the score of whomever wins
const updateScore = (winner) => {
    switch (winner) {
        case "human":
            humanScore ++;
            break;
        default:
            computerScore ++;
            break;
    }
};

// Step 6: Have round increase with each guess
const advanceRound = () => {
    currentRoundNumber ++; 
}