
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
      feedback.textContent = "Correct!";
      correctAnswers++;
    } else {
      feedback.textContent = "Incorrect!";
    }
  
    setTimeout(() => {
      currentQuestion++;
  
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        const quizContainer = document.querySelector(".quiz-container");
        quizContainer.innerHTML = `<p>You got ${correctAnswers} out of ${questions.length} questions.</p>`;
      }
    }, 2000);
  }
  
  showQuestion();