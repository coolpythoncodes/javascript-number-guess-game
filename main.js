let userInput = document.getElementById("choice_box").innerText;
const form = document.querySelector("form");
var randomNumber = 0;
const lowerNumberLimit = 1;
const upperNumberLimit = 10;
const successColor = '#82e0aa';
const errorColor = '#f5b7b1';

let win = 0;
let loss = 0;

// set number limit values to display on view
document.getElementById('lowerNumberLimit').innerText = lowerNumberLimit;
document.getElementById('upperNumberLimit').innerText = upperNumberLimit;
document.getElementById('choice_box').innerText = lowerNumberLimit;

// re-enforce box color
choicebox = document.getElementById("choice_box");
answerbox = document.getElementById("answer_box");
choicebox.onclick = function () {
  this.style.backgroundColor = "#ffffff";
  this.style.color = "#515a5a";

  answerbox.style.backgroundColor = "#ffffff";
  answerbox.style.color = "#99a3a4";
  answerbox.innerText = `?`;
};

$(document).ready(function () {
  setTimeout(function () {
    if (userInput.length < 1) {
      alert("You have not entered any number yet!!");
    }
  }, 5100);
});

const success = () => {
  win += 1;
  
  let h3 = document.querySelector("h3");
  let h4 = document.querySelector("h4");
  h3.innerText = `Hurray!!! ${userInput} was the Correct guess.`;
  h4.innerHTML = `<span style="color: ${successColor}">Wins: ${win}</span></br><span style="color: ${errorColor}">Losses: ${loss}</span>`;
  // change the color of the choice box to green
  choicebox.style.backgroundColor = successColor;
  choicebox.style.color = '#ffffff';
  // show the correct number and change the color of the answer box
  answerbox.innerText = `${randomNumber}`;
  answerbox.style.backgroundColor = successColor;
  answerbox.style.color = '#ffffff';
};

const failed = () => {
  loss += 1;
  let h3 = document.querySelector("h3");
  let h4 = document.querySelector("h4");
  h3.innerText = `Sorry, ${userInput} was not the correct guess.`;
  h4.innerHTML = `<span style="color: ${successColor}">Wins: ${win}</span></br><span style="color: ${errorColor}">Losses: ${loss}</span>`;
  // change the color of the choice box to off red
  choicebox.style.backgroundColor = errorColor;
  choicebox.style.color = '#ffffff';
  // show the correct number and change the color of the answer box
  answerbox.innerText = `${randomNumber}`;
  answerbox.style.backgroundColor = errorColor;
  answerbox.style.color = '#ffffff';
};

document.getElementById('choice_box').addEventListener("input", (event) => {
  const { innerText: value } = event.target;
  const valInNumber = +value;
  if (value === '' || (!isNaN(valInNumber) && value >= lowerNumberLimit && value < upperNumberLimit)) {
    return;
  }
  event.target.innerText = 1;
}, false);

document.getElementById('submit').addEventListener("click", () => {
  userInput = document.getElementById('choice_box').innerText;

  //var randomNumber = () => {
  //   return Math.round(Math.random() * 10);
  // };
  // the above function will generate different randoms in each place it is called
  // calling the function with ${randomNumber} will cast the function to a variable therefore printing the funtion as a string.

  // to fix this, we declare a global var randomNumber as seen at the top of the script, the we can alter the value from anywhere within the 
  randomNumber = Math.floor(Math.random() * (upperNumberLimit - 1)) + lowerNumberLimit;

  if (Number(userInput) === randomNumber) {
    success();
  } else {
    failed();
  }
});
