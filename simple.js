// welcome message
const welcome = document.querySelector(".welcome span");
const start = document.querySelector(".start button");

start.addEventListener("click", function () {
  document.querySelector(".welcome").style.cssText =
    "padding:2rem;color:green;font-size:2rem";
  document.querySelector(".welcome").classList.add("dance");
  let welcomeName = prompt("Enter Your Name:");
  if (welcomeName === null || welcomeName === "") {
    welcome.innerHTML = `Welcome Player`;
  } else {
    welcome.innerHTML = `Welcome ${welcomeName}`;
  }

  document.querySelector(".start").remove();
});

// welcome message
// change color
body = document.querySelector(".container");
const change = document.getElementById("change");
change.onclick = function () {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  const color = `rgb(${red},${green},${blue})`;
  body.style.backgroundColor = color;
};
const change1 = document.getElementById("change1");
change1.addEventListener("click", function () {
  body.style.backgroundColor = "#e7e7e7";
});
// change color
// random names >>>>
const generate = document.getElementById("generate");
const nameInput = document.getElementById("name-input");
let randomNames = [
  "jesus",
  "mary",
  "mina",
  "michael",
  "mariam",
  "said",
  "justin",
  "marita",
  "george",
  "hulk",
];
generate.addEventListener("click", function () {
  let namesss = Math.floor(Math.random() * randomNames.length);
  let finalName = randomNames[namesss];
  nameInput.innerHTML = finalName;
  nameInput.style.cssText = "color:green;padding:1rem";
  nameInput.classList.add("dance");
});

// random names >>>>
// palindrome game ,.,.,.,.,,
const randomInput = document.getElementById("random-input");
const randomCheck = document.getElementById("random-check");
const randomBtn = document.getElementById("random-btn");

randomBtn.addEventListener("click", function () {
  const value = randomInput.value;
  const rev = wordReverse(value);
  if (value === rev && value !== "") {
    randomCheck.innerHTML = "correct";
  } else {
    randomCheck.innerHTML = "wrong";
  }
  randomInput.value = "";
});

function wordReverse(str) {
  return str.split("").reverse().join("");
}
// palindrome game ,.,.,.,.,,
// age calculation>>>>>>>>>>>>>
const daysButton = document.getElementById("days-btn");
const yearsButton = document.getElementById("years-btn");

const daysInput = document.getElementById("days-input");
const yearsInput = document.getElementById("years-input");

const aageInput = document.getElementById("age-input");
const ageReset = document.getElementById("age-reset");

daysButton.addEventListener("click", function () {
  const ageByDays = aageInput.value * 365;
  daysInput.innerHTML = ageByDays;
});
yearsButton.addEventListener("click", function () {
  const ageByHours = aageInput.value * 365 * 24;
  yearsInput.innerHTML = ageByHours;
});

ageReset.addEventListener("click", function () {
  aageInput.value = "";
  daysInput.innerHTML = "";
  yearsInput.innerHTML = "";
});
// age calculation>>>>>>>>>>>>>
// rock paper scissors GAME >>>>>>>>>>>>>>
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const rockResult = document.getElementById("rock-result");
const rockScore = document.getElementById("rock-score");
const rockReset = document.getElementById("rock-reset");
const rockChoice = document.getElementById("rock-choice");

const choices = ["rock", "paper", "scissors"];
function game(playerChoice) {
  const compuChoice = choices[Math.floor(Math.random() * 3)];

  const compare = (playerChoice, compuChoice) =>
    playerChoice === compuChoice
      ? "Draw 🤓"
      : (playerChoice === "rock" && compuChoice === "scissors") ||
        (playerChoice === "paper" && compuChoice === "rock") ||
        (playerChoice === "scissors" && compuChoice === "paper")
      ? "you win 😎"
      : "you lose 😌";
  finalResult = compare(playerChoice, compuChoice);

  rockResult.innerHTML = finalResult;
  rockResult.classList.add("dance");

  rockChoice.innerHTML = `you picked <img src="images/${playerChoice}.png" alt=""> , computer picked<img src="images/${compuChoice}.png" alt="">`;

  if (finalResult === "you win 😎") {
    score.win++;
  } else if (finalResult === "you lose 😌") {
    score.lose++;
  } else if (finalResult === "Draw 🤓") {
    score.draw++;
  }
  rockScore.innerHTML = `wins: ${score.win} , losses: ${score.lose} , draws: ${score.draw}`;

  rockReset.onclick = function () {
    score.win = 0;
    score.lose = 0;
    score.draw = 0;
    rockResult.innerHTML = "";
    rockChoice.innerHTML = "";
    rockScore.innerHTML = `wins: ${score.win} , losses: ${score.lose} , draws: ${score.draw}`;
  };
}

const score = {
  win: 0,
  lose: 0,
  draw: 0,
};
// rock paper scissors GAME >>>>>>>>>>>>>>
