const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

let humanScore = 0;
let computerScore = 0;
let isGameOver = false;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playGame() {

    const scoreboard = document.createElement('div');
    scoreboard.style.border = "2px solid #333";
    scoreboard.style.padding = "20px";
    scoreboard.style.marginTop = "20px";
    scoreboard.style.textAlign = "center";

    // 2. Create individual elements for specific data
    const scoreDisplay = document.createElement('h2');
    scoreDisplay.textContent = `Player: 0 | Computer: 0`;

    const roundResult = document.createElement('p');
    roundResult.textContent = "First to 5 wins! Make your move.";
    roundResult.style.fontStyle = "italic";

  
    scoreboard.appendChild(scoreDisplay);
    scoreboard.appendChild(roundResult);
    document.body.appendChild(scoreboard);

    function playRound(humanChoice, computerChoice) {
        let resultMessage = "";

        if (humanChoice === computerChoice) {
            resultMessage = `It's a draw! Both chose ${humanChoice}`;
        } else if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")
        ) {
            humanScore++;
            resultMessage = `Point for you! ${humanChoice} beats ${computerChoice}`;
        } else {
            computerScore++;
            resultMessage = `Point for computer! ${computerChoice} beats ${humanChoice}`;
        }

        // Update the display
        scoreDisplay.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
        roundResult.textContent = resultMessage;

        checkWinner();
    }

    function checkWinner() {
        if (humanScore === 5 || computerScore === 5) {
            isGameOver = true;
            roundResult.style.fontWeight = "bold";
            roundResult.style.fontSize = "1.5rem";
            
            if (humanScore === 5) {
                roundResult.textContent = "🏆 GAME OVER: YOU ARE THE CHAMPION!";
                roundResult.style.color = "green";
            } else {
                roundResult.textContent = "🤖 GAME OVER: THE MACHINE HAS WON!";
                roundResult.style.color = "red";
            }
        }
    }

    
    const handleBtnClick = (choice) => {
        if (isGameOver) return;
        const computerSelection = getComputerChoice();
        playRound(choice, computerSelection);
    };

    rock.addEventListener('click', () => handleBtnClick("Rock"));
    paper.addEventListener('click', () => handleBtnClick("Paper"));
    scissors.addEventListener('click', () => handleBtnClick("Scissors"));
}

playGame();