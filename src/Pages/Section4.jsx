// ======================================================
// SECTION 4 - FEELINGS & HEALTH
// ======================================================

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";

import "../styles/Section4.css";

// ======================================================
// QUESTIONS
// ======================================================

const QUESTIONS = [
  {
    title: "Happy",
    indo: "Aku senang karena mendapat hadiah.",
    enPrefix: "I am",
    enSuffix: "because I got a gift.",
    answer: "happy",
  },

  {
    title: "Sad",
    indo: "Aku sedih ketika merindukan temanku.",
    enPrefix: "I feel",
    enSuffix: "when I miss my friend.",
    answer: "sad",
  },

  {
    title: "Angry",
    indo: "Dia marah karena kehilangan mainannya.",
    enPrefix: "He is",
    enSuffix: "because he lost his toy.",
    answer: "angry",
  },

  {
    title: "Sick",
    indo: "Dia sakit dan harus beristirahat.",
    enPrefix: "She is",
    enSuffix: "and needs to rest.",
    answer: "sick",
  },

  {
    title: "Tired",
    indo: "Aku lelah setelah seharian beraktivitas.",
    enPrefix: "I am",
    enSuffix: "after a long day.",
    answer: "tired",
  },
];

// ======================================================
// PAGE THEMES
// ======================================================

const PAGE_THEMES = [
  {
    title: "Happy",
    background: "/background4/slide1.png",
    mascot: "/mascot4/happy.png",
    board: "pink",
  },

  {
    title: "Sad",
    background: "/background4/slide2.png",
    mascot: "/mascot4/sad.png",
    board: "blue",
  },

  {
    title: "Angry",
    background: "/background4/slide3.png",
    mascot: "/mascot4/angry.png",
    board: "orange",
  },

  {
    title: "Sick",
    background: "/background4/slide4.png",
    mascot: "/mascot4/sick.png",
    board: "cyan",
  },

  {
    title: "Tired",
    background: "/background4/slide5.png",
    mascot: "/mascot4/tired.png",
    board: "purple",
  },
];

// ======================================================
// BOARD COLOR
// ======================================================

const BOARD_STYLE = {
  pink: {
    background: "linear-gradient(180deg,#EC4899,#DB2777)",
  },

  blue: {
    background: "linear-gradient(180deg,#2D7BE8,#1E57C7)",
  },

  orange: {
    background: "linear-gradient(180deg,#FF9800,#F57C00)",
  },

  cyan: {
    background: "linear-gradient(180deg,#20C997,#0F8E83)",
  },

  purple: {
    background: "linear-gradient(180deg,#8B5CF6,#6D28D9)",
  },
};

// ======================================================
// COMPONENT
// ======================================================

