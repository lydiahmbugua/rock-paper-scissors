const button=document.querySelector('button');
const rock=document.querySelector('#rock');
const paper=document.querySelector('#paper');
const scissors=document.querySelector('#scissors');

let humanScore=0;
let computerScore=0;
let isGameOver=false;




 

function getComputerChoice(){
  
    const num=Math.random()*10;
    let choice;
    if (num<=3){
        choice="Rock";
        
    }else if(num>3&&num<=6){
        choice="Paper";
    }else{
        choice="Scissors";
    }
    return choice;
}

function playGame(){
    const div=document.createElement('div');
    const para=document.createElement('p');
    const paragraph=document.createElement('p');
    para.classList.add('para');
    paragraph.classList.add('para');
    div.classList.add('div');
    div.appendChild(para);
    div.appendChild(paragraph);
    document.body.appendChild(div);

    
    function playRound(humanChoice, computerChoice){
        if(humanChoice==computerChoice){
            console.log("Draw!")
        }else if(humanChoice=="Rock"&& computerChoice=="Scissors"){
            humanScore++;
            console.log("You win! Rock beats Scissors")
        }else if(humanChoice=="Paper"&& computerChoice=="Rock"){
            humanScore++;
            console.log("You win! Paper beats Rock")
        }else if(humanChoice=="Scissors"&& computerChoice=="Paper"){
            humanScore++;
            console.log("You win! Scissors beats Paper")
        }else if(humanChoice=="Rock"&& computerChoice=="Paper"){
            computerScore++;
            console.log("You lose! Paper beats Rock")
        }else if(humanChoice=="Paper"&& computerChoice=="Scissors"){
            computerScore++;
            console.log("You lose! Scissors beats Paper")
        }else if(humanChoice=="Scissors"&& computerChoice=="Rock"){
            computerScore++;
            console.log("You lose! Rock beats Scissors")
        }
        
        
        
    }
   
    

     rock.addEventListener('click',function (e){
        if(isGameOver==true){return}
        let computerSelection=getComputerChoice();
        playRound('Rock',computerSelection);
        para.textContent='You: Rock | Score: '+humanScore;
        paragraph.textContent=' Computer: '+computerSelection; 
        if(humanScore==5){
        paragraph.textContent='YOU WIN!!'
        isGameOver=true;
    }if(computerScore==5){
        paragraph.textContent='You lose.'
        isGameOver=true;
    }
    
   })

   paper.addEventListener('click',function (e){
        let computerSelection=getComputerChoice();
        playRound( "Paper",computerSelection);
        para.textContent='You: Paper  | Score: '+humanScore;
        paragraph.textContent=' Computer: '+computerSelection; 
        if(humanScore==5){
        paragraph.textContent='YOU WIN!!'
        isGameOver=true;
    }if(computerScore==5){
        paragraph.textContent='You lose.'
        isGameOver=true;
    }
    
   })

   scissors.addEventListener('click',function (e){
        let computerSelection=getComputerChoice();
        playRound( "Scissors",computerSelection);
        para.textContent='You: Scissors  | Score: '+humanScore;
        paragraph.textContent=' Computer: '+computerSelection;  
        if(humanScore==5){
        paragraph.textContent='YOU WIN!!'
        isGameOver=true;
    }if(computerScore==5){
        paragraph.textContent='You lose.'
        isGameOver=true;
    } 

    
   })
  
        
}

playGame();