// src/Pages/Score.jsx
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Score.css";

export default function Score() {
  const location = useLocation();
  const navigate = useNavigate();

  const { score, total } = location.state || { score: 0, total: 0 };

  const goMenu = () => navigate("/menu");

  return (
    <div className="score-screen">
      {/* HEADER KUNING */}
      <header className="score-header">
        <div className="score-header-inner">
          <h1 className="score-title">Your Score</h1>
        </div>
      </header>

      {/* BODY */}
      <main className="score-body">
        <div className="score-card">
          <p className="score-text-main">
            Kamu menjawab
          </p>
          <p className="score-number">
            {score} / {total}
          </p>
          <p className="score-text-sub">
            soal dengan benar.
          </p>

          {/* Pesan motivasi sederhana */}
          <p className="score-message">
            {score === total
              ? "Luar biasa! 👏 Semua jawaban benar."
              : score >= Math.ceil(total / 2)
              ? "Bagus! Tetap semangat berlatih ya 😊"
              : "Tidak apa-apa, ayo coba lagi dan terus belajar 💪"}
          </p>

          <button className="score-button" onClick={goMenu}>
            Next
          </button>
        </div>
      </main>
    </div>
  );
}
