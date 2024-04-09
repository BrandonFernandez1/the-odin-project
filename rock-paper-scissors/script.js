function getComputerChoice()
{
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getPlayerChoice()
{
    moves = ["rock","paper","scissors"];

    let input;
    do {
        input = prompt("Pick rock/paper/scissors: ").toLowerCase();

        if (!moves.includes(input)) {
            console.log("Please input a correct move");
        }
    } while (!moves.includes(input))
    
    return input;
}

function playRound(playerSelection, computerSelection)
{
    //1 for player win, 2 for computer win, 3 for draw.

    if (playerSelection == computerSelection) {
        console.log(`Draw! You both chose ${playerSelection}`)
        return 3;
    }
    else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            console.log("You Lose! Paper beats Rock")
            return 2;
        }
        else if (computerSelection == "scissors") {
            console.log("You Win! Rock beats Scissors")
            return 1;
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            console.log("You Win! Paper beats Rock")
            return 1;
        }
        else if (computerSelection == "scissors") {
            console.log("You Lose! Scissors beats Paper")
            return 2;
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            console.log("You Win! Scissors beats Paper")
            return 1;
        }
        else if (computerSelection == "rock") {
            console.log("You Lose! Rock beats Scissors")
            return 2;
        }
    }
}

function main()
{
    let gameOver = false;
    let playerScore = 0;
    let computerScore = 0;

    while (!gameOver)
    {
        if (playerScore == 3 || computerScore == 3) {
            gameOver = true;
        }

        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();

        let gameResult = playRound(playerChoice, computerChoice);
        
        switch (gameResult) {
            case 1:
                playerScore++;
                break;
            case 2:
                computerScore++;
                break;
            case 3:
                return "Draw"; //Figure out what to put in the case of draw.
        }
        console.log(`Current score: Player: ${playerScore} - Computer ${computerScore}`);
    }

    if (playerScore > computerScore) {
        console.log(`You win! ${playerscore} - ${computerScore}`);
    }
    else if (playerScore < computerScore) {
        console.log(`You lose :( ${playerScore} - ${computerScore}`);
    }
}

main()
