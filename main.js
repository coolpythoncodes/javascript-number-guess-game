var userInput = document.getElementById("choice_box").innerText;
const form = document.querySelector("form");
var randomNumber = 0;

let win = 0;
let loss = 0;

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
let h3 = document.querySelector("h3");

const success = () => {
  win += 1;
  let h4 = document.querySelector("h4");
  h3.innerText = `Hurray!!! ${userInput} was the Correct guess.`;
  h4.innerText = ` ${win}`;
  // change the color of the choice box to green
  choicebox.style.backgroundColor = "#82e0aa";
  choicebox.style.color = "#ffffff";
  // show the correct number and change the color of the answer box
  answerbox.innerText = `${randomNumber}`;
  answerbox.style.backgroundColor = "#82e0aa";
  answerbox.style.color = "#ffffff";
};

const failed = () => {
  loss += 1;
  // let h3 = document.querySelector("h3");
  h3.innerText = `Sorry, ${userInput} was not the correct guess. Number of loss ${loss}`;
  // change the color of the choice box to off red
  choicebox.style.backgroundColor = "#f5b7b1";
  choicebox.style.color = "#ffffff";
  // show the correct number and change the color of the answer box
  answerbox.innerText = `${randomNumber}`;
  answerbox.style.backgroundColor = "#82e0aa";
  answerbox.style.color = "#ffffff";
};

document.getElementById("submit").addEventListener("click", () => {
  //e.preventDefault();
  userInput = document.getElementById("choice_box").innerText;

  const numbers = /^[0-9]*$/;
  // checking if user input is a number or if they didn't enter anything
  if (!numbers.test(userInput) || !userInput) {
    // if it's not, we want to stop all processes
    return;
  }

  if (userInput > 10) {
    h3.innerText = `You must enter a number between 1 and 10! ${userInput} is not valid. Try again!`;
    h3.style.color = "#ff1a12";
    return;
  }

  //var randomNumber = () => {
  //   return Math.round(Math.random() * 10);
  // };
  // the above function will generate different randoms in each place it is called
  // calling the function with ${randomNumber} will cast the function to a variable therefore printing the funtion as a string.

  // to fix this, we declare a global var randomNumber as seen at the top of the script, the we can alter the value from anywhere within the
  randomNumber = Math.round(Math.random() * 10);

  if (Number(userInput) === randomNumber) {
    success();
  } else {
    failed();
  }
});
