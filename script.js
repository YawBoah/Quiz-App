const questions = [
    {
      question: "Which of these is the capital of Ghana?",
      answers: [
        { text: "Kumasi", correct: false },
        { text: "Accra", correct: true },
        { text: "Ho", correct: false },
        { text: "Cape Coast", correct: false },
      ],
    },
    {
      question: "Which of these can be found in the Ghana flag except?",
      answers: [
        { text: "Red", correct: false },
        { text: "Green", correct: false },
        { text: "Blue", correct: true },
        { text: "Yellow", correct: false },
      ],
    },
    {
      question: "What is the name of the Ghanaian senior national Football team?",
      answers: [
        { text: "Blue Sharks", correct: false },
        { text: "Black Stars", correct: true },
        { text: "Red Elephants", correct: false },
        { text: "Cape Stars", correct: false },
      ],
    },
    {
      question: "Who is the current captain of the Ghanaian senior national Football team?",
      answers: [
        { text: "Asamoah Gyan", correct: false },
        { text: "Stephen Appiah", correct: false },
        { text: "John Mensah", correct: false },
        { text: "Dede Ayew", correct: true },
      ],
    },
    {
      question: "What is the most widely spoken language in Ghana?",
      answers: [
        { text: "English", correct: false },
        { text: "Akan", correct: true },
        { text: "Hausa", correct: false },
        { text: "Ewe", correct: false },
      ],
    },
    {
      question: "In what year did Ghana gain its independence from British colonial rule?",
      answers: [
        { text: "1957", correct: true },
        { text: "1960", correct: false },
        { text: "1945", correct: false },
        { text: "1972", correct: false },
      ],
    },
    {
      question: "Which famous natural landmark is located in Ghana and is a UNESCO World Heritage Site?",
      answers: [
        { text: "Victoria Falls", correct: false },
        { text: "Kruger National Park", correct: false },
        { text: "Kakum National Park", correct: true },
        { text: "Serengeti National Park", correct: false },
      ],
    },
  ];
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  
    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    } else {
      selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button) => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = true;
    });
    nextButton.style.display = "block";
  }
  
  function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    nextButton.addEventListener("click", () => {
      startQuiz();
    });
  }
  
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  });
  
  startQuiz();
  