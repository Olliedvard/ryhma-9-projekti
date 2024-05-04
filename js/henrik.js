
(function(){
    function buildQuiz(){
      const output = [];
  
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          const answers = [];
  
          for(letter in currentQuestion.answers){
  
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  

      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // Laskee oikeat vastaukset
      let numCorrect = 0;
  

      myQuestions.forEach( (currentQuestion, questionNumber) => {
  

        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        if(userAnswer === currentQuestion.correctAnswer){

          numCorrect++;
  
          // Oikein vastauksen väri
          answerContainers[questionNumber].style.color = 'green';
        }
        // Jos vastaus on väärin
        else{
          // väärän vastauksen väri
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      
      // Näyttää kuinka moni vastaus meni oikein
      resultsContainer.innerHTML = `${numCorrect} / ${myQuestions.length}`;
    }
      // Kysymykset
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "Sievennä jos mahdollista",
        answers: {
          a: "?",
          b: "?",
          c: " Joo"
        },
        correctAnswer: "c"
      },
      {
        question: "Kysymys 2",
        answers: {
          a: "?",
          b: "?",
          c: "?"
        },
        correctAnswer: "c"
      },
      {
        question: "Kysymys 3",
        answers: {
          a: "?",
          b: "?",
          c: "?",
          d: "?"
        },
        correctAnswer: "d"
      },
      {
        question: "Kysymys 4",
        answers: {
          a: "?",
          b: "?",
          c: "?",
          d: "?"
        },
        correctAnswer: "d"
      },
      {
        question: "Kysymys 5",
        answers: {
          a: "?",
          b: "?",
          c: "?",
          d: "?"
        },
        correctAnswer: "d"
      },
      {
        question: "Kysymys 6",
        answers: {
          a: "?",
          b: "?",
          c: "?",
          d: "?"
        },
        correctAnswer: "d"
      },
      {
        question: "Kysymys 7",
        answers: {
          a: "?",
          b: "?",
          c: "?",
          d: "?"
        },
        correctAnswer: "d"
      }

    ];
  
    buildQuiz();
  
    // Näyttää oikeat ja väärät vastaukset.
    submitButton.addEventListener('click', showResults);
  })();