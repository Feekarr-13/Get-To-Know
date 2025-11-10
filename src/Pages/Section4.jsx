// src/Pages/Section4.jsx
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Section4.css";

// DATA SOAL
const QUESTIONS = [
  {
    indo: "Cuacanya panas",
    enPrefix: "It is",
    enSuffix: "today.",
    answer: "hot",
  },
  {
    indo: "Saya lelah",
    enPrefix: "I am",
    enSuffix: "",
    answer: "tired",
  },
  {
    indo: "Guruku sangat baik",
    enPrefix: "My",
    enSuffix: "is very kind.",
    answer: "teacher",
  },
  {
    indo: "Saya belajar Bahasa Inggris setiap hari",
    enPrefix: "I",
    enSuffix: "English every day.",
    answer: "study",
  },
  {
    indo: "Saya pergi ke sekolah pukul tujuh",
    enPrefix: "I",
    enSuffix: "to school at seven o’clock.",
    answer: "go",
  },
];

export default function Section4() {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(() => QUESTIONS.map(() => ""));
  const [results, setResults] = useState(() => QUESTIONS.map(() => null)); // null | "correct" | "wrong"
  const [popup, setPopup] = useState(null);

  const inputRef = useRef(null);

  const currentQuestion = QUESTIONS[currentIndex];
  const currentAnswer = answers[currentIndex];
  const totalQuestions = QUESTIONS.length;
  const correctCount = results.filter((r) => r === "correct").length;

  const goHome = () => navigate("/menu");

  const handleBoxClick = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  const handleChangeAnswer = (e) => {
    const value = e.target.value;
    setAnswers((prev) => {
      const copy = [...prev];
      copy[currentIndex] = value;
      return copy;
    });
  };

  // 🔊 Fungsi umum untuk memutar efek suara
  const playSfx = (type) => {
    let src = "";
    if (type === "success") src = "/audio/correct.mp3";
    else if (type === "error") src = "/audio/wrong_5.mp3";
    else if (type === "finish") src = "/audio/yeay.mp3";

    if (!src) return;
    const audio = new Audio(src);
    audio.play().catch(() => {});
  };

  const handleCheck = () => {
    const value = (currentAnswer || "").trim().toLowerCase();
    if (!value) {
      setPopup({
        type: "error",
        msg: "Silakan isi jawaban terlebih dahulu.",
      });
      return;
    }

    const isCorrect = value === currentQuestion.answer.toLowerCase();

    // update hasil per soal
    const newResults = [...results];
    newResults[currentIndex] = isCorrect ? "correct" : "wrong";
    setResults(newResults);

    const newCorrectCount = newResults.filter((r) => r === "correct").length;

    // 🔊 mainkan suara benar/salah
    playSfx(isCorrect ? "success" : "error");

    // 👉 kalau ini soal terakhir → langsung ke halaman score
    if (currentIndex === totalQuestions - 1) {
      // 🔊 mainkan suara "yeayyy" untuk skor
      playSfx("finish");

      setTimeout(() => {
        navigate("/score", {
          state: {
            score: newCorrectCount,
            total: totalQuestions,
          },
        });
      }, 1500); // delay agar suaranya sempat terdengar
      return;
    }

    // 👉 kalau belum terakhir → tampilkan popup
    setPopup({
      type: isCorrect ? "success" : "error",
      msg: isCorrect
        ? "Jawaban kamu benar, hebat! 🎉"
        : "Jawaban belum tepat. Kita lanjut ke soal berikutnya ya 🙂",
    });
  };

  const closePopup = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
    setPopup(null);
  };

  return (
    <div className="section4-screen">
      {/* HEADER KUNING */}
      <header className="section4-header">
        <div className="section4-header-inner">
          <p className="section4-title-line1">Arrange the words correctly</p>
          <p className="section4-title-line2">
            to make{" "}
            <span className="section4-title-highlight">
              a perfect sentence
            </span>
          </p>
        </div>

        <div className="section4-instruction-card">Lengkapi Kosakata</div>
      </header>

      {/* BODY */}
      <main className="section4-body">
        <div className="section4-body-inner">
          <p className="section4-progress">
            Soal {currentIndex + 1} dari {totalQuestions} • Benar:{" "}
            {correctCount} / {totalQuestions}
          </p>

          <h2 className="section4-question-id">{currentQuestion.indo}</h2>

          <div className="section4-answer-box" onClick={handleBoxClick}>
            <span className="section4-answer-text">
              {currentQuestion.enPrefix}
            </span>

            <input
              ref={inputRef}
              type="text"
              className="section4-input"
              value={currentAnswer}
              onChange={handleChangeAnswer}
              placeholder=".........."
            />

            {currentQuestion.enSuffix && (
              <span className="section4-answer-text">
                {currentQuestion.enSuffix}
              </span>
            )}
          </div>

          <button className="section4-check-btn" onClick={handleCheck}>
            Periksa
          </button>
        </div>
      </main>

      {/* FOOTER HOME */}
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

      {/* POPUP */}
      {popup && (
        <div className="section1-popup-backdrop" onClick={closePopup}>
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
            <p className="popup-text">{popup.msg}</p>
            <button className="popup-close-btn" onClick={closePopup}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
