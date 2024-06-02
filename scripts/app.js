const gameData = [
[0,0,0],
[0,0,0],
[0,0,0],
];
let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;
const players =[
    {
        name:"",
        symbol:"X"
    },
    {
        name:"",
        symbol:"O"
    }
];

const editPlayer1Btn = document.getElementById("player-1-edit");
const editPlayer2Btn = document.getElementById("player-2-edit");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");
const gameAreaElement = document.getElementById("active-game");
const activePlayerNameElement = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");
const activePlayerElement = document.getElementById("active-player-name").parentElement;


const playerConfigOverlay = document.getElementById("config-overlay");
const backdropElement = document. getElementById("backdrop");
const cancelConfigBtn = document.getElementById("cancel-config-btn");
const startNewGameBtnElement = document.getElementById("start-game-btn");
const gameFieldElements = document.querySelectorAll("#game-board li");


editPlayer1Btn.addEventListener("click",openPlayerConfig);
editPlayer2Btn.addEventListener("click",openPlayerConfig);
cancelConfigBtn.addEventListener("click",closePlayerConfig);

formElement.addEventListener("submit",savePlayerConfig);

startNewGameBtnElement.addEventListener("click",startNewGame);

for(const gamefieldElement of gameFieldElements){
    gamefieldElement.addEventListener("click",selectGameField);
}