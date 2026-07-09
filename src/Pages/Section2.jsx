// src/Pages/Section2.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Section2.css";

// 5 SOAL: susun kata jadi kalimat
const QUESTIONS = [
  {
    indo: "Hujan turun.",
    words: [
      { id: "q1-it", text: "It", value: "it" },
      { id: "q1-is", text: "is", value: "is" },
      { id: "q1-raining", text: "raining", value: "raining" },
    ],
    correctSequence: ["it", "is", "raining"],
  },
  {
    indo: "Hari ini panas.",
    words: [
      { id: "q2-hot", text: "hot", value: "hot" },
      { id: "q2-is", text: "is", value: "is" },
      { id: "q2-today", text: "today", value: "today" },
    ],
    correctSequence: ["today", "is", "hot"],
  },
  {
    indo: "Saya suka musim hujan.",
    words: [
      { id: "q3-rainy", text: "rainy", value: "rainy" },
      { id: "q3-like", text: "like", value: "like" },
      { id: "q3-i", text: "I", value: "i" },
      { id: "q3-season", text: "season", value: "season" },
    ],
    correctSequence: ["i", "like", "rainy", "season"],
  },
  {
    indo: "Matahari bersinar.",
    words: [
      { id: "q4-shining", text: "shining", value: "shining" },
      { id: "q4-sun", text: "sun", value: "sun" },
      { id: "q4-the", text: "the", value: "the" },
      { id: "q4-is", text: "is", value: "is" },
    ],
    correctSequence: ["the", "sun", "is", "shining"],
  },
  {
    indo: "Hari ini berawan.",
    words: [
      { id: "q5-cloudy", text: "cloudy", value: "cloudy" },
      { id: "q5-is", text: "is", value: "is" },
      { id: "q5-it", text: "It", value: "it" },
    ],
    correctSequence: ["it", "is", "cloudy"],
  },
  {
    indo: "Saya senang.",
    words: [
      {id: "q6-happy", text: "happy", value: "happy"},
      {id: "q6-am", text: "am", value: "am"},
      {id: "q6-i", text: "i", value: "i"},
    ],
    correctSequence: ["i", "am", "Happy"],
  },
  {
    indo: "Dia Sedih.",
    words: [
      {id: "q7-sad", text: "sad", value: "Sad"},
      {id: "q7-she", text: "she", value: "She"},
      {id: "q7-is", text: "is", value: "Is"},
    ],
    correctSequence: ["She", " Is", "Sad"],
  },
  {
    indo: "Saya Lelah.",
    words: [
      {id: "q8-tired", text: "tired", value: "Tired"},
      {id: "q8-am", text: "am", value: "Am"},
      {id: "q8-i", text: "i", value: "i"},
    ],
    correctSequence:["i", "am", "tired"],
  },
  {
    indo: "Dia Sakit.",
    words: [
      {id: "q9-sick", text: "sick", value: "Sick"},
      {id: "q9-is", text: "is", value: "sick"},
      {id: "q9-he", text: "he", value: "He"},
    ],
    correctSequence: ["He", "is", "sick"],
  },
  {
    indo: "Saya baik-baik saja.",
    words: [
      {id: "q10-fine", text: "fine", value: "Fine"},
      {id: "q10-am", text: "am", value: "am"},
      {id: "q10-i", text: "i", value: "i"},
    ],
    correctSequence: ["i", "am", "fine"]
  }
  ,
  {
    indo: "Saya bangun pagi.",
    words: [
      { id: "q11-up", text: "up", value: "up" },
      { id: "q11-get", text: "get", value: "get" },
      { id: "q11-i", text: "I", value: "i" },
    ],
    correctSequence: ["i", "get", "up"],
  },
  {
    indo: "Saya sarapan.",
    words: [
      { id: "q12-have", text: "have", value: "have" },
      { id: "q12-i", text: "I", value: "i" },
      { id: "q12-breakfast", text: "breakfast", value: "breakfast" },
    ],
    correctSequence: ["i", "have", "breakfast"],
  },
  {
    indo: "Saya pergi ke sekolah.",
    words: [
      { id: "q13-go", text: "go", value: "go" },
      { id: "q13-i", text: "I", value: "i" },
      { id: "q13-school", text: "school", value: "school" },
      { id: "q13-to", text: "to", value: "to" },
    ],
    correctSequence: ["i", "go", "to", "school"],
  },
  {
    indo: "Saya belajar bahasa Inggris.",
    words: [
      { id: "q14-english", text: "English", value: "english" },
      { id: "q14-study", text: "study", value: "study" },
      { id: "q14-i", text: "I", value: "i" },
    ],
    correctSequence: ["i", "study", "english"],
  },
  {
    indo: "Saya tidur malam.",
    words: [
      { id: "q15-at", text: "at", value: "at" },
      { id: "q15-i", text: "I", value: "i" },
      { id: "q15-night", text: "night", value: "night" },
      { id: "q15-sleep", text: "sleep", value: "sleep" },
    ],
    correctSequence: ["i", "sleep", "at", "night"],
  },

  // ================= SCHOOL =================

  {
    indo: "Saya di sekolah.",
    words: [
      { id: "q16-at", text: "at", value: "at" },
      { id: "q16-school", text: "school", value: "school" },
      { id: "q16-am", text: "am", value: "am" },
      { id: "q16-i", text: "I", value: "i" },
    ],
    correctSequence: ["i", "am", "at", "school"],
  },
  {
    indo: "Saya suka matematika.",
    words: [
      { id: "q17-like", text: "like", value: "like" },
      { id: "q17-math", text: "math", value: "math" },
      { id: "q17-i", text: "I", value: "i" },
    ],
    correctSequence: ["i", "like", "math"],
  },
  {
    indo: "Ini pensilku.",
    words: [
      { id: "q18-this", text: "this", value: "this" },
      { id: "q18-pencil", text: "pencil", value: "pencil" },
      { id: "q18-my", text: "my", value: "my" },
      { id: "q18-is", text: "is", value: "is" },
    ],
    correctSequence: ["this", "is", "my", "pencil"],
  },
  {
    indo: "Guru saya baik.",
    words: [
      { id: "q19-my", text: "my", value: "my" },
      { id: "q19-is", text: "is", value: "is" },
      { id: "q19-teacher", text: "teacher", value: "teacher" },
      { id: "q19-good", text: "good", value: "good" },
    ],
    correctSequence: ["my", "teacher", "is", "good"],
  },
  {
    indo: "Kami belajar bahasa Inggris.",
    words: [
      { id: "q20-study", text: "study", value: "study" },
      { id: "q20-we", text: "we", value: "we" },
      { id: "q20-english", text: "English", value: "english" },
    ],
    correctSequence: ["we", "study", "english"],
  }
];


