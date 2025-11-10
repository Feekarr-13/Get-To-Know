// src/Pages/Menu.jsx
import { Link, useNavigate } from "react-router-dom";
import "../styles/Menu.css";  


export default function Menu() {
  const navigate = useNavigate();

  const goHome = () => {
    // nanti bisa diarahkan ke halaman lain kalau mau
    navigate("/menu");
  };

  return (
    <div className="menu-screen">
      {/* HEADER KUNING */}
      <header className="menu-header">
        <div className="menu-header-text">
          <p className="menu-welcome">Hello welcome to</p>
          <p className="menu-title">
            <span className="menu-title-bold">Get To Know</span>….
          </p>
        </div>

        {/* KARTU PUTIH MAIN COURSE */}
        <div className="menu-main-card">
          <span>Main Course</span>
        </div>
      </header>

      {/* TOMBOL SECTION */}
      <main className="menu-body">
        <Link to="/section1" className="menu-section-btn">
          Section 1
        </Link>
        <Link to="/section2" className="menu-section-btn">
          Section 2
        </Link>
        <Link to="/section3" className="menu-section-btn">
          Section 3
        </Link>
         <Link to="/section4" className="menu-section-btn">
          Section 4
        </Link>
      </main>

      {/* FOOTER + TOMBOL HOME */}
      <footer className="menu-footer">
        <button className="menu-home-btn" onClick={goHome} aria-label="Home">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
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

    </div>
  );
}