export default function Section4() {

  const navigate = useNavigate();
    // ======================================================
  // STATE
  // ======================================================

  const [currentIndex, setCurrentIndex] = useState(0);

  const [answers, setAnswers] = useState(
    QUESTIONS.map(() => "")
  );

  const [results, setResults] = useState(
    QUESTIONS.map(() => null)
  );

  const [popup, setPopup] = useState(null);

  const [showResult, setShowResult] = useState(false);

  const inputRef = useRef(null);

  // ======================================================
  // CURRENT DATA
  // ======================================================

  const currentQuestion = QUESTIONS[currentIndex];

  const currentTheme = PAGE_THEMES[currentIndex];

  const currentAnswer = answers[currentIndex];

  const totalQuestions = QUESTIONS.length;

  const correctCount = results.filter(
    (r) => r === "correct"
  ).length;

  const wrongCount = totalQuestions - correctCount;

  const score = Math.round(
    (correctCount / totalQuestions) * 100
  );

  const boardStyle = BOARD_STYLE[currentTheme.board];

  // ======================================================
  // NAVIGATION
  // ======================================================

  const goHome = () => navigate("/menu");

  const handleBack = () => navigate("/menu");

  // ======================================================
  // INPUT
  // ======================================================

  const handleBoxClick = () => {
    inputRef.current?.focus();
  };

  const handleChangeAnswer = (e) => {

    const value = e.target.value;

    setAnswers((prev) => {

      const copy = [...prev];

      copy[currentIndex] = value;

      return copy;

    });

  };

  // ======================================================
  // AUDIO
  // ======================================================

  const playSfx = (type) => {

    let src = "";

    if (type === "success")
      src = "/audio/correct.mp3";

    if (type === "error")
      src = "/audio/wrong_5.mp3";

    if (type === "finish")
      src = "/audio/yeay.mp3";

    if (!src) return;

    const audio = new Audio(src);

    audio.play().catch(() => {});

  };

  // ======================================================
  // CHECK ANSWER
  // ======================================================

  const handleCheck = () => {

    const value = currentAnswer.trim().toLowerCase();

    if (!value) {

      setPopup({

        type: "error",

        msg: "Silakan isi jawaban terlebih dahulu.",

      });

      return;

    }

    const isCorrect =
      value === currentQuestion.answer.toLowerCase();

    const newResults = [...results];

    newResults[currentIndex] =
      isCorrect ? "correct" : "wrong";

    setResults(newResults);

    playSfx(isCorrect ? "success" : "error");

    setPopup({

      type: isCorrect ? "success" : "error",

      msg: isCorrect
        ? "Jawaban benar!"
        : "Jawaban masih salah.",

    });

  };

  // ======================================================
  // CLOSE POPUP
  // ======================================================

  const closePopup = () => {

    setPopup(null);

    if (currentIndex === totalQuestions - 1) {

      playSfx("finish");

      setShowResult(true);

      return;

    }

    setCurrentIndex((prev) => prev + 1);

    setTimeout(() => {

      inputRef.current?.focus();

    }, 100);

  };
  // ======================================================
  // RENDER
  // ======================================================

  return (

    <div className="section4-screen">

      {/* ================= HEADER ================= */}

      <header
        className="section4-header"
        style={{
          backgroundImage: `url(${currentTheme.background})`,
        }}
      >

        {/* Back */}

        <button
          className="section4-back-btn"
          onClick={handleBack}
        >
          <FaArrowLeft />
        </button>

        {/* Slide */}

        <div className="section4-slide">

          Slide {currentIndex + 1}/{totalQuestions}

        </div>

        {/* Speaker */}

        <button className="section4-sound-btn">

          <HiSpeakerWave />

        </button>

        {/* Board */}

        <div
          className="section4-board"
          style={boardStyle}
        >

          <h2>

            Arrange the words correctly

          </h2>

          <p>

            to make a <b>perfect sentence</b>

          </p>

        </div>

        {/* Label */}

        <div className="section4-label">

          Lengkapi Kosakata

        </div>

        {/* Mascot */}

        <img
          src={currentTheme.mascot}
          alt={currentTheme.title}
          className="section4-mascot"
        />

      </header>

      {/* ================= WHITE CARD ================= */}

      <div className="section4-card">

        <main
          className={`section4-body ${currentTheme.title.toLowerCase()}`}
        >

          <div className="section4-body-inner">

            {/* Progress */}

            <div className="section4-progress">

              <span>

                Soal {currentIndex + 1} dari {totalQuestions}

              </span>

              <span>

                Benar : {correctCount}/{totalQuestions}

              </span>

            </div>

            {/* Theme */}

            <h1 className="section4-theme-title">

              {currentTheme.title}

            </h1>

            {/* Question */}

            <div className="section4-question-card">

              <p className="section4-question-id">

                {currentQuestion.indo}

              </p>

            </div>
                        {/* ================= ANSWER BOX ================= */}

            <div
              className="section4-answer-box"
              onClick={handleBoxClick}
            >

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
                autoComplete="off"
              />

              {currentQuestion.enSuffix && (

                <span className="section4-answer-text">

                  {currentQuestion.enSuffix}

                </span>

              )}

            </div>

            {/* ================= BUTTON ================= */}

            <button
              className="section4-check-btn"
              onClick={handleCheck}
            >

              Check Answer

            </button>

          </div>

        </main>

      </div>

      {/* ================= FOOTER ================= */}

      <footer className="menu-footer">

        <img
          src="/images/flower-left.png"
          alt=""
          className="flower-left"
        />

        <button
          className="menu-home-btn"
          onClick={goHome}
        >

          <FaHome />

        </button>

        <img
          src="/images/flower-right.png"
          alt=""
          className="flower-right"
        />

      </footer>

      {/* ================= POPUP ================= */}

      {popup && (

        <div
          className="section1-popup-backdrop"
          onClick={closePopup}
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

              {popup.msg}

            </p>

            <button
              className="popup-close-btn"
              onClick={closePopup}
            >

              OK

            </button>

          </div>

        </div>

      )}

      {/* ================= RESULT ================= */}

      {showResult && (

        <div className="result-overlay">

          <div className="result-popup">

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

              Great Job!

            </h2>

            <p className="result-subtitle">

              Section 4 Finished

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

                navigate("/menu");

              }}
            >

              Finish

            </button>

          </div>

        </div>

      )}

    </div>

  );

}