export default function Section2() {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIds, setSelectedIds] = useState([]);
  const [popup, setPopup] = useState(null);

  const currentQuestion = QUESTIONS[currentIndex];
  const totalQuestions = QUESTIONS.length;
  const isLastQuestion = currentIndex === totalQuestions - 1;

  const goHome = () => navigate("/menu");

  const handleNext = () => {
    if (!isLastQuestion) {
      // masih ada soal berikutnya → lanjut & reset pilihan
      setCurrentIndex((prev) => prev + 1);
      setSelectedIds([]);
      setPopup(null);
    } else {
      // sudah soal terakhir → balik ke menu
      navigate("/menu");
    }
  };

  const handleWordClick = (id) => {
    if (selectedIds.includes(id)) return;

    const newSelected = [...selectedIds, id];
    setSelectedIds(newSelected);

    const neededLength = currentQuestion.correctSequence.length;

    if (newSelected.length !== neededLength) return;

    const chosenValues = newSelected.map(
      (sid) => currentQuestion.words.find((w) => w.id === sid).value
    );

    const isCorrect = chosenValues.every(
      (v, i) => v === currentQuestion.correctSequence[i]
    );

    if (isCorrect) {
      setPopup({ type: "success" });
    } else {
      setPopup({ type: "error" });
    }
  };

  const handleRemoveWord = (id) => {
    setSelectedIds((prev) =>
      prev.filter((item) => item !== id)
    );
  };

  const clearPopup = () => setPopup(null);

  const selectedWords = selectedIds
    .map((id) => currentQuestion.words.find((w) => w.id === id))
    .filter(Boolean);

  return (
    <div className="section2-screen">
      <header className="section2-header">
        <div className="section2-header-inner">
          <p className="section2-title-line1">
            Arrange the words correctly
          </p>
          <p className="section2-title-line2">
            to make{" "}
            <span className="section2-title-highlight">
              a perfect sentence
            </span>
          </p>
        </div>
        <div className="section2-instruction">
          Susun Menjadi 1 Kalimat
        </div>
      </header>

      <main className="section2-body">
        <div className="section2-body-inner">
          <p className="section2-progress">
            Soal {currentIndex + 1} dari {totalQuestions}
          </p>

          <h2 className="section2-question">{currentQuestion.indo}</h2>

          <div className="section2-selected-wrapper">
            <div className="section2-selected-area">
              {selectedWords.map((word) => (
              <button
                key={word.id}
                className="word-pill word-pill-selected"
                onClick={() => handleRemoveWord(word.id)}
              >
                {word.text}
              </button>
            ))}
            </div>
            <div className="section2-line" />
            <div className="section2-line section2-line-second" />
          </div>

          <div className="section2-word-bank">
            {currentQuestion.words.map((word) => {
              const isSelected = selectedIds.includes(word.id);
              return (
                <button
                    key={word.id}
                    className={`word-pill ${
                      isSelected ? "word-pill-empty" : ""
                    }`}
                    onClick={() => handleWordClick(word.id)}
                    disabled={false}
                >
                  {isSelected ? "" : word.text}
                </button>
              );
            })}
          </div>

          {/* 🔥 tombol berubah jadi Finish di soal terakhir */}
          <button className="section2-next-btn" onClick={handleNext}>
            {isLastQuestion ? "Finish" : "Next"}
          </button>
        </div>
      </main>

      <footer className="menu-footer">
        <button className="menu-home-btn" onClick={goHome} aria-label="Home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="28"
            height="28"
            fill="none"
            stroke="#169494"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" />
          </svg>
        </button>
      </footer>

      {popup && (
        <div
          className="section1-popup-backdrop"
          onClick={clearPopup}
        >
          <div
            className="section1-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`popup-icon ${
                popup.type === "success"
                  ? "popup-icon-success"
                  : "popup-icon-error"
              }`}
            >
              {popup.type === "success" ? "✓" : "✕"}
            </div>
            <p className="popup-text">
              {popup.type === "success"
                ? "Susunan kalimat sudah benar, bagus!"
                : "Susunan kalimat belum tepat, coba lagi ya."}
            </p>
            <button
              className="popup-close-btn"
              onClick={clearPopup}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
