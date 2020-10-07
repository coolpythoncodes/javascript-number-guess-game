// const userInput = document.querySelector('input[type="number"]');
var userInput = document.getElementById('choice_box').innerText;
const form = document.querySelector("form");
// var randomNumber = 0;

let win = 0;
let loss = 0;

// re-enforce box color
choicebox = document.getElementById('choice_box');
answerbox = document.getElementById('answer_box');
choicebox.onclick = function() {
  this.style.backgroundColor = '#ffffff';
  this.style.color = '#515a5a';

  answerbox.style.backgroundColor = '#ffffff';
  answerbox.style.color = '#99a3a4';
  answerbox.innerText = `?`;
}

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
  h4.innerText= ` ${win}`;
  // change the color of the choice box to green
  choicebox.style.backgroundColor = '#82e0aa';
  // show the correct number and change the color of the answer box
  answerbox.innerText = `${randomNumber()}`;
  answerbox.style.backgroundColor = '#82e0aa';
  answerbox.style.color = '#ffffff';
};

const failed = () => {
  loss += 1;
  let h3 = document.querySelector("h3");
  h3.innerText = `Sorry, ${userInput} was not the correct guess. Number of loss ${loss}`;
  // change the color of the choice box to off red
  choicebox.style.backgroundColor = '#f5b7b1';
  choicebox.style.color = '#ffffff';
  // show the correct number and change the color of the answer box
  answerbox.innerText = `${randomNumber()}`;
  answerbox.style.backgroundColor = '#82e0aa';
  answerbox.style.color = '#ffffff';
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  userInput = document.getElementById('choice_box').innerText;

  randomNumber = () => {
    return Math.round(Math.random() * 10);
  };

  if (Number(userInput) === randomNumber()) {
    success();
    //userInput = 0; this line is not doing anything
  }
  else {
    failed();
    //userInput = 0; this line is not doing anything
  }
});
