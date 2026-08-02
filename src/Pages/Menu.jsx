// src/Pages/Menu.jsx

import { Link } from "react-router-dom";
import { useAudio } from "../hooks/useAudio";
import "../styles/Menu.css";
import { FaHome } from "react-icons/fa";

export default function Menu() {
  const { toggleMute, isMuted } = useAudio();

  const sections = [
    {
      title: "Match Words",
      subtitle: "(Mencocokkan Kata)",
      desc: "Cocokkan kosakata bahasa Inggris dengan arti dalam bahasa Indonesia.",
      image: "/images/daily.png",
      icon: "☀️",
      color: "orange",
      path: "/section1",
    },
    {
      title: "Construct Sentences",
      subtitle: "(Menyusun Kalimat)",
      desc: "Susun kata-kata menjadi kalimat bahasa Inggris yang benar.",
      image: "/images/school.png",
      icon: "⭐",
      color: "green",
      path: "/section2",
    },
    {
      title: "Multiple Choice",
      subtitle: "(Pilihan Ganda)",
      desc: "Pilih jawaban yang paling tepat berdasarkan gambar atau pertanyaan.",
      image: "/images/weather.png",
      icon: "❄️",
      color: "blue",
      path: "/section3",
    },
    {
      title: "Fill in the Blank",
      subtitle: "(Isilah Bagian yang Kosong)",
      desc: "Lengkapi kalimat dengan kosakata bahasa Inggris yang tepat.",
      image: "/images/feeling.png",
      icon: "❤️",
      color: "purple",
      path: "/section4",
    },
  ];

  return (
    <div className="menu-page">

      {/* ================= HEADER ================= */}

      <header className="menu-header">

        {/* Background */}
        <img
          src="/images/header-bg.png"
          alt=""
          className="header-bg"
        />

        {/* Tombol Music */}
        <button
          className="music-button"
          onClick={toggleMute}
        >
          {isMuted ? "🔇" : "🔊"}
        </button>

        {/* Tulisan */}
        <div className="header-title">

          <h3>Hello welcome to</h3>

          <h1>
            <span className="orange">Get</span>{" "}
            <span className="green">To</span>{" "}
            <span className="blue">Know</span>....
          </h1>

        </div>

        {/* Maskot */}
        <img
          src="/mascot.png"
          className="header-mascot"
          alt="Mascot"
        />

      </header>

      {/* ================= MAIN COURSE ================= */}

      <div className="main-course-card">

        <span className="star-left">⭐</span>

        <h2>Main Course</h2>

        <span className="star-right">⭐</span>

      </div>

      {/* ================= CARD LIST ================= */}

      <main className="menu-content">

        {sections.map((item, index) => (

          <div
            className={`course-card ${item.color}`}
            key={index}
          >

            {/* Thumbnail */}
            <div className="course-image">

              <img
                src={item.image}
                alt={item.title}
              />

            </div>

            {/* Text */}
            <div className="course-info">

              <h2>{item.title}</h2>

              <h4>{item.subtitle}</h4>

              <div className="divider"></div>

              <p>{item.desc}</p>

            </div>

            {/* Icon */}
            <div className="corner-icon">
              {item.icon}
            </div>

            {/* Button */}
            <Link
              to={item.path}
              className={`start-btn ${item.color}`}
            >
              Start
              <span>❯</span>
            </Link>

          </div>

        ))}

      </main>

      {/* ================= FOOTER ================= */}

      <footer className="menu-footer">

        <img
          src="/images/flower-left.png"
          alt=""
          className="flower-left"
        />

        <footer className="menu-footer">

          <img
            src="/images/flower-left.png"
            alt=""
            className="flower-left"
          />

          <button className="menu-home-btn">

            <FaHome />

          </button>

          <img
            src="/images/flower-right.png"
            alt=""
            className="flower-right"
          />

        </footer>
        <img
          src="/images/flower-right.png"
          alt=""
          className="flower-right"
        />

      </footer>

    </div>
  );
}