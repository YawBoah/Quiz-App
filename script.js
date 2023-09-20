const questions = [
    {
        question: "Which of these is the capital of Ghana?",
        answers:[
            {text: "Kumasi", correct: false},
            {text: "Accra", correct: true},
            {text: "Ho", correct: false},
            {text: "Cape Coast", correct: false},
        ]
    },

    {
        question: "Which of these can be found in  the Ghana flag except?",
        answers:[
            {text: "Red", correct: false},
            {text: "Green", correct: false},
            {text: "Blue", correct: true},
            {text: "Yellow", correct: false},
        ]
    },

    {
        question: "What is the name of the Ghanaian senior national Football team?",
        answers:[
            {text: "Blue Sharks", correct: false},
            {text: "Black Stars", correct: true},
            {text: "Red Elephants", correct: false},
            {text: "Cape Stars", correct: false},
        ]
    },

    {
        question: "Who is the current captain of  the Ghanaian senior national Football team?",
        answers:[
            {text: "Asamoah Gyan", correct: false},
            {text: "Stephen Appiah", correct: false},
            {text: "John Mensah", correct: false},
            {text: "Dede Ayew", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion()
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButton.appendChild(button);
    });
}