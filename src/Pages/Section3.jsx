// src/Pages/Section3.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Section3.css";

const QUESTIONS = [
  {
    question: "It is raining.",
    sub: "Apa arti kalimat di atas?",
    options: [
      { id: "hot", text: "Cuacanya panas", isCorrect: false },
      { id: "rain", text: "Sedang turun hujan", isCorrect: true },
      { id: "clear", text: "Cuacanya cerah", isCorrect: false },
      { id: "wind", text: "Anginnya kencang", isCorrect: false },
    ],
  },
  {
    question: "Today is sunny.",
    sub: "Apa arti kalimat di atas?",
    options: [
      { id: "cloudy", text: "Hari ini berawan", isCorrect: false },
      { id: "sunny", text: "Hari ini cerah", isCorrect: true },
      { id: "rainy", text: "Hari ini hujan", isCorrect: false },
      { id: "cold", text: "Hari ini dingin", isCorrect: false },
    ],
  },
  {
    question: "I am happy.",
    sub: "Apa arti kalimat di atas?",
    options: [
      { id: "angry", text: "Saya marah", isCorrect: false },
      { id: "sad", text: "Saya sedih", isCorrect: false },
      { id: "happy", text: "Saya senang", isCorrect: true },
      { id: "sick", text: "Saya sakit", isCorrect: false },
    ],
  },
  {
    question: "He is sick.",
    sub: "Apa arti kalimat di atas?",
    options: [
      { id: "tired", text: "Dia lelah", isCorrect: false },
      { id: "sick", text: "Dia sakit", isCorrect: true },
      { id: "hungry", text: "Dia lapar", isCorrect: false },
      { id: "happy", text: "Dia bahagia", isCorrect: false },
    ],
  },
  {
    question: "We study English on Monday.",
    sub: "Apa arti kalimat di atas?",
    options: [
      { id: "right", text: "Kami belajar Bahasa Inggris pada hari Senin", isCorrect: true },
      { id: "ball", text: "Kami bermain bola di hari Senin", isCorrect: false },
      { id: "sunday", text: "Kami pergi ke sekolah hari Minggu", isCorrect: false },
      { id: "everyday", text: "Kami membaca buku setiap hari", isCorrect: false },
    ],
  },
  {
    question: "My teacher is kind.",
    sub: "Apa arti kalimat di atas?",
    options: [
      { id: "bad", text: "Guru saya jahat", isCorrect: false },
      { id: "funny", text: "Guru saya lucu", isCorrect: false },
      { id: "kind", text: "Guru saya baik", isCorrect: true },
      { id: "old", text: "Guru saya tua", isCorrect: false },
    ],
  },
  {
    question: "I like math.",
    sub: "Apa arti kalimat di atas?",
    options: [
      { id: "like", text: "Saya suka matematika", isCorrect: true },
      { id: "hate", text: "Saya benci matematika", isCorrect: false },
      { id: "science", text: "Saya belajar sains", isCorrect: false },
      { id: "noLesson", text: "Saya tidak punya pelajaran", isCorrect: false },
    ],
  },
  {
    question: "I get up at six.",
    sub: "Apa arti kalimat di atas?",
    options: [
      { id: "sleepSix", text: "Saya tidur pukul enam", isCorrect: false },
      { id: "dinnerSix", text: "Saya makan malam pukul enam", isCorrect: false },
      { id: "getupSix", text: "Saya bangun pukul enam", isCorrect: true },
      { id: "schoolSix", text: "Saya pergi sekolah pukul enam", isCorrect: false },
    ],
  },
  {
    question: "I have breakfast.",
    sub: "Apa arti kalimat di atas?",
    options: [
      { id: "lunch", text: "Saya makan siang", isCorrect: false },
      { id: "breakfast", text: "Saya makan pagi", isCorrect: true },
      { id: "dinner", text: "Saya makan malam", isCorrect: false },
      { id: "tea", text: "Saya minum teh sore", isCorrect: false },
    ],
  },
  {
    question: "I go to school by bicycle.",
    sub: "Apa arti kalimat di atas?",
    options: [
      { id: "car", text: "Saya pergi ke sekolah naik mobil", isCorrect: false },
      { id: "walk", text: "Saya pergi ke sekolah jalan kaki", isCorrect: false },
      { id: "bike", text: "Saya pergi ke sekolah naik sepeda", isCorrect: true },
      { id: "noSchool", text: "Saya tidak pergi ke sekolah", isCorrect: false },
    ],
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

  const totalQuestions = QUESTIONS.length;
  const currentQuestion = QUESTIONS[currentIndex];

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
    const newCorrectCount = results.filter((r) => r === "correct").length;

    // kalau ini soal terakhir → mainkan suara dan pindah ke score
    if (currentIndex === totalQuestions - 1) {
      playSfx("finish");
      setTimeout(() => {
        navigate("/score", {
          state: {
            score: newCorrectCount,
            total: totalQuestions,
          },
        });
      }, 1500);
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

  return (
    <div className="section3-screen">
      {/* HEADER */}
      <header className="section3-header">
        <div className="section3-header-inner">
          <p className="section3-title-main">Multiple Choice</p>
          <p className="section3-title-sub">(Pilihlah jawaban yang benar!)</p>
        </div>
        <div className="section3-instruction-card">
          Interpret The Following Sentences
        </div>
      </header>

      {/* BODY */}
      <main className="section3-body">
        <div className="section3-body-inner">
          <p
            className="section3-progress"
            style={{ textAlign: "center", color: "#1ca2a2", fontWeight: 600 }}
          >
            Soal {currentIndex + 1} dari {totalQuestions}
          </p>

          <div className="section3-question-block">
            <p className="section3-question-en">
              <span className="section3-question-number">
                {currentIndex + 1}.{" "}
              </span>
              <span className="section3-question-italic">
                {currentQuestion.question}
              </span>
            </p>
            <p className="section3-question-id">{currentQuestion.sub}</p>
          </div>

          <div className="section3-options">
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

          {/* Tombol ganti dinamis */}
          {showNext ? (
            <button
              className="section3-check-btn"
              onClick={handleNext}
              style={{ backgroundColor: "#1ca2a2" }}
            >
              {isLastQuestion ? "Finish" : "Next"}
            </button>
          ) : (
            <button className="section3-check-btn" onClick={handleCheck}>
              Periksa
            </button>
          )}
        </div>
      </main>

      {/* FOOTER */}
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
