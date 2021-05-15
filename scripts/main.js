let playerMove = "none";
let playerScore = 0;
let cpuScore = 0;

const winnerObject = {};
 
winnerObject["rock"] = "paper";
winnerObject["paper"] = "scissors";
winnerObject["scissors"] = "rock";

const rockButton = document.getElementById("playerRock");
const paperButton = document.getElementById("playerPaper");
const scissorsButton = document.getElementById("playerScissors");
const confirmButton = document.getElementById("confirmationButton");

const playerwins = document.getElementById("playerscoreNumber");
const cpuwins = document.getElementById("cpuscoreNumber");

const playerSelection = document.getElementById('showPlayerMove');
const cpuSelection = document.getElementById('showCpuMove');
const whoWins = document.getElementById('winner');


// Player selection button / images
rockButton.addEventListener("click" , ()=>{
    console.log("player selected: rock");
    playerMove = "rock"; 
    
})

paperButton.addEventListener("click" , ()=>{
    console.log("player selected: paper");
    playerMove = "paper";
})

scissorsButton.addEventListener("click" , ()=>{
    console.log("player selected: scissors");
    playerMove = "scissors";

})


// comparing player and cpu choices

confirmButton.addEventListener("click", () =>{



    // Choosing cpu's selection
    let cpuMove = ['rock', 'paper' , 'scissors'];
    let randomSelection = cpuMove[Math.floor(Math.random() * cpuMove.length)];
    console.log('confirmed player move:'+ playerMove);
    console.log('cpu selection: '+randomSelection);

    playerSelection.innerHTML = playerMove;
    cpuSelection.innerHTML = randomSelection;
    
    if(playerMove === randomSelection){
        console.log('Its a draw');
        console.log('playerScore: '+playerScore+ ',  cpuScore: '+cpuScore);
        whoWins.innerHTML = 'No one';
    }
    else if(playerMove === winnerObject[randomSelection]){
        console.log('Player wins');
        playerScore++;
        console.log('playerScore: '+playerScore+ ',  cpuScore: '+cpuScore);
        whoWins.innerHTML = 'Player';
    }
    else{
        console.log('cpu wins');
        cpuScore++;
        console.log('playerScore: '+playerScore+ ',  cpuScore: '+cpuScore);
        whoWins.innerHTML = 'Cpu';
    }

    // Updating scoreboard
    playerwins.innerHTML = playerScore;
    cpuwins.innerHTML = cpuScore;

})




