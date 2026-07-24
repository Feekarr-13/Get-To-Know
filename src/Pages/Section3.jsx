// src/Pages/Section3.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Section3.css";
import { FaHome } from "react-icons/fa";

const QUESTIONS = [
  // Slide 1
  {
    question: "It is sunny.",
    sub: "Apa arti kalimat di atas?",
    options: [
      { id: "hot", text: "Cuacanya panas", isCorrect: false },
      { id: "sunny", text: "Cuacanya cerah", isCorrect: true },
      { id: "rain", text: "Sedang turun hujan", isCorrect: false },
      { id: "wind", text: "Anginnya kencang", isCorrect: false },
    ],
  },

  // Slide 2
  {
    question: "It is raining.",
    sub: "Apa arti kalimat di atas?",
    options: [
      { id: "sunny", text: "Cuacanya cerah", isCorrect: false },
      { id: "rain", text: "Sedang turun hujan", isCorrect: true },
      { id: "cloudy", text: "Langit berawan", isCorrect: false },
      { id: "wind", text: "Anginnya kencang", isCorrect: false },
    ],
  },

  // Slide 3
  {
    question: "It is cloudy.",
    sub: "Apa arti kalimat di atas?",
    options: [
      { id: "sunny", text: "Cuacanya cerah", isCorrect: false },
      { id: "cloudy", text: "Langit berawan", isCorrect: true },
      { id: "rain", text: "Sedang turun hujan", isCorrect: false },
      { id: "storm", text: "Ada petir", isCorrect: false },
    ],
  },

  // Slide 4
  {
    question: "the wind is strong.",
    sub: "Apa arti kalimat di atas?",
    options: [
      { id: "wind", text: "Anginnya kencang", isCorrect: true },
      { id: "cold", text: "Cuacanya dingin", isCorrect: false },
      { id: "cloud", text: "Langit berawan", isCorrect: false },
      { id: "rain", text: "Sedang turun hujan", isCorrect: false },
    ],
  },

  // Slide 5
  {
    question: "It is stormy.",
    sub: "Apa arti kalimat di atas?",
    options: [
      { id: "sunny", text: "Cuacanya cerah", isCorrect: false },
      { id: "storm", text: "Sedang badai", isCorrect: true },
      { id: "cloud", text: "Langit berawan", isCorrect: false },
      { id: "wind", text: "Anginnya sepoi-sepoi", isCorrect: false },
    ],
  },

  // Slide 6
  {
    question: "It is snowy.",
    sub: "Apa arti kalimat di atas?",
    options: [
      { id: "snow", text: "Sedang turun salju", isCorrect: true },
      { id: "hot", text: "Cuacanya panas", isCorrect: false },
      { id: "wind", text: "Anginnya kencang", isCorrect: false },
      { id: "storm", text: "Sedang badai", isCorrect: false },
    ],
  },

  // Slide 7
  {
    question: "It is spring.",
    sub: "Apa arti kalimat di atas?",
    options: [
      { id: "spring", text: "Musim semi", isCorrect: true },
      { id: "summer", text: "Musim panas", isCorrect: false },
      { id: "autumn", text: "Musim gugur", isCorrect: false },
      { id: "winter", text: "Musim dingin", isCorrect: false },
    ],
  },

  // Slide 8
  {
    question: "It is summer.",
    sub: "Apa arti kalimat di atas?",
    options: [
      { id: "summer", text: "Musim panas", isCorrect: true },
      { id: "spring", text: "Musim semi", isCorrect: false },
      { id: "autumn", text: "Musim gugur", isCorrect: false },
      { id: "winter", text: "Musim dingin", isCorrect: false },
    ],
  },

  // Slide 9
  {
    question: "It is autumn.",
    sub: "Apa arti kalimat di atas?",
    options: [
      { id: "autumn", text: "Musim gugur", isCorrect: true },
      { id: "spring", text: "Musim semi", isCorrect: false },
      { id: "summer", text: "Musim panas", isCorrect: false },
      { id: "winter", text: "Musim dingin", isCorrect: false },
    ],
  },

  // Slide 10
  {
    question: "It is clear at night.",
    sub: "Apa arti kalimat di atas?",
    options: [
      { id: "night", text: "Cerah di malam hari", isCorrect: true },
      { id: "rain", text: "Sedang turun hujan", isCorrect: false },
      { id: "cloud", text: "Langit berawan", isCorrect: false },
      { id: "storm", text: "Sedang badai", isCorrect: false },
    ],
  },
];

