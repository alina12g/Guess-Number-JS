const container = document.getElementById("container");

const h1 = document.createElement("h1");
h1.textContent = "Guess the number";
container.appendChild(h1);

const input = document.createElement("input");
input.setAttribute("type", "number");
input.onchange = "limitInputNum(this)";
input.className = "input";
input.addEventListener("change", function () {
  let value = parseInt(this.value);
  if (value < 1) this.value = 1;
  if (value > 20) this.value = 20;
});
input.addEventListener("input", (e) => {
  let { value } = e.target;
});

// const limitNum = function limitInputNum(input) {
//   if (input.value < 1) input.value = 1;
//   if (input.value > 20) input.value = 20;
// };

function randomNum(minNum, maxNum) {
  return Math.floor(Math.random() * maxNum) + minNum;
}

container.appendChild(input);

const button = document.createElement("button");
button.textContent = "Let's guess";
button.className = "btn";
container.appendChild(button);

// button.addEventListener("submit", function (e) {
//   e.preventDefault();
// });

const randomNumber = randomNum();
document.getElementsByClassName("input").innerHTML = randomNumber;
//
button.addEventListener("click", () => {
  randomNumber = randomNum(1, 20);
  guessedNumber.innerText = randomNumber;
});
//the guess

const div = document.createElement("div");
div.id = "div";

const h2 = document.createElement("h2");
h2.textContent = "This is my guess";
div.appendChild(h2);

let guessedNumber = document.createElement("p");
guessedNumber.className = "guessedNumber";
guessedNumber.textContent = "0";
div.appendChild(guessedNumber);
document.body.appendChild(div);

const divBtns = document.createElement("div");
divBtns.id = "btnsDiv";

const correct = document.createElement("button");
correct.textContent = "Correct";
correct.className = "btn-correct";
correct.id = "clickCorrect";
divBtns.appendChild(correct);

correct.onclick = CounterClicks;

let countCorrect = 0;
function CounterClicks() {
  countCorrect += 1;
  clickCorrect.innerHTML = countCorrect;
}

const wrong = document.createElement("button");
wrong.textContent = "Wrong";
wrong.className = "btn-wrong";
wrong.id = "clickWrong";
divBtns.appendChild(wrong);

wrong.onclick = CounterW;

let countWrong = 0;
function CounterW() {
  countWrong += 1;
  clickWrong.innerHTML = countWrong;
}

const message = document.createElement("p");

document.body.appendChild(divBtns);

let guessCount = 1;
function checkGuess() {
  let userGuess = Number(input.value);
  if (guessCount == 1) {
    guessedNumber.textContent = "Previous guesses : ";
  }
  guessedNumber.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
  }
}
