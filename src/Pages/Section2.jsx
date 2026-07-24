// src/Pages/Section2.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Section2.css";
import { FaHome } from "react-icons/fa";

/* ==========================================================
        THEME SETIAP SLIDE SECTION 2
========================================================== */

const PAGE_THEMES = [

  // ================= 1 =================
  {
    title: "Wake Up",
    subtitle: "(Bangun Tidur)",
    background: "/background2/slide1.png",
    mascot: "/mascot2/wakeup.png",
    board: "orange",
    sceneIcon: "🌞",
  },

  // ================= 2 =================
  {
    title: "Take a Bath",
    subtitle: "(Mandi)",
    background: "/background2/slide2.png",
    mascot: "/mascot2/bath.png",
    board: "blue",
    sceneIcon: "🛁",
  },

  // ================= 3 =================
  {
    title: "Have Breakfast",
    subtitle: "(Sarapan)",
    background: "/background2/slide3.png",
    mascot: "/mascot2/breakfast.png",
    board: "orange",
    sceneIcon: "🍳",
  },

  // ================= 4 =================
  {
    title: "Go To School",
    subtitle: "(Pergi Ke Sekolah)",
    background: "/background2/slide4.png",
    mascot: "/mascot2/school.png",
    board: "green",
    sceneIcon: "🏫",
  },

  // ================= 5 =================
  {
    title: "Study",
    subtitle: "(Belajar)",
    background: "/background2/slide5.png",
    mascot: "/mascot2/study.png",
    board: "purple",
    sceneIcon: "📚",
  },

  // ================= 6 =================
  {
    title: "School",
    subtitle: "(Sekolah)",
    background: "/background2/slide6.png",
    mascot: "/mascot2/school2.png",
    board: "green",
    sceneIcon: "🏫",
  },

  // ================= 7 =================
  {
    title: "Classroom",
    subtitle: "(Ruang Kelas)",
    background: "/background2/slide7.png",
    mascot: "/mascot2/classroom.png",
    board: "blue",
    sceneIcon: "🪑",
  },

  // ================= 8 =================
  {
    title: "Math",
    subtitle: "(Matematika)",
    background: "/background2/slide8.png",
    mascot: "/mascot2/math.png",
    board: "purple",
    sceneIcon: "➗",
  },

  // ================= 9 =================
  {
    title: "English",
    subtitle: "(Bahasa Inggris)",
    background: "/background2/slide9.png",
    mascot: "/mascot2/english.png",
    board: "orange",
    sceneIcon: "🔤",
  },

  // ================= 10 =================
  {
    title: "Playground",
    subtitle: "(Lapangan)",
    background: "/background2/slide10.png",
    mascot: "/mascot2/playground.png",
    board: "cyan",
    sceneIcon: "⚽",
  },

  // ================= 11 =================
  {
    title: "Sunny",
    subtitle: "(Cerah)",
    background: "/background2/slide11.png",
    mascot: "/mascot2/sunny.png",
    board: "orange",
    sceneIcon: "☀️",
  },

  // ================= 12 =================
  {
    title: "Rainy",
    subtitle: "(Hujan)",
    background: "/background2/slide12.png",
    mascot: "/mascot2/rainy.png",
    board: "blue",
    sceneIcon: "🌧️",
  },

  // ================= 13 =================
  {
    title: "Cloudy",
    subtitle: "(Berawan)",
    background: "/background2/slide13.png",
    mascot: "/mascot2/cloudy.png",
    board: "blue",
    sceneIcon: "☁️",
  },

  // ================= 14 =================
  {
    title: "Windy",
    subtitle: "(Berangin)",
    background: "/background2/slide14.png",
    mascot: "/mascot2/windy.png",
    board: "cyan",
    sceneIcon: "🍃",
  },

  // ================= 15 =================
  {
    title: "Stormy",
    subtitle: "(Badai)",
    background: "/background2/slide15.png",
    mascot: "/mascot2/stormy.png",
    board: "navy",
    sceneIcon: "⚡",
  },

  // ================= 16 =================
  {
    title: "Happy",
    subtitle: "(Senang)",
    background: "/background2/slide16.png",
    mascot: "/mascot2/happy.png",
    board: "pink",
    sceneIcon: "😊",
  },

  // ================= 17 =================
  {
    title: "Sad",
    subtitle: "(Sedih)",
    background: "/background2/slide17.png",
    mascot: "/mascot2/sad.png",
    board: "blue",
    sceneIcon: "😢",
  },

  // ================= 18 =================
  {
    title: "Angry",
    subtitle: "(Marah)",
    background: "/background2/slide18.png",
    mascot: "/mascot2/angry.png",
    board: "red",
    sceneIcon: "😡",
  },

  // ================= 19 =================
  {
    title: "Sick",
    subtitle: "(Sakit)",
    background: "/background2/slide19.png",
    mascot: "/mascot2/sick.png",
    board: "cyan",
    sceneIcon: "🤒",
  },

  // ================= 20 =================
  {
    title: "Tired",
    subtitle: "(Lelah)",
    background: "/background2/slide20.png",
    mascot: "/mascot2/tired.png",
    board: "purple",
    sceneIcon: "😴",
  }

];
// 5 SOAL: susun kata jadi kalimat
const QUESTIONS = [

  // ================= DAILY ACTIVITIES =================

  {
    indo: "Saya bangun pagi.",
    words: [
      { id: "q1-up", text: "up", value: "up" },
      { id: "q1-get", text: "get", value: "get" },
      { id: "q1-i", text: "I", value: "i" },
    ],
    correctSequence: ["i", "get", "up"],
  },

  {
    indo: "Saya mandi.",
    words: [
      { id: "q2-take", text: "take", value: "take" },
      { id: "q2-bath", text: "a bath", value: "a bath" },
      { id: "q2-i", text: "I", value: "i" },
    ],
    correctSequence: ["i", "take", "a bath"],
  },

  {
    indo: "Saya sarapan.",
    words: [
      { id: "q3-have", text: "have", value: "have" },
      { id: "q3-breakfast", text: "breakfast", value: "breakfast" },
      { id: "q3-i", text: "I", value: "i" },
    ],
    correctSequence: ["i", "have", "breakfast"],
  },

  {
    indo: "Saya pergi ke sekolah.",
    words: [
      { id: "q4-go", text: "go", value: "go" },
      { id: "q4-to", text: "to", value: "to" },
      { id: "q4-school", text: "school", value: "school" },
      { id: "q4-i", text: "I", value: "i" },
    ],
    correctSequence: ["i", "go", "to", "school"],
  },

  {
    indo: "Saya belajar bahasa Inggris.",
    words: [
      { id: "q5-study", text: "study", value: "study" },
      { id: "q5-english", text: "English", value: "english" },
      { id: "q5-i", text: "I", value: "i" },
    ],
    correctSequence: ["i", "study", "english"],
  },

  // ================= SCHOOL =================

  {
    indo: "Saya di sekolah.",
    words: [
      { id: "q6-i", text: "I", value: "i" },
      { id: "q6-am", text: "am", value: "am" },
      { id: "q6-at", text: "at", value: "at" },
      { id: "q6-school", text: "school", value: "school" },
    ],
    correctSequence: ["i", "am", "at", "school"],
  },

  {
    indo: "Ini ruang kelasku.",
    words: [
      { id: "q7-this", text: "This", value: "this" },
      { id: "q7-is", text: "is", value: "is" },
      { id: "q7-my", text: "my", value: "my" },
      { id: "q7-classroom", text: "classroom", value: "classroom" },
    ],
    correctSequence: ["this", "is", "my", "classroom"],
  },

  {
    indo: "Saya suka matematika.",
    words: [
      { id: "q8-i", text: "I", value: "i" },
      { id: "q8-like", text: "like", value: "like" },
      { id: "q8-math", text: "math", value: "math" },
    ],
    correctSequence: ["i", "like", "math"],
  },

  {
    indo: "Kami belajar bahasa Inggris.",
    words: [
      { id: "q9-we", text: "We", value: "we" },
      { id: "q9-study", text: "study", value: "study" },
      { id: "q9-english", text: "English", value: "english" },
    ],
    correctSequence: ["we", "study", "english"],
  },

  {
    indo: "Kami bermain di lapangan.",
    words: [
      { id: "q10-we", text: "We", value: "we" },
      { id: "q10-play", text: "play", value: "play" },
      { id: "q10-playground", text: "playground", value: "playground" },
      { id: "q10-in", text: "in", value: "in" },
      { id: "q10-the", text: "the", value: "the" },
    ],
    correctSequence: ["we", "play", "in", "the", "playground"],
  },

  // ================= WEATHER =================

  {
    indo: "Hari ini cerah.",
    words: [
      { id: "q11-it", text: "It", value: "it" },
      { id: "q11-is", text: "is", value: "is" },
      { id: "q11-sunny", text: "sunny", value: "sunny" },
    ],
    correctSequence: ["it", "is", "sunny"],
  },

  {
    indo: "Hujan turun.",
    words: [
      { id: "q12-it", text: "It", value: "it" },
      { id: "q12-is", text: "is", value: "is" },
      { id: "q12-raining", text: "raining", value: "raining" },
    ],
    correctSequence: ["it", "is", "raining"],
  },

  {
    indo: "Hari ini berawan.",
    words: [
      { id: "q13-it", text: "It", value: "it" },
      { id: "q13-is", text: "is", value: "is" },
      { id: "q13-cloudy", text: "cloudy", value: "cloudy" },
    ],
    correctSequence: ["it", "is", "cloudy"],
  },

  {
    indo: "Angin bertiup kencang.",
    words: [
      { id: "q14-it", text: "It", value: "it" },
      { id: "q14-is", text: "is", value: "is" },
      { id: "q14-windy", text: "windy", value: "windy" },
    ],
    correctSequence: ["it", "is", "windy"],
  },

  {
    indo: "Ada badai.",
    words: [
      { id: "q15-there", text: "There", value: "there" },
      { id: "q15-is", text: "is", value: "is" },
      { id: "q15-storm", text: "a storm", value: "a storm" },
    ],
    correctSequence: ["there", "is", "a storm"],
  },

  // ================= FEELINGS =================

  {
    indo: "Saya senang.",
    words: [
      { id: "q16-i", text: "I", value: "i" },
      { id: "q16-am", text: "am", value: "am" },
      { id: "q16-happy", text: "happy", value: "happy" },
    ],
    correctSequence: ["i", "am", "happy"],
  },

  {
    indo: "Dia sedih.",
    words: [
      { id: "q17-she", text: "She", value: "she" },
      { id: "q17-is", text: "is", value: "is" },
      { id: "q17-sad", text: "sad", value: "sad" },
    ],
    correctSequence: ["she", "is", "sad"],
  },

  {
    indo: "Dia marah.",
    words: [
      { id: "q18-he", text: "He", value: "he" },
      { id: "q18-is", text: "is", value: "is" },
      { id: "q18-angry", text: "angry", value: "angry" },
    ],
    correctSequence: ["he", "is", "angry"],
  },

  {
    indo: "Dia sakit.",
    words: [
      { id: "q19-he", text: "He", value: "he" },
      { id: "q19-is", text: "is", value: "is" },
      { id: "q19-sick", text: "sick", value: "sick" },
    ],
    correctSequence: ["he", "is", "sick"],
  },

  {
    indo: "Saya lelah.",
    words: [
      { id: "q20-i", text: "I", value: "i" },
      { id: "q20-am", text: "am", value: "am" },
      { id: "q20-tired", text: "tired", value: "tired" },
    ],
    correctSequence: ["i", "am", "tired"],
  },

];