const PAGE_THEMES = [
  // Slide 1 - Sunny
  {
    title: "Weather & Seasons",
    subtitle: "(Cuaca dan Musim)",
    background: "/background3/slide1.png",
    board: "blue",
  },

  // Slide 2 - Rainy
  {
    title: "Weather & Seasons",
    subtitle: "(Cuaca dan Musim)",
    background: "/background3/slide2.png",
    board: "navy",
  },

  // Slide 3 - Cloudy
  {
    title: "Weather & Seasons",
    subtitle: "(Cuaca dan Musim)",
    background: "/background3/slide3.png",
    board: "green",
  },

  // Slide 4 - Windy
  {
    title: "Weather & Seasons",
    subtitle: "(Cuaca dan Musim)",
    background: "/background3/slide4.png",
    board: "cyan",
  },

  // Slide 5 - Stormy
  {
    title: "Weather & Seasons",
    subtitle: "(Cuaca dan Musim)",
    background: "/background3/slide5.png",
    board: "purple",
  },

  // Slide 6 - Snowy
  {
    title: "Weather & Seasons",
    subtitle: "(Cuaca dan Musim)",
    background: "/background3/slide6.png",
    board: "orange",
  },

  // Slide 7 - Spring
  {
    title: "Weather & Seasons",
    subtitle: "(Cuaca dan Musim)",
    background: "/background3/slide7.png",
    board: "pink",
  },

  // Slide 8 - Summer
  {
    title: "Weather & Seasons",
    subtitle: "(Cuaca dan Musim)",
    background: "/background3/slide8.png",
    board: "yellow",
  },

  // Slide 9 - Autumn
  {
    title: "Weather & Seasons",
    subtitle: "(Cuaca dan Musim)",
    background: "/background3/slide9.png",
    board: "orange",
  },

  // Slide 10 - Night
  {
    title: "Weather & Seasons",
    subtitle: "(Cuaca dan Musim)",
    background: "/background3/slide10.png",
    board: "navy",
  },
];

