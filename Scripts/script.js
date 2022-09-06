const firstNumber = Math.ceil(Math.random() * 10);
const secondNumber = Math.ceil(Math.random() * 10);

document.querySelector(".first-number").textContent = firstNumber;
document.querySelector(".second-number").textContent = secondNumber;

let score = JSON.parse(localStorage.getItem("score"));
let highScore = JSON.parse(localStorage.getItem("highScore"));

if (!score) {
  score = 0;
}

if (!highScore) {
  highScore = 0;
}

document.querySelector(".score").textContent = score;
document.querySelector(".high-score").textContent = highScore;

let result = firstNumber * secondNumber;

document.querySelector("#submit").addEventListener("click", (e) => {
  const userAnswer = Number(document.querySelector("#answer").value);

  if (result == userAnswer) {
    score++;
    updateScore();
  } else {
    score--;
    updateScore();
  }
  if (score > highScore) {
    highScore = score;
    updateHighScore();
  }
});

document.querySelector("#finish").addEventListener("click", () => {
  if (score > highScore) {
    highScore = score;
    updateHighScore();
  }
  score = 0;
  updateScore();
});

const updateScore = () => {
  localStorage.setItem("score", JSON.stringify(score));
};

const updateHighScore = () => {
  localStorage.setItem("highScore", JSON.stringify(highScore));
};
