//Game will play against computer

//function => computerPlay (This is the computer making a selection)
//Return Rock, Paper, Or Scissors

function computerPlay(){
    let selection =Math.floor(Math.random()*3+1);

    switch (selection){
        case (1):
            return "Rock";
        case (2):
            return "Paper";
        case (3):
            return "Scissors";
    }
};


//Play single round
//Paramters: playerSelection, computerSelection
//return string, winner of round
//selection is case insensitive

//game () = > 5 round game
//keeps score
//reports winner or loser
