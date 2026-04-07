



function getComputerChoice(){
    /*
    -Function needs to randomly choose between rock, paper and scissors.
        1. Get a random number
        2. Decide which of the three the outcome of random number changes to.
        3. Display result to the console.
     */

    const num=Math.random()*10;
    let choice;
    if (num<=3){
        choice="Rock";
        console.log("Rock");
    }else if(num>3&&num<=6){
        choice="Paper";
        console.log("Paper");
    }else{
        choice="Scissors";
        console.log("Scissors");
    }
    return choice;
}
function getHumanChoice(){
    /*
    -Function needs to get user input for the game.
        1.Prompt user
        2.Display user input
     */

    let input=prompt("Choose: Rock, Paper, Scissors")
    
    console.log(input);

    if (input==="Rock"){
        console.log("Rock");
    }else if(input==="Paper"){
        console.log("Paper");
    }else if(input==="Scissors"){
        console.log("Scissors");
    }
    return input;
}



function playGame(){
    let humanScore=0;
    let computerScore=0;
    let counter=0;
    function playRound(humanChoice, computerChoice){
        counter++;

        if(humanChoice.toLowerCase()==computerChoice.toLowerCase()){
            
            console.log("Draw!")
        }else if(humanChoice.toLowerCase()=="rock"&& computerChoice.toLowerCase()=="scissors"){
            humanScore++;
            
            console.log("You win! Rock beats Scissors")
        }else if(humanChoice.toLowerCase()=="paper"&& computerChoice.toLowerCase()=="rock"){
            humanScore++;
            
            console.log("You win! Paper beats Rock")
        }else if(humanChoice.toLowerCase()=="scissors"&& computerChoice.toLowerCase()=="paper"){
            humanScore++;
            console.log("You win! Scissors beats Paper")
        }else if(humanChoice.toLowerCase()=="rock"&& computerChoice=="paper"){
            computerScore++;
            console.log("You lose! Paper beats Rock")
        }else if(humanChoice.toLowerCase()=="paper"&& computerChoice.toLowerCase()=="scissors"){
            computerScore++;
            console.log("You lose! Scissors beats Paper")
        }else if(humanChoice.toLowerCase()=="scissors"&& computerChoice.toLowerCase()=="rock"){
            computerScore++;
            console.log("You lose! Rock beats Scissors")
        }
        
        console.log("You: "+humanScore)
        console.log("Computer: "+computerScore)
        
    }

    const computerSelection=getComputerChoice();
    const humanSelection=getHumanChoice();
        playRound(computerSelection,humanSelection);

    /* 
    Need to repeat the round 5 times
    -1. Start a counter
    -2. If counter is <=5, reset game.
    -3. Display winner
    */
  
   
        
}

playGame();