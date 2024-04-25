
const questions = [
    {
      question: "Mikä on  ",
      choices: ["x=2", "x=4", "x=7"],
      correct: 0
    },
    {
      question: "",
      choices: ["", "", ""],
      correct: 2
    },
    {
      question: "",
      choices: ["", "", ""],
      correct: 1
    },
    {
        question: "",
        choices: ["", "", ""],
        correct: 1
    },
    {
        question: "",
        choices: ["", "", ""],
        correct: 1
    },



   
  ];
  
  let currentQuestion = 0;
  let correctAnswers = 0;
  
  function showQuestion() {
    const questionText = document.getElementById("question-text");
    questionText.textContent = questions[currentQuestion].question;
  
    const choices = document.querySelectorAll(".choice");
    choices.forEach((choice, index) => {
      choice.textContent = questions[currentQuestion].choices[index];
    });
  
    const feedback = document.getElementById("feedback");
    feedback.textContent = "";
  }
  
  function checkAnswer(selected) {
    const feedback = document.getElementById("feedback");
    if (selected === questions[currentQuestion].correct) {
      feedback.textContent = "Oikein!";
      correctAnswers++;
    } else {
      feedback.textContent = "Väärin!";
    }
  
    setTimeout(() => {
      currentQuestion++;
  
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        const quizContainer = document.querySelector(".quiz-container");
        quizContainer.innerHTML = `<p>Sait ${correctAnswers} / ${questions.length} kysymyksestä oikein.</p>`;
      }
    }, 2000);
  }
  
  showQuestion();