export default function Section3() {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  const [popup, setPopup] = useState(null);
  const [result, setResult] = useState(null);
  const [results, setResults] = useState(() => QUESTIONS.map(() => null));
  const [showNext, setShowNext] = useState(false); // ⬅️ kontrol tombol Next
  const [showResult, setShowResult] = useState(false);

  const totalQuestions = QUESTIONS.length;
  const currentQuestion = QUESTIONS[currentIndex];
  const currentTheme = PAGE_THEMES[currentIndex];

const boardStyle = {
  blue: {
    background: "linear-gradient(180deg,#2d7be8,#1e57c7)",
  },

  navy: {
    background: "linear-gradient(180deg,#233b7a,#142856)",
  },

  green: {
    background: "linear-gradient(180deg,#4CAF50,#2E7D32)",
  },

  cyan: {
    background: "linear-gradient(180deg,#20C997,#0F8E83)",
  },

  purple: {
    background: "linear-gradient(180deg,#8B5CF6,#6D28D9)",
  },

  orange: {
    background: "linear-gradient(180deg,#FF9800,#F57C00)",
  },

  pink: {
    background: "linear-gradient(180deg,#EC4899,#DB2777)",
  },

  yellow: {
    background: "linear-gradient(180deg,#FFC107,#FF9800)",
  },
}[currentTheme.board];

  const goHome = () => navigate("/menu");

  // 🔊 fungsi memutar efek suara
  const playSfx = (type) => {
    let src = "";
    if (type === "success") src = "/audio/correct.mp3";
    else if (type === "error") src = "/audio/wrong_5.mp3";
    else if (type === "finish") src = "/audio/yeay.mp3";

    if (!src) return;
    const audio = new Audio(src);
    audio.play().catch(() => {});
  };

  const handleSelect = (id) => {
    if (results[currentIndex] !== null) return; // sudah diperiksa
    setSelectedId(id);
    setPopup(null);
    setResult(null);
  };

  const handleCheck = () => {
    if (!selectedId) {
      setPopup({
        type: "error",
        msg: "Silakan pilih salah satu jawaban terlebih dahulu.",
      });
      setResult(null);
      return;
    }

    const chosen = currentQuestion.options.find((opt) => opt.id === selectedId);
    const isCorrect = !!chosen?.isCorrect;

    const newResults = [...results];
    newResults[currentIndex] = isCorrect ? "correct" : "wrong";
    setResults(newResults);

    setResult(isCorrect ? "correct" : "wrong");
    playSfx(isCorrect ? "success" : "error"); // 🔊 mainkan suara benar/salah
    setShowNext(true); // tampilkan tombol Next setelah diperiksa

    setPopup({
      type: isCorrect ? "success" : "error",
      msg: isCorrect
        ? "Jawaban kamu benar, hebat! 🎉"
        : "Jawaban belum tepat, kita lanjut ke soal berikutnya ya 🙂",
    });
  };

  const handleNext = () => {

    // kalau ini soal terakhir → mainkan suara dan pindah ke score
   if (currentIndex === totalQuestions - 1) {
      playSfx("finish");
      setShowResult(true);
      return;
    }

    // pindah ke soal berikutnya
    setCurrentIndex((prev) => prev + 1);
    setSelectedId(null);
    setResult(null);
    setPopup(null);
    setShowNext(false);
  };

  const closePopup = () => {
  setPopup(null);

  // kalau sudah diperiksa, lanjut otomatis
  if (showNext) {
    handleNext();
  }
};

  // kelas untuk opsi
  const getOptionClass = (opt) => {
    if (!result) {
      return selectedId === opt.id ? "section3-option-selected" : "";
    }
    if (selectedId === opt.id && result === "correct") {
      return "section3-option-correct";
    }
    if (selectedId === opt.id && result === "wrong") {
      return "section3-option-wrong";
    }
    return "";
  };

  const isLastQuestion = currentIndex === totalQuestions - 1;
    const correctCount = results.filter(
    (r) => r === "correct"
  ).length;

  const wrongCount = totalQuestions - correctCount;

  const score = Math.round(
    (correctCount / totalQuestions) * 100
  );

  return (
    <div className="section3-screen">
      {/* HEADER */}
      <header
        className="section3-header"
        style={{
          backgroundImage: `url(${currentTheme.background})`,
        }}
      >

        <button
          className="back-btn"
          onClick={() => navigate("/menu")}
        >
          ←
        </button>

        <button className="music-btn">
          🔊
        </button>

        <div className="slide-progress">
          Slide {currentIndex + 1} dari {totalQuestions}
        </div>

        <div
          className="header-title-box"
          style={boardStyle}
        >
          <h1>{currentTheme.title}</h1>

          <p>{currentTheme.subtitle}</p>
        </div>

      </header>

      {/* BODY */}
      <main className="section3-body">

      <div className="section3-card">

        <div className="section3-card-title">
          Interpret The Following Sentences
        </div>

        <p className="section3-progress">
          Soal {currentIndex + 1} dari {totalQuestions}
        </p>

        <div className="section3-question-box">

          <h2 className="section3-question">
            {currentIndex + 1}. {currentQuestion.question}
          </h2>

          <p className="section3-subtitle">
            {currentQuestion.sub}
          </p>

        </div>

        <div className="section3-options-grid">
          {currentQuestion.options.map((opt) => (
            <button
              key={opt.id}
              className={`section3-option-btn ${getOptionClass(opt)}`}
              onClick={() => handleSelect(opt.id)}
              disabled={results[currentIndex] !== null}
            >
              {opt.text}
            </button>
          ))}
        </div>

        {showNext ? (
          <button
            className="section3-check-btn"
            onClick={handleNext}
          >
            {isLastQuestion ? "Finish" : "Next"}
          </button>
        ) : (
          <button
            className="section3-check-btn"
            onClick={handleCheck}
          >
            Chek Answer
          </button>
        )}

      </div>

    </main>

      {/* FOOTER */}
      <footer className="menu-footer">

        <img
          src="/images/flower-left.png"
          className="flower-left"
          alt=""
        />

        <button
          className="menu-home-btn"
          onClick={goHome}
          aria-label="Home"
        >
          <FaHome />
        </button>

        <img
          src="/images/flower-right.png"
          className="flower-right"
          alt=""
        />

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
      {showResult && (
      <div className="result-overlay">
        <div
          className="result-popup"
          onClick={(e) => e.stopPropagation()}
        >

          <button
            className="result-close"
            onClick={() => {
              setShowResult(false);
              navigate("/menu");
            }}
          >
            ✕
          </button>

          <div className="result-trophy">
            🏆
          </div>

          <h2 className="result-title">
            Excellent!
          </h2>

          <p className="result-subtitle">
            You have completed this section.
          </p>

          <div className="result-card">

            <div className="result-row">
              <span>✅ Correct</span>
              <strong>{correctCount}</strong>
            </div>

            <div className="result-row">
              <span>❌ Wrong</span>
              <strong>{wrongCount}</strong>
            </div>

            <div className="result-row">
              <span>🏆 Score</span>
              <strong>{score}%</strong>
            </div>

          </div>

          <button
            className="next-section-btn"
            onClick={() => {
              setShowResult(false);
              navigate("/section4");
            }}
          >
            Next Section →
          </button>

        </div>
      </div>
    )}
    </div>
  );
}
