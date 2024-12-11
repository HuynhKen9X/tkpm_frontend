import React, { useState } from "react";
import "./Quiz.css";

function Quiz() {
  // Danh sách câu hỏi
  const questions = [
    {
      questionText: "Which former British colony was given back to China in 1997?",
      answerOptions: [
        { answerText: "Russia", isCorrect: false },
        { answerText: "America", isCorrect: false },
        { answerText: "Australia", isCorrect: false },
        { answerText: "Hong Kong", isCorrect: true },
      ],
    },
    {
      questionText: "What is the capital city of France?",
      answerOptions: [
        { answerText: "Berlin", isCorrect: false },
        { answerText: "Madrid", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Lisbon", isCorrect: false },
      ],
    },
    {
      questionText: "Which planet is known as the Red Planet?",
      answerOptions: [
        { answerText: "Earth", isCorrect: false },
        { answerText: "Mars", isCorrect: true },
        { answerText: "Jupiter", isCorrect: false },
        { answerText: "Venus", isCorrect: false },
      ],
    },
  ];

  // State quản lý
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Câu hỏi hiện tại
  const [score, setScore] = useState(0); // Điểm số
  const [isQuizFinished, setIsQuizFinished] = useState(false); // Trạng thái hoàn thành quiz
  const [answeredQuestions, setAnsweredQuestions] = useState([]); // Các câu hỏi đã trả lời
  const [errorMessage, setErrorMessage] = useState(""); // Thông báo lỗi

  // Xử lý click vào câu trả lời
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1); // Tăng điểm nếu đúng
    }

    // Đánh dấu câu hỏi đã được trả lời
    setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]);

    // Chuyển sang câu hỏi tiếp theo
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    }
  };

  // Xử lý quay lại câu hỏi trước
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Xử lý bỏ qua câu hỏi hiện tại
  const handleSkipQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    }
  };

  // Kiểm tra và hoàn tất quiz
    const finishQuiz = () => {
    if (answeredQuestions.length < questions.length) {
      alert("Please answer all the questions before submitting.");
    } else {
      setIsQuizFinished(true);
    }
  };
  

  // Khởi động lại quiz
  const restartQuiz = () => {
    setCurrentQuestionIndex(0); // Reset câu hỏi
    setScore(0); // Reset điểm
    setIsQuizFinished(false); // Trở lại trạng thái chưa hoàn thành
    setAnsweredQuestions([]); // Xóa danh sách câu hỏi đã trả lời
    setErrorMessage(""); // Xóa thông báo lỗi
  };

  return (
    <div className="quiz-container">
      {!isQuizFinished ? (
        <div className="quiz">
          {/* Header */}
          <div className="quiz-header">
            <h1>Quiz Challenge</h1>
          </div>

          {/* Nội dung câu hỏi */}
          <div className="question-section">
            <div className="question-image">
              <img
                src="https://via.placeholder.com/300"
                alt="Question"
              />
            </div>
            <div className="question-text">
              {questions[currentQuestionIndex].questionText}
            </div>
          </div>

          {/* Các câu trả lời */}
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

          {/* Nút điều hướng */}
          <div className="navigation-buttons">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0} // Vô hiệu hóa nếu ở câu hỏi đầu
            >
              ← Previous
            </button>
            <button onClick={handleSkipQuestion}>
              Skip →
            </button>
            <button onClick={finishQuiz}>
              Finish Quiz
            </button>
          </div>

          {/* Hiển thị lỗi */}
          {errorMessage && <div className="error-message">{errorMessage}</div>}

          {/* Footer */}
          <div className="quiz-footer">
            <div className="progress">
              <div
                className="progress-bar"
                style={{
                  width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="quiz-result">
          <div className="result-icon">
            <img
              src="https://img.icons8.com/fluency/96/ok.png"
              alt="Success Icon"
            />
          </div>
          <h2 className="result-title">Thank you for taking Quiz</h2>
          <p className="result-subtitle">Your answer has been submitted</p>
          <div className="result-input-section">
            <input
              type="email"
              placeholder="Your Email"
              className="result-email-input"
            />
            <button className="result-submit-button">Subscribe now</button>
          </div>
          <button onClick={restartQuiz} className="restart-button">
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
