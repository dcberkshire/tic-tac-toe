/*----- constants -----*/
//  Conventional case for constants is screaming snake case
const PLAYERS = {
    playerOne: 'red',
    playerTwo: 'blue',
};

const WINNING_COMBINATIONS = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

/*----- app's state (variables) -----*/
let currentPlayer;
let winState;
let moves;

/*----- cached element references -----*/
const gameBoard = document.querySelector('#grid');
const resetBtn = document.querySelector('button');

/*----- event listeners -----*/
gameBoard.addEventListener('click', handleClick);
resetBtn.addEventListener('click', init);

/*----- functions -----*/
function init() {
    // Initializes state variables at their starting value
    console.log('hello from reset btn');
    currentPlayer = PLAYERS.playerOne;
    winState = false;
    moves = [];
};

// Initialize the game by calling the init function
init();

function handleClick(event){
    console.log('hello from the game board');
    updateGameBoard(event);
    switchCurrentPlayer();
    // win logic?
};

function switchCurrentPlayer(){
    //toggles between players
    if (currentPlayer === PLAYERS.playerOne){
        currentPlayer = PLAYERS.playerTwo;
    } else {
        currentPlayer = PLAYERS.playerOne;
    }

};

function updateGameBoard(event){
    //adds the current player's token to the gameBoard
    if (event.target.classList.contains('box')){
        event.target.style.backgroundColor = currentPlayer;
        // event.target.innerText = currentPlayer;
    }
};
