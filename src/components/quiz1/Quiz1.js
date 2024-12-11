// import React, { useRef, useState } from 'react';
// import QuizQuestion from './QuizQuestion';
// import './Quiz1.css';

// const quizData = [
//     {
//       question: 'Identify the song being played',
//       correctAnswer: {
//         text: 'Blinding Lights',
//         audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // URL hợp lệ
//       },
//       answers: [
//         { text: 'Blinding Lights' },
//         { text: 'Shape of You' },
//         { text: 'Levitating' },
//         { text: 'Stay' },
//       ],
//     },
//     {
//       question: 'Identify the song being played',
//       correctAnswer: {
//         text: 'Shape of You',
//         audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
//       },
//       answers: [
//         { text: 'Blinding Lights' },
//         { text: 'Shape of You' },
//         { text: 'Peaches' },
//         { text: 'Good 4 U' },
//       ],
//     },
//     {
//       question: 'Identify the song being played',
//       correctAnswer: {
//         text: 'Levitating',
//         audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
//       },
//       answers: [
//         { text: 'Levitating' },
//         { text: 'Drivers License' },
//         { text: 'Bad Habits' },
//         { text: 'Shivers' },
//       ],
//     },
//   ];
  
  

// // const Quiz1 = () => {
// //   const audioRef = useRef(null); // Tham chiếu đến thẻ audio
// //   const [isPlaying, setIsPlaying] = useState(false); // Trạng thái nhạc đang phát hay không

// //   const toggleMusic = () => {
// //     if (audioRef.current) {
// //       if (isPlaying) {
// //         audioRef.current.pause(); // Nếu nhạc đang phát, tạm dừng
// //       } else {
// //         audioRef.current.play(); // Nếu nhạc đang dừng, phát lại
// //       }
// //       setIsPlaying(!isPlaying); // Đổi trạng thái
// //     }
// //   };

// //   return (
// //     <div className="quiz-container">
// //       <div className="header-container">
// //         <button className="music-button" onClick={toggleMusic}>
// //           {isPlaying ? '⏸️' : '🎵'} {/* Hiển thị biểu tượng khác tùy vào trạng thái */}
// //         </button>
// //         <h1 className="quiz-title">Identify the Lyricist of the song</h1>
// //       </div>
// //       <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>
// //       <div className="question-container">
// //         <p className="question-text">2. Vietnam joined the U.N.O in the year</p>
// //         <div className="options-container">
// //           <label>
// //             <input type="radio" name="year" value="1977" />
// //             1977
// //           </label>
// //           <label>
// //             <input type="radio" name="year" value="1970" />
// //             1970
// //           </label>
// //           <label>
// //             <input type="radio" name="year" value="1976" />
// //             1976
// //           </label>
// //         </div>
// //       </div>
// //       <div className="button-container">
// //         <button className="prev-button">Prev Question</button>
// //         <button className="next-button">Next Question</button>
// //       </div>
// //     </div>
// //   );
// // };

// const Quiz1 = () => {
//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [answers, setAnswers] = useState({});
//     const [isFinished, setIsFinished] = useState(false);
//     const globalAudioRef = useRef(null); // Tham chiếu đến audio đang phát
  
//     const handleAnswer = (answer) => {
//       setAnswers((prev) => ({ ...prev, [currentQuestion]: answer }));
//     };
  
//     const goToNextQuestion = () => {
//       if (currentQuestion < quizData.length - 1) {
//         setCurrentQuestion((prev) => prev + 1);
//       }
//     };
  
//     const goToPreviousQuestion = () => {
//       if (currentQuestion > 0) {
//         setCurrentQuestion((prev) => prev - 1);
//       }
//     };
  
//     const submitQuiz = () => {
//       if (Object.keys(answers).length < quizData.length) {
//         alert('Please complete all questions before submitting!');
//         return;
//       }
//       setIsFinished(true);
//     };
  
//     const restartQuiz = () => {
//       setAnswers({});
//       setCurrentQuestion(0);
//       setIsFinished(false);
//     };
  
//     if (isFinished) {
//       return (
//         <div className="quiz-result">
//           <h2 className="result-title">Thank you for taking Quiz</h2>
//           <button onClick={restartQuiz} className="restart-button">
//             Restart Quiz
//           </button>
//         </div>
//       );
//     }
  
//     return (
//       <div className="quiz-page">
//         <QuizQuestion
//         question={quizData[currentQuestion].question}
//         answers={quizData[currentQuestion].answers}
//         correctAnswer={quizData[currentQuestion].correctAnswer}
//         handleAnswer={handleAnswer}
//         globalAudioRef={globalAudioRef} // Truyền tham chiếu xuống
//         />
//         <div className="button-container">
//           <button onClick={goToPreviousQuestion} className="prev-button">
//             Previous
//           </button>
//           {currentQuestion === quizData.length - 1 ? (
//             <button onClick={submitQuiz} className="submit-button">
//               Submit
//             </button>
//           ) : (
//             <button onClick={goToNextQuestion} className="next-button">
//               Next
//             </button>
//           )}
//         </div>
//       </div>
//     );
//   };
  
//   export default Quiz1;

import React, { useRef, useState } from 'react';
import QuizQuestion from './QuizQuestion';
import './Quiz1.css';

const quizData = [
  {
    question: 'Identify the song being played',
    correctAnswer: {
      text: 'Blinding Lights',
      audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    },
    answers: [
      { text: 'Blinding Lights' },
      { text: 'Shape of You' },
      { text: 'Levitating' },
      { text: 'Stay' },
    ],
  },
  {
    question: 'Identify the song being played',
    correctAnswer: {
      text: 'Shape of You',
      audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    },
    answers: [
      { text: 'Blinding Lights' },
      { text: 'Shape of You' },
      { text: 'Peaches' },
      { text: 'Good 4 U' },
    ],
  },
  {
    question: 'Identify the song being played',
    correctAnswer: {
      text: 'Levitating',
      audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    },
    answers: [
      { text: 'Levitating' },
      { text: 'Drivers License' },
      { text: 'Bad Habits' },
      { text: 'Shivers' },
    ],
  },
];

const Quiz1 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const globalAudioRef = useRef(null); // Tham chiếu đến audio đang phát

  const handleAnswer = (answer) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: answer }));
  };

  const goToNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const submitQuiz = () => {
    if (Object.keys(answers).length < quizData.length) {
      alert('Please complete all questions before submitting!');
      return;
    }
    setIsFinished(true);
  };

  const restartQuiz = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="quiz-result">
        {/* <h2 className="result-title">Thank you for taking Quiz</h2>
        <button onClick={restartQuiz} className="restart-button">
          Restart Quiz
        </button> */}
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
      </div>
    );
  }

  return (
    <div className="quiz-page">
      <QuizQuestion
        question={quizData[currentQuestion].question}
        answers={quizData[currentQuestion].answers}
        correctAnswer={quizData[currentQuestion].correctAnswer}
        handleAnswer={handleAnswer}
        globalAudioRef={globalAudioRef} // Truyền tham chiếu xuống
        selectedAnswer={answers[currentQuestion]} // Truyền đáp án đã chọn vào
      />
      <div className="button-container">
        <button onClick={goToPreviousQuestion} className="prev-button">
          Previous
        </button>
        {currentQuestion === quizData.length - 1 ? (
          <button onClick={submitQuiz} className="submit-button">
            Submit
          </button>
        ) : (
          <button onClick={goToNextQuestion} className="next-button">
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz1;
