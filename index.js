let messageEl = document.getElementById("message-el");

let cards = [];
let sum = 0;
//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el");
let message = "";
let newCardEl = document.querySelector("#newcard-el")
let reload = document.getElementById("refresh")
let startEl = document.querySelector("#start") 

let player = { name: "per", chips: 200 };

let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.name + ": $" + player.chips;


window

function getRandomCard() {
  return (randomNumber = Math.floor(Math.random() * 13));
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  let card1 = getRandomCard();
  let card2 = getRandomCard();
  cards = [card1, card2];
  sum = card1 + card2;
  renderGame();
  newCardEl.classList.remove("stop")
  startEl.innerHTML="START GAME"
  if(sum>=21){
    newCardEl.classList.add("stop")
  }
}

function renderGame() {
  sumEl.textContent = "sum:" + " " + sum;
  cardEl.textContent = "Card: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.innerHTML += " " + cards[i];
  }
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = " You've got blackjack.";
  } else {
    message = "You are out of the game.";
  }
  messageEl.textContent = message;
}

function newCard() {
  let card = getRandomCard();
  cards.push(card);
  sum += card;
  renderGame();
  
  if (sum>21  || sum ===21) {
newCardEl.classList.add("stop")
startEl.innerHTML="RESTART"
  }
}


