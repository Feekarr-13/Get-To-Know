// src/Pages/Start.jsx

import { useNavigate } from "react-router-dom";
import { useAudio } from "../hooks/useAudio";
import "../styles/Start.css";

export default function Start() {
  const navigate = useNavigate();
  const { playMusic } = useAudio();

  const handleStart = () => {
    playMusic();
    navigate("/menu");
  };

  return (
    <div className="start-screen">

      {/* ================= BACKGROUND ================= */}

      {/* Matahari */}
      <div className="sun">
        <div className="sun-core"></div>
      </div>

      {/* Awan */}
      <div className="cloud cloud-1"></div>
      <div className="cloud cloud-2"></div>
      <div className="cloud cloud-3"></div>
      <div className="cloud cloud-4"></div>

      {/* Bintang */}
      <span className="star star-1">✦</span>
      <span className="star star-2">✦</span>
      <span className="star star-3">✦</span>
      <span className="star star-4">✦</span>

      {/* Bukit */}
      <div className="hill hill-left"></div>
      <div className="hill hill-right"></div>

      {/* ================= CONTENT ================= */}

      <div className="start-content">

        {/* ================= LOGO ================= */}

        <div className="top-logos">

        <img
            src="/images/logo-unimus.png"
            className="top-logo"
            alt=""
        />

        <img
            src="/images/logo-pbi.png"
            className="top-logo"
            alt=""
        />

    </div>

        {/* ================= TITLE ================= */}

        <h1 className="start-title">

          Welcome To <span className="highlight">....!</span>

        </h1>

        {/* ================= LOGO + MASKOT ================= */}

        <div className="logo-wrapper">

          {/* Glow */}
          <div className="logo-glow"></div>

          {/* Maskot */}
          <img
            src="/mascot.png"
            alt="Mascot"
            className="start-mascot"
          />

          {/* Logo */}
          <img
            src="/logo2.png"
            alt="Get To Know"
            className="start-logo"
          />

        </div>

        {/* ================= TEXT ================= */}

        <p className="start-tagline">
          Unlock your learning journey.
          <br />
          Explore, discover, and grow
          <br />
          with every lesson with
        </p>

        <h2 className="start-subtitle">
          Get To <span>Know</span>
        </h2>
      </div>
        {/* ================= COPYRIGHT ================= */}

        <div className="copyright-box">

         <p className="copyright-text">

          © 2026 Yanet Andarasta Astari. Semua Hak Dilindungi.

        </p>

        <p className="developer-text">

          Get To Know - Media Pembelajaran Bahasa Inggris

        </p>

        </div>
      {/* ================= LAND ================= */}

      <div className="ground">

        <div className="flower flower-left"></div>

        <div className="flower flower-right"></div>

      </div>

      {/* ================= BUTTON ================= */}

      <button
        className="start-button"
        onClick={handleStart}
      >
        <span className="play-icon">▶</span>

        <span>Start Learning</span>
      </button>

      {/* ================= PAGE INDICATOR ================= */}

      <div className="page-indicator">
        <span className="active"></span>
        <span></span>
        <span></span>
      </div>

    </div>
  );
}