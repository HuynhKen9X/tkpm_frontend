// // import React, { useRef, useState } from 'react';
// // import './QuizQuestion.css';

// // const QuizQuestion = ({ question, answers, correctAnswer, handleAnswer }) => {
// //   const audioRef = useRef(null);

// //   const playMusic = () => {
// //     if (audioRef.current) {
// //       audioRef.current.play();
// //     }
// //   };


// //   return (
// //     <div className="question-container">
// //       <div className="header-container">
// //         <button className="music-button" onClick={playMusic}>
// //           🎵
// //         </button>
// //         <h2 className="quiz-title">{question}</h2>
// //       </div>
// //       <audio ref={audioRef} src={correctAnswer.audio}></audio>
// //       <div className="options-container">
// //         {answers.map((answer, index) => (
// //           <label key={index} className="option-label">
// //             <input
// //               type="radio"
// //               name={question}
// //               value={answer.text}
// //               onClick={() => handleAnswer(answer.text)}
// //             />
// //             {answer.text}
// //           </label>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default QuizQuestion;

// // import React, { useRef } from 'react';
// // import './QuizQuestion.css';

// // const QuizQuestion = ({ question, answers, correctAnswer, handleAnswer }) => {
// //   const audioRef = useRef(null);

// //   const toggleMusic = () => {
// //     if (audioRef.current) {
// //       const audioElement = audioRef.current;

// //       // Kiểm tra xem nguồn nhạc có được hỗ trợ hay không
// //       if (audioElement.canPlayType('audio/mpeg')) {
// //         if (audioElement.paused) {
// //           audioElement.play(); // Phát nhạc nếu đang dừng
// //         } else {
// //           audioElement.pause(); // Tạm dừng nếu đang phát
// //         }
// //       } else {
// //         alert('Your browser does not support this audio format.');
// //       }
// //     }
// //   };

// //   return (
// //     <div className="question-container">
// //       <div className="header-container">
// //         <button className="music-button" onClick={toggleMusic}>
// //           🎵
// //         </button>
// //         <h2 className="quiz-title">{question}</h2>
// //       </div>
// //       {/* Phần phát nhạc */}
// //       <audio ref={audioRef} src={correctAnswer.audio}></audio>
// //       <div className="options-container">
// //         {answers.map((answer, index) => (
// //           <label key={index} className="option-label">
// //             <input
// //               type="radio"
// //               name={question}
// //               value={answer.text}
// //               onClick={() => handleAnswer(answer.text)}
// //             />
// //             {answer.text}
// //           </label>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default QuizQuestion;

// // import React, { useRef } from 'react';
// // import './QuizQuestion.css';

// // const QuizQuestion = ({
// //   question,
// //   answers,
// //   correctAnswer,
// //   handleAnswer,
// //   globalAudioRef, // Nhận tham chiếu âm thanh toàn cục
// // }) => {
// //   const localAudioRef = useRef(null);

// //   const toggleMusic = () => {
// //     // Dừng audio trước đó (nếu đang phát)
// //     if (globalAudioRef.current && globalAudioRef.current !== localAudioRef.current) {
// //       globalAudioRef.current.pause(); // Dừng âm thanh đang phát
// //       globalAudioRef.current.currentTime = 0; // Đặt lại thời gian phát
// //     }

// //     if (localAudioRef.current) {
// //       const audioElement = localAudioRef.current;

// //       if (audioElement.paused) {
// //         audioElement.play(); // Phát âm thanh mới
// //         globalAudioRef.current = audioElement; // Cập nhật tham chiếu âm thanh toàn cục
// //       } else {
// //         audioElement.pause(); // Dừng âm thanh hiện tại
// //         globalAudioRef.current = null; // Reset tham chiếu khi dừng
// //       }
// //     }
// //   };

