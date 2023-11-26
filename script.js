
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
      question: "What is the official language of Ghana?",
      answers: [
        { text: "English", correct: true },
        { text: "Twi", correct: false },
        { text: "Akan", correct: false },
        { text: "Ga", correct: false },
      ],
    },

    {
      question: "Ghana gained independence from British colonial rule in which year?",
      answers: [
        { text: "1957", correct: true },
        { text: "1962", correct: false },
        { text: "1971", correct: false },
        { text: "1980", correct: false },
      ],
    },

    {
      question: "What is the largest ethnic group in Ghana?",
      answers: [
        { text: "Akan", correct: true },
        { text: "Mole-Dagbon", correct: false },
        { text: "Mande", correct: false },
        { text: "Ewe", correct: false },
      ],
    },

    {
      question: "Which river is the longest in Ghana?",
      answers: [
        { text: "Volta River", correct: true },
        { text: "Pra River", correct: false },
        { text: "Ankobra River", correct: false },
        { text: "Tano River", correct: false },
      ],
    },

    {
      question: "In which year did Ghana host the first African Cup of Nations (AFCON)?",
      answers: [
        { text: "1963", correct: true },
        { text: "1972", correct: false },
        { text: "1985", correct: false },
        { text: "1999", correct: false },
      ],
    },
    {
      question: "Who was the first President of Ghana?",
      answers: [
        { text: "Kwame Nkrumah", correct: true },
        { text: "John Agyekum Kufuor", correct: false },
        { text: "Jerry John Rawlings", correct: false },
        { text: "John Dramani Mahama", correct: false },
      ],
    },

    {
      question: "Which famous UNESCO World Heritage site is located in Cape Coast, Ghana?",
      answers: [
        { text: "Kakum National Park", correct: false },
        { text: "Wli Waterfalls", correct: false },
        { text: "Elmina Castle", correct: true },
        { text: "Mole National Park", correct: false },
      ],
    },

    {
      question: "What is the traditional cloth of the Akan people in Ghana?",
      answers: [
        { text: "Kente", correct: true },
        { text: "Batakari", correct: false },
        { text: "Smock", correct: false },
        { text: "Fugu", correct: false },
      ],
    },

    {
      question: "Which festival is celebrated by the people of the Ga-Dangme ethnic group?",
      answers: [
        { text: "Homowo", correct: true },
        { text: "Aboakyere", correct: false },
        { text: "Damba", correct: false },
        { text: "Odwira", correct: false },
      ],
    },
    {
      question: "What is the main export product of Ghana?",
      answers: [
        { text: "Cocoa", correct: true },
        { text: "Gold", correct: false },
        { text: "Oil", correct: false },
        { text: "Timber", correct: false },
      ],
    },

    {
      question: "Which traditional symbol represents unity in the Akan culture?",
      answers: [
        { text: "Adinkra", correct: false },
        { text: "Sankofa", correct: false },
        { text: "Gye Nyame", correct: true },
        { text: "Akoben", correct: false },
      ],
    },

    {
      question: "Who is the national football team of Ghana?",
      answers: [
        { text: "Black Stars", correct: true },
        { text: "Golden Eagles", correct: false },
        { text: "Black Queens", correct: false },
        { text: "Black Meteors", correct: false },
      ],
    },

    {
      question: "Which region of Ghana is known for its rich fantasy coffin tradition?",
      answers: [
        { text: "Greater Accra Region", correct: true },
        { text: "Ashanti Region", correct: false },
        { text: "Volta Region", correct: false },
        { text: "Central Region", correct: false },
      ],
    },

    {
      question: "In which year did Ghana become a republic?",
      answers: [
        { text: "1957", correct: false },
        { text: "1960", correct: true },
        { text: "1971", correct: false },
        { text: "1984", correct: false },
      ],
    },

    {
      question: "Which popular dance originated from the Akan people of Ghana?",
      answers: [
        { text: "Azonto", correct: false },
        { text: "Kpanlogo", correct: true },
        { text: "Shoki", correct: false },
        { text: "Alkayida", correct: false },
      ],
    },
    {
      question: "What is the meaning of the name 'Ghana'?",
      answers: [
        { text: "Land of Gold", correct: true },
        { text: "Great Kingdom", correct: false },
        { text: "Black Star", correct: false },
        { text: "Warrior People", correct: false },
      ],
    },

    {
      question: "Which waterfall is the highest in Ghana?",
      answers: [
        { text: "Boti Falls", correct: false },
        { text: "Tagbo Falls", correct: false },
        { text: "Wli Waterfalls", correct: true },
        { text: "Kintampo Waterfalls", correct: false },
      ],
    },

    {
      question: "What is the name of the traditional warrior dance of the Ashanti people?",
      answers: [
        { text: "Azonto", correct: false },
        { text: "Adowa", correct: true },
        { text: "Kpanlogo", correct: false },
        { text: "Borborbor", correct: false },
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

    {
      question: "What is the traditional Ghanaian dish made from cassava and plantains and often served with soup or stew?",
      answers: [
        { text: "Jollof Rice", correct: false },
        { text: "Banku and Tilapia", correct: false },
        { text: "Fufu and Light Soup", correct: true },
        { text: "Waakye", correct: false },
      ],
    },

    {
      question: "Which Ghanaian musician is known as the 'Dancehall King'?",
      answers: [
        { text: "Sarkodie", correct: false },
        { text: "Stonebwoy", correct: true },
        { text: "Shatta Wale", correct: false },
        { text: "M.anifest", correct: false },
      ],
    },

    {
      question: "What is the largest man-made lake in the world by surface area, which is located in Ghana?",
      answers: [
        { text: "Lake Volta", correct: true },
        { text: "Lake Chad", correct: false },
        { text: "Lake Malawi", correct: false },
        { text: "Lake Tanganyika", correct: false },
      ],
    },

    {
      question: "Which Ghanaian festival is celebrated by the Ga people and involves colorful processions and drumming?",
      answers: [
        { text: "Aboakyer Festival", correct: false },
        { text: "Homowo Festival", correct: true },
        { text: "Fetu Afahye Festival", correct: false },
        { text: "Kundum Festival", correct: false },
      ],
    },

    {
      question: "Who was the first President of Ghana and a key figure in the fight for independence?",
      answers: [
        { text: "Kwame Nkrumah", correct: true },
        { text: "John Agyekum Kufuor", correct: false },
        { text: "Jerry John Rawlings", correct: false },
        { text: "Nana Addo Dankwa Akufo-Addo", correct: false },
      ],
    }, 

    {
      question: "Which national park is known for its population of elephants in Ghana?",
      answers: [
        { text: "Mole National Park", correct: true },
        { text: "Kakum National Park", correct: false },
        { text: "Digya National Park", correct: false },
        { text: "Bia National Park", correct: false },
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

