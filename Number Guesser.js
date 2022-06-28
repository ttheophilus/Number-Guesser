let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget = () => {
        return Math.floor(Math.random() * 9);

        let compareGuesses = (human, computer, target) => {
            const userGuess = Math.abs(target - human);
            const computerGuess = Math.abs(target - computer);
            return userGuess <= computerGuess;

            if (userGuess <= computerGuess) {
                updateScore('human');
            } else {
                updateScore('computer');
            }
        };


        let updateScore = winner => {
            if (winner === 'human') {
                humanScore += 1;
            } else if (winner === 'computer') {
                computerScore += 1;
            }
        };


        function advanceRound() {
            currentRoundNumber += 1;
        };