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

    if (newSelected.length < neededLength) return;

    const chosenValues = newSelected
      .map((sid) =>
        currentQuestion.words.find((w) => w.id === sid)?.value
      )
      .filter(Boolean);

    const isCorrect =
      chosenValues.length === neededLength &&
      chosenValues.every(
        (val, idx) => val === currentQuestion.correctSequence[idx]
      );

    if (isCorrect) {
      setPopup({ type: "success" });
    } else {
      setPopup({ type: "error" });
      setTimeout(() => {
        setSelectedIds([]);
      }, 800);
    }
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
                <div
                  key={word.id}
                  className="word-pill word-pill-selected"
                >
                  {word.text}
                </div>
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
                  onClick={() => !isSelected && handleWordClick(word.id)}
                  disabled={isSelected}
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
