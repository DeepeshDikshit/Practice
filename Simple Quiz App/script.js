[{
   questions: "what is html stand for",
   options: ["hyper text markup language ", "hsabduiejmdodk", "usdahhdiwbdkwdkh", "eywgdywgdihfiugb"],
   answer: "hyper text markup language"
},
{
   questions: "what is html stand for",
   options: ["hyper text markup language ", "hsabduiejmdodk", "usdahhdiwbdkwdkh", "eywgdywgdihfiugb"],
   answer: "hyper text markup language"
},
{
   questions: "what is html stand for",
   options: ["hyper text markup language ", "hsabduiejmdodk", "usdahhdiwbdkwdkh", "eywgdywgdihfiugb"],
   answer: "hyper text markup language"
},
{
   questions: "what is html stand for",
   options: ["hyper text markup language ", "hsabduiejmdodk", "usdahhdiwbdkwdkh", "eywgdywgdihfiugb"],
   answer: "hyper text markup language"
},
{
   questions: "what is html stand for",
   options: ["hyper text markup language ", "hsabduiejmdodk", "usdahhdiwbdkwdkh", "eywgdywgdihfiugb"],
   answer: "hyper text markup language"
},
{
   questions: "what is html stand for",
   options: ["hyper text markup language ", "hsabduiejmdodk", "usdahhdiwbdkwdkh", "eywgdywgdihfiugb"],
   answer: "hyper text markup language"
}]

let currentQuestion = 0;
let score = 0;

const questionEle = document.getElementById("Question");
const optionsEle = document.getElementById("options");
const nextBtnEle = document.getElementById("nextBtn");
const resultEle = document.getElementById("result");

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