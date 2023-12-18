
let correctAnswersCount = 0;
let wrongAnswersCount = 0;
import questionPool from './questions.js';


const userProgress = {
    currentQuestionIndex: 0, // Index of the current question
    score: 0, // User's current score
};

// Array to store shuffled questions
let shuffledQuestionPool = shuffleArray(questionPool.slice());

// Function to shuffle an array 
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to get the current question
function getRandomQuestion() {
    const currentQuestion = shuffledQuestionPool[userProgress.currentQuestionIndex];
    return currentQuestion;
}

// Function to check if the user's answer is correct
function checkAnswer(userAnswer, correctAnswer) {
    return userAnswer === correctAnswer;
}

// Function to display the current question and choices
function displayQuestion(question) {
    const questionElement = document.getElementById('question');
    const choicesContainer = document.getElementById('choicesContainer');

    if (questionElement && choicesContainer) {
        // Display the question text
        questionElement.textContent = question.text;

        // Clear previous choices
        choicesContainer.innerHTML = '';

        // Display answer choices and set up click event listeners
        question.choices.forEach(choice => {
            const choiceElement = document.createElement('div');
            choiceElement.classList.add('choice');
            choiceElement.textContent = choice;
            choiceElement.onclick = () => handleUserInput(choice, question.correctAnswer);

            choicesContainer.appendChild(choiceElement);
        });
    } else {
        console.error('HTML elements not found.');
    }
}

// Function to handle user's answer input
function handleUserInput(userAnswer, correctAnswer) {
    const currentQuestion = questionPool[userProgress.currentQuestionIndex];
    const isCorrect = checkAnswer(userAnswer, correctAnswer);

    // Check if a choice is already selected
    const selectedChoice = document.querySelector('.choice.selected');
    if (selectedChoice) {
        return; // Do nothing if a choice is already selected
    }

    const choicesContainer = document.getElementById('choicesContainer');
    const choiceElements = choicesContainer.querySelectorAll('.choice');

    // Highlight correct and incorrect choices
    choiceElements.forEach(element => {
        if (element.textContent === correctAnswer) {
            element.classList.add('correct');
        } else {
            element.classList.add('wrong');
        }
    });

    // Update user's score and question index
    if (!currentQuestion.answered) {
        currentQuestion.answered = true;

        if (isCorrect) {
            userProgress.score++;
            correctAnswersCount++;
        } else {
            wrongAnswersCount++;
        }
    }

    userProgress.currentQuestionIndex++;

    // Check if all questions have been answered
    if (userProgress.currentQuestionIndex === questionPool.length) {
        // Display final score and restart button
        document.getElementById('quizContainer').style.display = 'none';
        const scoreContainer = document.getElementById('scoreContainer');
        scoreContainer.style.display = 'block';
        const scoreElement = document.getElementById('score');
        scoreElement.textContent = `Your score: ${userProgress.score}/${questionPool.length}`;
        const restartBtn = document.getElementById('restartBtn');
        restartBtn.style.display = 'block';
    } else {
        // Move to the next question after a delay
        setTimeout(() => {
            resetChoices();
            const nextQuestion = getRandomQuestion();
            displayQuestion(nextQuestion);
        }, 1000);
    }
}

// Function to reset the styling of choices
function resetChoices() {
    const choicesContainer = document.getElementById('choicesContainer');
    const choiceElements = choicesContainer.querySelectorAll('.choice');
    choiceElements.forEach(element => {
        element.classList.remove('correct', 'wrong');
    });
}

// Function to reset the quiz and start a new game
function resetQuiz() {
    
    userProgress.currentQuestionIndex = 0;
    userProgress.score = 0;
    correctAnswersCount = 0;
    wrongAnswersCount = 0;
    shuffledQuestionPool = shuffleArray(questionPool.slice());

    // Mark all questions as unanswered
    questionPool.forEach(question => {
        question.answered = false;
    });

    // Hide the score container and show the quiz container
    document.getElementById('scoreContainer').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';

    // Display the first question
    const nextQuestion = getRandomQuestion();
    displayQuestion(nextQuestion);
}

// Add event listener for the restart button
document.getElementById('restartBtn').addEventListener('click', resetQuiz);

// Reset the quiz at the beginning
resetQuiz();