export default function Section2() {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIds, setSelectedIds] = useState([]);
  const [popup, setPopup] = useState(null);

  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = QUESTIONS[currentIndex];

    const currentTheme = PAGE_THEMES[currentIndex];

    const boardColors = {
      orange: "#f59e0b",
      blue: "#3b82f6",
      green: "#22c55e",
      purple: "#8b5cf6",
      cyan: "#06b6d4",
      navy: "#1e3a8a",
      pink: "#ec4899",
      red: "#ef4444",
    };

    const boardStyle = {
      backgroundColor:
        boardColors[currentTheme.board] || "#22c55e",
    };
  
  const totalQuestions = QUESTIONS.length;
  const isLastQuestion = currentIndex === totalQuestions - 1;

  const goHome = () => navigate("/menu");

  // ================= SUARA BENAR / SALAH =================

  const playSfx = (type) => {

    let src = "";

    if (type === "success") {
      src = "/audio/correct.mp3";
    }

    if (type === "error") {
      src = "/audio/wrong_5.mp3";
    }

    if (!src) return;

    const audio = new Audio(src);

    audio.volume = 1;

    audio.play().catch(() => {});

  };

  // ================= SUARA FINISH =================

    const playFinishAudio = () => {

      const audio = new Audio("/audio/yeay.mp3");

      audio.volume = 1;

      audio.play().catch(() => {});

    };
    const handleNext = () => {
    if (!isLastQuestion) {

      setCurrentIndex((prev) => prev + 1);
      setSelectedIds([]);
      setPopup(null);

    } else {

      playFinishAudio();

      setTimeout(() => {
        setShowResult(true);
      }, 400);

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

      playSfx("success");   // 🔊 suara benar

      setCorrectCount((prev) => prev + 1);

      setPopup({
          type: "success"
      });

    } else {

        playSfx("error");     // 🔊 suara salah

        setWrongCount((prev) => prev + 1);

        setPopup({
            type: "error"
        });

    }
  };

  const handleRemoveWord = (id) => {
    setSelectedIds((prev) =>
      prev.filter((item) => item !== id)
    );
  };

  const clearPopup = () => {

    setPopup(null);

    if (isLastQuestion) {

      playFinishAudio();

      setTimeout(() => {

        setShowResult(true);

      },300);

    } else {

      setCurrentIndex((prev)=>prev+1);

      setSelectedIds([]);

    }

  };

  const selectedWords = selectedIds
    .map((id) => currentQuestion.words.find((w) => w.id === id))
    .filter(Boolean);

  const score = Math.round(
    (correctCount / totalQuestions) * 100
  );

