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
        }
        case("paper"):{
            if(computer=="paper"){
                return "TIE";
            }
            else{
              return  (computer=="rock") ? "Player Wins!" : "Computer Wins!";
            }
        }
        case("scissors"):{
            if(computer=="scissors"){
                return "TIE";
            }
            else{
              return  (computer=="paper") ? "Player Wins!" : "Computer Wins!";
            }
        }
    }
}


//Play single round
function singleRound(playerSelection = prompt("Select your Warrior"), computerSelection = computerPlay()){
    
    return decider(playerSelection.toLowerCase(), computerSelection);

}

//Paramters: playerSelection, computerSelection
//return string, winner of round
//selection is case insensitive

//game () = > 5 round game
function game(){
    let playerScore = 0;
    let computerScore = 0;
    let round = 1;
    for (round; round<=5; round++){
        alert(`Round ${round}: ${singleRound()}`);
    }
}
//keeps score
//reports winner or loser