// //   return (
// //     <div className="question-container">
// //       <div className="header-container">
// //         <button className="music-button" onClick={toggleMusic}>
// //           🎵
// //         </button>
// //         <h2 className="quiz-title">{question}</h2>
// //       </div>
// //       <audio ref={localAudioRef} src={correctAnswer.audio}></audio>
// //       <div className="options-container">
// //         {answers.map((answer, index) => (
// //           <label key={index} className="option-label">
// //             <input
// //               type="radio"
// //               name={question}
// //               value={answer.text}
// //               onClick={() => handleAnswer(answer.text)}
// //             />
// //             {answer.text}
// //           </label>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default QuizQuestion;

// import React, { useRef, useState } from 'react';
// import './QuizQuestion.css';

// const QuizQuestion = ({
//   question,
//   answers,
//   correctAnswer,
//   handleAnswer,
//   globalAudioRef, // Nhận tham chiếu âm thanh toàn cục
// }) => {
//   const localAudioRef = useRef(null);

//   const toggleMusic = () => {
//     // Nếu có nhạc đang phát từ âm thanh toàn cục, dừng nhạc đó trước khi phát nhạc mới
//     if (globalAudioRef.current && globalAudioRef.current !== localAudioRef.current) {
//       globalAudioRef.current.pause();
//       globalAudioRef.current.currentTime = 0;
//     }

//     if (localAudioRef.current) {
//       const audioElement = localAudioRef.current;

//       // Kiểm tra nếu nhạc đang phát, dừng nhạc, nếu không, phát nhạc
//       if (audioElement.paused) {
//         audioElement.play();
//         globalAudioRef.current = audioElement; // Cập nhật tham chiếu đến audio hiện tại
//       } else {
//         audioElement.pause();
//         globalAudioRef.current = null; // Reset tham chiếu nếu tạm dừng nhạc
//       }
//     }
//   };

//   return (
//     <div className="question-container">
//       <div className="header-container">
//         <button className="music-button" onClick={toggleMusic}>
//           🎵
//         </button>
//         <h2 className="quiz-title">{question}</h2>
//       </div>
//       <audio ref={localAudioRef} src={correctAnswer.audio}></audio>
//       <div className="options-container">
//         {answers.map((answer, index) => (
//           <label key={index} className="option-label">
//             <input
//               type="radio"
//               name={question}
//               value={answer.text}
//               onClick={() => handleAnswer(answer.text)}
//             />
//             {answer.text}
//           </label>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default QuizQuestion;


import React, { useRef } from 'react';
import './QuizQuestion.css';

const QuizQuestion = ({
  question,
  answers,
  correctAnswer,
  handleAnswer,
  globalAudioRef, // Nhận tham chiếu âm thanh toàn cục
  selectedAnswer // Nhận đáp án đã chọn từ parent
}) => {
  const localAudioRef = useRef(null);

  const toggleMusic = () => {
    // Nếu có nhạc đang phát từ âm thanh toàn cục, dừng nhạc đó trước khi phát nhạc mới
    if (globalAudioRef.current && globalAudioRef.current !== localAudioRef.current) {
      globalAudioRef.current.pause();
      globalAudioRef.current.currentTime = 0;
    }

    if (localAudioRef.current) {
      const audioElement = localAudioRef.current;

      // Kiểm tra nếu nhạc đang phát, dừng nhạc, nếu không, phát nhạc
      if (audioElement.paused) {
        audioElement.play();
        globalAudioRef.current = audioElement; // Cập nhật tham chiếu đến audio hiện tại
      } else {
        audioElement.pause();
        globalAudioRef.current = null; // Reset tham chiếu nếu tạm dừng nhạc
      }
    }
  };

  return (
    <div className="question-container">
      <div className="header-container">
        <button className="music-button" onClick={toggleMusic}>
          🎵
        </button>
        <h2 className="quiz-title">{question}</h2>
      </div>
      <audio ref={localAudioRef} src={correctAnswer.audio}></audio>
      <div className="options-container">
        {answers.map((answer, index) => (
          <label key={index} className="option-label">
            <input
              type="radio"
              name={question}
              value={answer.text}
              checked={selectedAnswer === answer.text} // Đánh dấu đáp án đã chọn
              onClick={() => handleAnswer(answer.text)} // Lưu đáp án khi click
            />
            {answer.text}
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
