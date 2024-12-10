import React, { useState } from 'react';

// Dữ liệu câu hỏi
const questions = [
  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'Berlin', isCorrect: false },
      { answerText: 'Madrid', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Rome', isCorrect: false },
    ],
  },
  {
    questionText: 'Which planet is known as the Red Planet?',
    answerOptions: [
      { answerText: 'Earth', isCorrect: false },
      { answerText: 'Mars', isCorrect: true },
      { answerText: 'Jupiter', isCorrect: false },
      { answerText: 'Saturn', isCorrect: false },
    ],
  },
  {
    questionText: 'Who wrote "Hamlet"?',
    answerOptions: [
      { answerText: 'William Shakespeare', isCorrect: true },
      { answerText: 'Charles Dickens', isCorrect: false },
      { answerText: 'Mark Twain', isCorrect: false },
      { answerText: 'Jane Austen', isCorrect: false },
    ],
  },
];

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setIsQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setIsQuizFinished(false);
  };

  return (
    <div className="quiz-container">
      {!isQuizFinished ? (
        <div className="quiz">
          <h2>Quiz</h2>
          <div className="question-section">
            <div className="question-text">
              {questions[currentQuestionIndex].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestionIndex].answerOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option.isCorrect)}
              >
                {option.answerText}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="quiz-result">
          <h2>Quiz Finished!</h2>
          <p>Your score is: {score} / {questions.length}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
