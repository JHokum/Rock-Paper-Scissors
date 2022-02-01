let playerScore = 0;
let computerScore = 0;



//Game will play against computer

//function => computerPlay (This is the computer making a selection)
//Return Rock, Paper, Or Scissors


function computerPlay(){
    let selection =Math.floor(Math.random()*3+1);

    switch (selection){
        case (1):
            return "rock";
        case (2):
            return "paper";
        case (3):
            return "scissors";
    }
};

//Score helper function
//accepts decision and variables to be updated
function keepScore(decision){
    switch(decision){
        case("Player Wins!"):
            playerScore++;
            break;
        
        case("Computer Wins!"):
            computerScore++;
            break;
        
        default:
            null;
    }
}

//testing helper function
function decider(player, computer){
    
    switch(player){
        case("rock"):{
            if(computer=="rock"){
                return "TIE";
            }
            else{
              return  (computer=="scissors") ? "Player Wins!" : "Computer Wins!";
            }
            break;
        }
        case("paper"):{
            if(computer=="paper"){
                return "TIE";
            }
            else{
              return  (computer=="rock") ? "Player Wins!" : "Computer Wins!";
            }
            break;
        }
        case("scissors"):{
            if(computer=="scissors"){
                return "TIE";
            }
            else{
              return  (computer=="paper") ? "Player Wins!" : "Computer Wins!";
            }
            break;
        }
        default:
            return "Something went horribly wrong";
    }
}


//Play single round
function singleRound(playerSelection , computerSelection = computerPlay()){
    
    return decider(playerSelection.toLowerCase(), computerSelection);

}

//Paramters: playerSelection, computerSelection
//return string, winner of round
//selection is case insensitive

//game () = > 5 round game
function game(playerDecision){
   

    decision =singleRound(playerDecision); //Decision holds round results

    keepScore(decision); // updates score
   
    if (playerScore == computerScore){
        alert("Computer and Player are equals, well fought!");
    }
    else if(playerScore>computerScore){
        
        alert("Player has won it all!");
    }
    else{
        
        alert("Computer has proven itself against man!");
    }
}
//Init buttons array
const buttons = Array.from(document.querySelectorAll("button"));
//Add event listener to each button
buttons.forEach(button => button.addEventListener("click",function (e){
   game(e.target.textContent);
}))
