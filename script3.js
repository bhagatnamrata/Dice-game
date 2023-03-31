"use strict";
// Selecting elements-
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const score0El = document.querySelector("#score--0");//OR
const score1El = document.getElementById("score--1");//this one is faster-
const currentscore0El = document.getElementById("current--0")
const currentscore1El = document.getElementById("current--1")
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");


score0El.textContent = 0;
score1El.textContent = 0;//we taken score into variables and set them to zero
// hide the dice -- bcz  dice will come after rolling the dice
diceEl.classList.add("hidden");
// const scores = [0, 0];//array for storing data of both players
// let currentScore = 0; // it needs to be outside bcz then if
// //    its inside the eventhandler then every   time for click it will get set to zero again and again--
// let activePlayer = 0;//player0 is playing
// let playing = true;//OR
let scores,currentScore,activePlayer,playing;
//initialization function---
const init =function(){
 
     scores = [0, 0];
     currentScore = 0;
     activePlayer = 0;
     playing = true;
    
    score0El.textContent=0;
    score1El.textContent=0;
    currentscore0El.textContent=0;
    currentscore1El.textContent=0;
    diceEl.classList.add("hidden");
    player0El.classList.remove("player--winner");
    player1El.classList.remove("player--winner");
    player0El.classList.add("player--active");//no need to remove it from zero number bcz it will be active for next game
    player1El.classList.remove("player--active");
 
}
init();

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
}

/////////rolling a dice--- generate the random dice ---displaydice to the roll--check if its 1 or not--
//rolling dice functionality--
btnRoll.addEventListener("click", function () {
    if (playing) {
        // 1. generating random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
        //2. display dice roll
        diceEl.classList.remove("hidden");
        diceEl.src = `dice-${dice}.png`;
        //3.check if its 1:if true, switch the player-
        if (dice != 1) {
            //add dice to current score--
            currentScore += dice;
            console.log(currentScore);
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;//OR
            //    currentscore0El.textContent= currentScore;

        }
        else {
            // when score is 1 ,change the currentscore of player0 to "0". 
            //switch the player--
            // document.getElementById(`current--${activePlayer}`).textContent = 0;
            // activePlayer = activePlayer === 0 ? 1 : 0;
            // currentScore = 0;
            // player0El.classList.toggle("player--active");
            // player1El.classList.toggle("player--active");//OR
            switchPlayer();
        }
    }
});
/////////Holding the score--

btnHold.addEventListener("click", function () {
    if (playing){
    //1.Add currentscore to active player's score 

    scores[activePlayer] += currentScore;
    // scores[1]=scores[1]+currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    //2. check score >=100
    if (scores[activePlayer] >= 20) {
        //finish the game 
        playing = false;// set playing false--
        diceEl.classList.add("hidden");

        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
        document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");

    }
    else {
        //3.switch the player--
        // document.getElementById(`current--${activePlayer}`).textContent = 0;
        // activePlayer = activePlayer === 0 ? 1 : 0;
        // currentScore = 0;
        // player0El.classList.toggle("player--active");
        // player1El.classList.toggle("player--active");//OR
        switchPlayer();
    }
}
});
///////Reseting all conditions--
btnNew.addEventListener("click",
    // score0El.textContent=0;
    // score1El.textContent=0;
    // currentscore0El.textContent=0;
    // currentscore1El.textContent=0;
    // player0El.classList.remove("player--winner");
    // player1El.classList.remove("player--winner");
    // player0El.classList.add("player--active");//no need to remove it from zero number bcz it will be active for next game
    // player1El.classList.remove("player--active");////OR
init
    );
