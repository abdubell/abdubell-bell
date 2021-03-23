const questions = document.querySelector(".questions");
// const choices = array.from(document.querySelectorAll(".options"));

const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");
const optionD = document.getElementById("optionD");

const allOptions = document.querySelectorAll(".options");
// const scoreMoney = document.querySelector(".score-1");

let allOptionsArray = Array.prototype.slice.call(allOptions);
let acceptingAnswers = false;
let score = 0;
let availableQuestions = [];
// let number = 1;

let timer = 15;
let warning = 9;
let elem = document.querySelector(".timer");

const timerId = setInterval(countdown, 1000);
//  if (acceptingAnswers = true) {
//     loadQuiz();
// }else{

// }

function countdown() {
  elem.textContent = timer;
  timer = timer - 1;
  if (timer === warning) {
    document.querySelector(".timer").style.backgroundColor = "red";
  }
  if (timer == -1) {
    clearInterval(timerId);
    elem.innerHTML = "time out";
    document.querySelector('.coverPicture').classList.remove('hide');
   ;
  }
}

// const hint = function () {
//     addEventListener.

// };

// let currentQuestion = {}

let questionsData = [
  {
    question: "what is the name of ANTER tech instructor?",
    A: "A: Philip",
    B: "B: Yusuf",
    C: "C: Eunice",
    D: "D: Rasheed",
    answer: "D: Rasheed",
  },

  {
    question: "what does JS stands for in web design?",
    A: "A: JAVA",
    B: "B: Jolly song",
    C: "C: Javascript",
    D: "D: Rasheed",
    answer: "C: Javascript",
  },

  {
    question: "which of this is a type of function in JS?",
    A: "A: Reservation",
    B: "B: Authentication",
    C: "C: Declaration",
    D: "D: Position",
    answer: "C: Declaration",
  },
  {
    question: "what is the capital of Nigeria?",
    A: "A: Abuja",
    B: "B: Lagos",
    C: "C: Warri",
    D: "D: Benin",
    answer: "A: Abuja",
  },
];

// let lastQuestion = questions.length - 1;
let currentQuestion = 0;
loadQuiz();

function loadQuiz() {
  const currentQuestionData = questionsData[currentQuestion];

  questions.textContent = currentQuestionData.question;

  optionA.textContent = currentQuestionData.A;
  optionB.textContent = currentQuestionData.B;
  optionC.textContent = currentQuestionData.C;
  optionD.textContent = currentQuestionData.D;
}

allOptionsArray.forEach(function (choices) {
  choices.addEventListener("click", function () {
    if (choices.textContent === questionsData[currentQuestion].answer) {
      //   console.log(questionsData[currentQuestion].answer);
      choices.style.backgroundColor = "green";
      setInterval(() => {
        choices.style.backgroundColor = "blue";
      }, 200);
      //   number++;
      currentQuestion++;
      score++;
      loadQuiz();
      //   scoreMoney.classList.toggle("scoreboard");
      document.querySelector(`.score-${score}`).classList.add("scoreboard");
      document.querySelector(`.score-${score -  1}`).classList.remove('scoreboard');

      //   console.log(number);
      //   if (currentQuestion === questionsData.length) {
      //     document.querySelector(".coverPicture").style.display = "block";
      //   }
    } else {
      choices.style.backgroundColor = "red";
      setInterval(() => {
        choices.style.backgroundColor = "blue";
      }, 200);
      //   setTimeout(() => {
      //     Window.location.assign("/millionsStart.html");
      //   }, 2000);
    }
  });
});

// function newQuestion(){
//     let q = questions[currentQuestion];
//     question.innerHTML = q.question;
//     A.innerHTML = q.A;
//     B.innerHTML = q.B;
//     C.innerHTML = q.C;
// }
