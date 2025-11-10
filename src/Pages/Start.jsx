// src/Pages/Start.jsx
import { useNavigate } from "react-router-dom";
import "../styles/Start.css";

export default function Start() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/menu");
  };

  return (
    <div className="start-screen">
      <div className="start-content">
        {/* Teks atas */}
        <h1 className="start-title">
          Welcome To <span className="highlight">....!</span>
        </h1>

        {/* Logo */}
        <img src="/logo2.png" alt="Get To Know Logo" className="start-logo" />

        {/* Tagline di bawah logo */}
        {/* Tagline di bawah logo */}
        <p className="start-tagline">
        Unlock your learning journey. Explore, discover, and grow with every lesson With
        </p>
        {/* Teks bawah */}
        <h2 className="start-subtitle">Get To Know</h2>
      </div>

      {/* Tombol Start */}
      <button className="start-button" onClick={handleStart}>
        Start
      </button>
    </div>
  );
}
