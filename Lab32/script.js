const questions = [
    {
        question: "Qual time tem mais titulos mundiais",
        answers: ["São Paulo", "Corinthians", "Palmeiraskk", "Flamengo"],
        correctAnswer: 0
    },
    {
        question: "Qual o maior estadio do Brasil?",
        answers: ["Moises Lucarelli", "Mané Garrincha", "Mario Filho", "Neo Quimica Arena"],
        correctAnswer: 2
    },
    {
        question: "Qual o time com a maior torcida do Brasil",
        answers: ["Flamengo","Corinthians","Palmeiras","Santos"
        ],
        correctAnswer: 0
    }
];

// Carrega perguntas na página
function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

// Avalia as respostas fornecidas pelo usuário
function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        }
    });
    document.getElementById('result').innerHTML = `You scored ${score} out of ${questions.length}`;
}

function reiniciar(){
    document.getElementById('reiniciar').addEventListener('click', function(){
        document.getElementById('quiz-conteiner').reset()
    })   
}

window.onload = loadQuestions;