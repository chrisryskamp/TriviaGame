(function() {
    const myQuestions = [
      {
        question: "Which year did the Dallas Stars win the Stanley Cup?",
        answers: {
          a: "2000",
          b: "2002",
          c: "1999"
        },
        correctAnswer: "c"
      },
      {
        question: "Which team did the Dallas Mavericks defeat to win the NBA Championship?",
        answers: {
          a: "Boston Celtics",
          b: "Orlando Magic",
          c: "Miami Heat"
        },
        correctAnswer: "c"
      },
      {
        question: "How many Super Bowl's have the Dallas Cowboys won?",
        answers: {
          a: "None",
          b: "Four",
          c: "One",
          d: "Five"
        },
        correctAnswer: "d"
      }
    ];
  
    function buildQuiz() {
      
      const output = [];
  
      
      myQuestions.forEach((currentQuestion, questionNumber) => {
        
        const answers = [];
  
        
        for (letter in currentQuestion.answers) {
          
          answers.push(
            `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
          );
        }
  
        
        output.push(
          `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
        );
      });
  
      
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      
      let numCorrect = 0;
  
      
      myQuestions.forEach((currentQuestion, questionNumber) => {
        
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
       
        if (userAnswer === currentQuestion.correctAnswer) {
          
          numCorrect++;
  
          
          answerContainers[questionNumber].style.color = "green";
        } else {
          
          
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove("active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;
      
      if (currentSlide === 0) {
        previousButton.style.display = "none";
      } else {
        previousButton.style.display = "inline-block";
      }
      
      if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
      } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
  
    
    buildQuiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(0);
  
    
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();