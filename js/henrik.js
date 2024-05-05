
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
        question: "Sievennä jos mahdollista : 7x<sup>5</sup>+9x<sup>5</sup>",
        answers: {
          a: "Ei voi sieventää",
          b: "12x<sup>10</sup>",
          c: "16x<sup>5</sup>"
        },
        correctAnswer: "c"
      },
      {
        question: "Sievennä jos mahdollista : x<sup></sup>-8x<sup>6</sup>",
        answers: {
          a: "Ei voi sieventää",
          b: "-7x<sup>6</sup>",
          c: "7x<sup>6</sup>"
        },
        correctAnswer: "b"
      },
      {
        question: "Sievennä jos mahdollista :-3x<sup>2</sup>-x",
        answers: {
          a: "Ei voi sieventää.",
          b: "-2x<sup>2</sup>",
          c: "-4x<sup>2</sup>",
          d: "-4x"
        },
        correctAnswer: "a"
      },
      {
        question: "Sievennä jos mahdollista : 5x<sup>6</sup>*x",
        answers: {
          a: "5x<sup>6</sup>",
          b: "6x<sup>6</sup>",
          c: "6x<sup>7</sup>",
          d: "Ei voi sieventää"
        },
        correctAnswer: "a"
      },
      {
        question: "Laske polynomin arvo kun, x = -5:<br> x<sup>2</sup> + x + 3 + 2x<sup>2</sup> - x -4",
        answers: {
          a: "-77",
          b: "77",
          c: "2x<sup>2</sup>",
        },
        correctAnswer: "b"
      },
      {
        question: "Laske polynomin arvo kun, x = -3 : <br> 6x<sup>2</sup>-12x-(6x<sup>2</sup>-13x+155) ",
        answers: {
          a: "75",
          b: "-158",
          c: "155",
        },
        correctAnswer: "b"
      },


    ];
  
    buildQuiz();
  
    // Näyttää oikeat ja väärät vastaukset.
    submitButton.addEventListener('click', showResults);
  })();
  addEventListener("DOMContentLoaded", () => {
    alert('Alla on 6 monivalinta kysymystä. Kun olet vastannut jokaiseen kysymykseen paina "varmista" nappia jonka jälkeen näet kuinka monta kohtaa on oikein napin ala puolelta. Näet pisteet myös tulokset sivulta. Tsemppiä tehtäviin :)')
    
    parhaathenrik = Number(sessionStorage.setItem("numCorrect"))
    document.querySelector('#parhaathenrik').innerHTML = parhaathenrik
  })