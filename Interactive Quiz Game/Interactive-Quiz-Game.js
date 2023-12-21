quizLibrary = [{
    question: 'What is the capital of France?',
    options: ['Berlin', 'Rome', 'London', 'Warsaw', 'Paris'],
    answer: 'Paris'
}, {
    question: 'Who was the first president of the US',
    options: ['George Washington', 'Thomas Jefferson', 'Thomas Edison', 'Joe Biden', 'Donald Trump'],
    answer: 'George Washington'
}, {
    question: 'Which country is not part of EU',
    options: ['Poland', 'France', 'Bulgaria', 'Portugal', 'England'],
    answer: 'England'
}, {
    question: 'When WW2 broke up',
    options: ['1945', '1914', '1935', '1939', '1942'],
    answer: '1939'
}, {
    question: 'What is the best programming language?',
    options: ['JavaScript', 'Python', 'C#', 'Rust', 'C++'],
    answer: 'JavaScript'
}]

let currentQuestionIndex = 0;
const optionContainer = document.querySelector('.options');

function displayQuestion(index) {
    const currentQuestion = quizLibrary[index];

    questionD = document.querySelector('.question'); 

    questionD.innerHTML = currentQuestion.question;

    optionContainer.innerHTML = '';

    currentQuestion.options.forEach((option) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.value = option;
        button.classList.add('buttons');
        optionContainer.appendChild(button);

        button.addEventListener('click', () => {
            checkAnswer(option, index);
            optionContainer.style.display = 'none';
            setTimeout(() => {
                optionContainer.style.display = 'block';
                displayNextQuestion();
            }, 300);
        });
    });
};

function displayNextQuestion () {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizLibrary.length) {
        displayQuestion(currentQuestionIndex);
    } else {
        optionContainer.innerHTML = '';
        questionD.innerHTML = '';
        document.querySelector('.result').innerHTML = `${score}/5`
    }
}

let score = 0;

function checkAnswer(selectedOption, index) {
    if(selectedOption.toLowerCase() === quizLibrary[index].answer.toLowerCase()) {
        score++;
    }
}

displayQuestion(currentQuestionIndex);
