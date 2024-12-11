// import React from "react";
// import "./Quiz2.css";

// const Quiz2 = () => {
//   return (
//     <div className="quiz-container">
//       <div className="quiz-header">
//         <p>
//           Parents’ groups responded to the program positively, but said it may
//           spark a range of community reactions. “It is a good thing and an
//           innovative idea and there could be some positive benefits”, Council
//           of Catholic School Parents executive officer Danielle Cronin said.
//           “Different communities will respond to this kind of presence in
//           different ways.”
//         </p>
//       </div>
//       <textarea
//         className="quiz-textarea"
//         placeholder="Write your response here..."
//       ></textarea>
//       <div className="quiz-footer">
//         <button className="quiz-button">Cut</button>
//         <button className="quiz-button">Copy</button>
//         <button className="quiz-button">Paste</button>
//         <div className="word-count">Total Word Count: 0</div>
//       </div>
//     </div>
//   );
// };

// export default Quiz2;

// import React, { useState } from "react";
// import "./Quiz2.css";

// const Quiz2 = () => {
//   const [text, setText] = useState(""); // Lưu trữ nội dung trong <textarea>
//   const [clipboard, setClipboard] = useState(""); // Lưu trữ nội dung đã copy/cut

//   // Cập nhật nội dung khi người dùng nhập
//   const handleInputChange = (e) => {
//     setText(e.target.value);
//   };

//   // Cắt nội dung được chọn
//   const handleCut = () => {
//     const textarea = document.querySelector(".quiz-textarea");
//     const selectedText = window.getSelection().toString();

//     if (selectedText) {
//       // Loại bỏ đoạn được chọn ra khỏi text
//       setText(text.replace(selectedText, ""));
//       setClipboard(selectedText); // Lưu đoạn cắt vào clipboard
//     } else {
//       const start = textarea.selectionStart;
//       const end = textarea.selectionEnd;
//       const cutText = text.slice(start, end);

//       if (cutText) {
//         setClipboard(cutText);
//         setText(text.slice(0, start) + text.slice(end));
//       }
//     }
//   };

//   // Copy nội dung được chọn
//   const handleCopy = () => {
//     const textarea = document.querySelector(".quiz-textarea");
//     const selectedText = window.getSelection().toString();

//     if (selectedText) {
//       setClipboard(selectedText); // Lưu đoạn copy vào clipboard
//     } else {
//       const start = textarea.selectionStart;
//       const end = textarea.selectionEnd;
//       const copiedText = text.slice(start, end);

//       if (copiedText) {
//         setClipboard(copiedText);
//       }
//     }
//   };

//   // Paste nội dung từ clipboard
//   const handlePaste = () => {
//     const textarea = document.querySelector(".quiz-textarea");
//     const start = textarea.selectionStart;
//     const end = textarea.selectionEnd;

//     if (clipboard) {
//       setText(text.slice(0, start) + clipboard + text.slice(end));
//     }
//   };

//   return (
//     <div className="quiz-container">
//       <div className="quiz-header">
//         <p>
//           Parents’ groups responded to the program positively, but said it may
//           spark a range of community reactions. “It is a good thing and an
//           innovative idea and there could be some positive benefits”, Council
//           of Catholic School Parents executive officer Danielle Cronin said.
//           “Different communities will respond to this kind of presence in
//           different ways.”
//         </p>
//       </div>
//       <textarea
//         className="quiz-textarea"
//         placeholder="Write your response here..."
//         value={text}
//         onChange={handleInputChange}
//       ></textarea>
//       <div className="quiz-footer">
//         <button className="quiz-button" onClick={handleCut}>
//           Cut
//         </button>
//         <button className="quiz-button" onClick={handleCopy}>
//           Copy
//         </button>
//         <button className="quiz-button" onClick={handlePaste}>
//           Paste
//         </button>
//         <div className="word-count">Total Word Count: {text.length}</div>
//       </div>
//     </div>
//   );
// };

// export default Quiz2;

import React, { useState } from "react";
import "./Quiz2.css";

const Quiz2 = () => {
  const [text, setText] = useState(""); // Nội dung bài viết
  const [submitted, setSubmitted] = useState(false); // Trạng thái nộp bài

  // Lưu clipboard
  const [clipboard, setClipboard] = useState("");

  // Cập nhật nội dung trong textarea
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  // Cắt nội dung
  const handleCut = () => {
    const textarea = document.querySelector(".quiz-textarea");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (start !== end) {
      const cutText = text.slice(start, end);
      setClipboard(cutText);
      setText(text.slice(0, start) + text.slice(end));
    }
  };

  // Sao chép nội dung
  const handleCopy = () => {
    const textarea = document.querySelector(".quiz-textarea");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (start !== end) {
      const copiedText = text.slice(start, end);
      setClipboard(copiedText);
    }
  };

  // Dán nội dung
  const handlePaste = () => {
    const textarea = document.querySelector(".quiz-textarea");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (clipboard) {
      setText(text.slice(0, start) + clipboard + text.slice(end));
    }
  };

  // Xử lý nộp bài
  const handleSubmit = () => {
    if (text.length === 0) {
      alert("Bạn vui lòng ghi bài trước khi nộp.");
    } else {
      setSubmitted(true); // Chuyển sang trạng thái nộp bài
    }
  };

  // Restart quiz
  const restartQuiz = () => {
    setText(""); // Xóa nội dung bài viết
    setSubmitted(false); // Quay lại trạng thái chưa nộp
  };

  if (submitted) {
    return (
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
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <p>
          Parents’ groups responded to the program positively, but said it may
          spark a range of community reactions. “It is a good thing and an
          innovative idea and there could be some positive benefits”, Council
          of Catholic School Parents executive officer Danielle Cronin said.
          “Different communities will respond to this kind of presence in
          different ways.”
        </p>
      </div>
      <textarea
        className="quiz-textarea"
        placeholder="Write your response here..."
        value={text}
        onChange={handleInputChange}
      ></textarea>
      <div className="quiz-footer">
        <button className="quiz-button" onClick={handleCut}>
          Cut
        </button>
        <button className="quiz-button" onClick={handleCopy}>
          Copy
        </button>
        <button className="quiz-button" onClick={handlePaste}>
          Paste
        </button>
        <div className="word-count">Total Word Count: {text.length}</div>
      </div>
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Quiz2;
