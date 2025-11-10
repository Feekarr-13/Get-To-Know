// src/pages/Splash.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Splash.css";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/start");
    }, 2500); // Pindah ke halaman Start setelah 2,5 detik
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <img
          src="/logo2.png"
          alt="Get To Know Logo"
          className="splash-logo"
        />
        <h1 className="splash-title">Get To Know</h1>
      </div>
    </div>
  );
}
