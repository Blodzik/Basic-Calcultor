let questions = [];
const createdQuestionsContainer = document.querySelector('.created-questions');
const result = document.querySelector('.result');

function addQuestion() {
    const questionInput = document.querySelector('.question');
    const answerInput = document.querySelector('.answer');

    const question = questionInput.value.trim();
    const answer = answerInput.value.trim();

    if (question !== '' && answer !== '') {
        questions.push({ question, answer });
        questionInput.value = '';
        answerInput.value = '';
        alert('Question added');
        displayQuestion ();
    } else {
        alert('Please enter both question and answer')
    }
}

function startQuiz() {
    createdQuestionsContainer.innerHTML = '';
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        const userAnswer = prompt(questions[i].question);

        if (userAnswer && userAnswer.toLowerCase() === questions[i].answer.toLowerCase()) {
            score++;
        } 
    };
    result.innerHTML = `Your score ${score} out of ${questions.length}`;
}

function displayQuestion (){
    createdQuestionsContainer.innerHTML = '';

    questions.forEach((option) => {
        const container = document.createElement('div');
        container.classList.add('question-container');

        const questionParagraph = document.createElement('p');
        questionParagraph.textContent = `Q: ${option.question}`;

        const answerParagraph = document.createElement('p');
        answerParagraph.textContent = `A: ${option.answer}`;

        container.appendChild(questionParagraph);
        container.appendChild(answerParagraph);

        createdQuestionsContainer.appendChild(container);
})

}

function resetQuiz() {
    questions = [];
    createdQuestionsContainer.innerHTML = '';
    result.innerHTML = '';
}

