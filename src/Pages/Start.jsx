import { useNavigate } from "react-router-dom";
import { useAudio } from "../hooks/useAudio";
import "../styles/Start.css";


export default function Start() {

  const navigate = useNavigate();

  const { playMusic } = useAudio(); // tambahkan ini

  const handleStart = () => {

    playMusic(); // mulai backsound

    navigate("/menu");

  };

  return (
    <div className="start-screen">
      <div className="start-content">
        <h1 className="start-title">
          Welcome To <span className="highlight">....!</span>
        </h1>

        <img
          src="/logo2.png"
          alt="Get To Know Logo"
          className="start-logo"
        />

        <p className="start-tagline">
          Unlock your learning journey. Explore, discover, and grow with every
          lesson With
        </p>

        <h2 className="start-subtitle">
          Get To Know
        </h2>
      </div>

      <button
        className="start-button"
        onClick={handleStart}
      >
        Start
      </button>
    </div>
  );
}