return (
    <div className="section2-screen">
      <header
      className="section2-header"
      style={{
        backgroundImage: `url(${currentTheme.background})`
      }}
    >

      <button
        className="back-btn"
        onClick={() => navigate("/menu")}
      >
        ←
      </button>

      <button
        className="music-btn"
      >
        🔊
      </button>

      <div className="slide-progress">
        Slide {currentIndex + 1} dari {QUESTIONS.length}
      </div>

      <div
        className="header-title-box"
        style={boardStyle}
      >
        <h1>{currentTheme.title}</h1>
        <p>{currentTheme.subtitle}</p>
      </div>

      <img
        src={currentTheme.mascot}
        className="header-mascot"
        alt=""
      />

    </header>

      <main className="section2-body">
        <div className="section2-body-inner">
          <div className="page-indicator">

        {QUESTIONS.map((_,index)=>(

            <span

                key={index}

                className={
                    index===currentIndex
                    ?

                    "active"

                    :

                    ""

                }

            />

        ))}

    </div>

          <h2 className="section2-question">

              {currentQuestion.indo}

          </h2>

          <p className="section2-instruction">

              Susun kalimat di bawah ini

          </p>

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
        <img
        src="/images/flower-left.png"
        className="flower-left"
        alt=""
        />

        <button
          className="menu-home-btn"
          onClick={goHome}
        >
          <FaHome />
        </button>

        <img
        src="/images/flower-right.png"
        className="flower-right"
        alt=""
        />

        </footer>
        {showResult && (

          <div className="result-overlay">

          <div className="result-popup">

          <button
          className="result-close"
          onClick={()=>{
          setShowResult(false);
          navigate("/menu");
          }}
          >

          ✕

          </button>

          <h2>🎉 Great Job!</h2>

          <p className="result-subtitle">

          Section 2 Finished

          </p>

          <div className="result-item">

          <span>✅ Correct</span>

          <strong>{correctCount}</strong>

          </div>

          <div className="result-item">

          <span>❌ Wrong</span>

          <strong>{wrongCount}</strong>

          </div>

          <div className="result-item">

          <span>📊 Score</span>

          <strong>{score}%</strong>

          </div>

          <button
          className="next-section-btn"
          onClick={()=>{

          setShowResult(false);

          navigate("/section3");

          }}
          >

          Next Section →

          </button>

          </div>

          </div>

          )}
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
