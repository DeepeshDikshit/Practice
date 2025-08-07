const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["HyperText Machine Language", "HyperText Markup Language", "HighText Markup Language", "Hyperloop Markup Language"],
    answer: "HyperText Markup Language"
  },
  {
    question: "Which tag is used for inserting a line break?",
    options: ["<br>", "<lb>", "<break>", "<line>"],
    answer: "<br>"
  },
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Creative Style Syntax", "Computer Style Sheets", "Colorful Style Sheets"],
    answer: "Cascading Style Sheets"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

function showQuestion() {
  const quiz = quizData[currentQuestion];
  questionEl.textContent = quiz.question;
  optionsEl.innerHTML = "";

  quiz.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => selectOption(option));
    optionsEl.appendChild(button);
  });
}

function selectOption(selected) {
  const correct = quizData[currentQuestion].answer;
  if (selected === correct) {
    score++;
  }
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").classList.add("hide");
  nextBtn.classList.add("hide");
  resultEl.textContent = `You scored ${score} out of ${quizData.length}!`;
  resultEl.classList.remove("hide");
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
});

showQuestion();