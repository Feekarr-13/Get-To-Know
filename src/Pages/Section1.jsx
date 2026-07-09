// src/Pages/Section1.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Section1.css";

/* DATA DASAR – TIDAK DIUBAH, HANYA DITAMBAH */
const BASE_LEFT_WORDS = [
  // ================= DAILY ACTIVITIES =================
  { id: "wake", text: "Wake Up", audioSrc: "/audio/wake up.mp3" },
  { id: "bath", text: "Take a bath", audioSrc: "/audio/bath.mp3" },
  { id: "breakfast", text: "Have breakfast", audioSrc: "/audio/breakfast.mp3" },
  { id: "goschool", text: "Go to school", audioSrc: "/audio/school.mp3" },
  { id: "study", text: "Study", audioSrc: "/audio/study.mp3" },

  { id: "homework", text: "Homework", audioSrc: "/audio/homework.mp3" },
  { id: "play", text: "Play", audioSrc: "/audio/play.mp3" },
  { id: "lunch", text: "Lunch", audioSrc: "/audio/lunch.mp3" },
  { id: "watchtv", text: "Watch TV", audioSrc: "/audio/watch tv.mp3" },
  { id: "sleep", text: "Sleep", audioSrc: "/audio/sleep.mp3" },

  // ================= SCHOOL =================
  { id: "school", text: "School", audioSrc: "/audio/school-word.mp3" },
  { id: "teacher", text: "Teacher", audioSrc: "/audio/teacher.mp3" },
  { id: "student", text: "Student", audioSrc: "/audio/student.mp3" },
  { id: "classroom", text: "Classroom", audioSrc: "/audio/classroom.mp3" },
  { id: "library", text: "Library", audioSrc: "/audio/library.mp3" },

  { id: "canteen", text: "Canteen", audioSrc: "/audio/canteen.mp3" },
  { id: "playground", text: "Playground", audioSrc: "/audio/playground.mp3" },
  { id: "english", text: "English", audioSrc: "/audio/english.mp3" },
  { id: "math", text: "Math", audioSrc: "/audio/math.mp3" },
  { id: "science", text: "Science", audioSrc: "/audio/science.mp3" },

  // ================= WEATHER =================
  { id: "sunny", text: "Sunny", audioSrc: "/audio/sunny.mp3" },
  { id: "cloudy", text: "Cloudy", audioSrc: "/audio/cloudy.mp3" },
  { id: "rainy", text: "Rainy", audioSrc: "/audio/rainy.mp3" },
  { id: "windy", text: "Windy", audioSrc: "/audio/windy.mp3" },
  { id: "stormy", text: "Stormy", audioSrc: "/audio/stormy.mp3" },

  { id: "hot", text: "Hot", audioSrc: "/audio/hot.mp3" },
  { id: "cold", text: "Cold", audioSrc: "/audio/cold.mp3" },
  { id: "dryseason", text: "Dry season", audioSrc: "/audio/dry season.mp3" },
  { id: "rainyseason", text: "Rainy season", audioSrc: "/audio/rainy season.mp3" },

  // ================= FEELINGS =================
  { id: "happy", text: "Happy", audioSrc: "/audio/happy.mp3" },
  { id: "sad", text: "Sad", audioSrc: "/audio/sad.mp3" },
  { id: "angry", text: "Angry", audioSrc: "/audio/angry.mp3" },
  { id: "tired", text: "Tired", audioSrc: "/audio/tired.mp3" },
  { id: "sick", text: "Sick", audioSrc: "/audio/sick.mp3" },

  { id: "hungry", text: "Hungry", audioSrc: "/audio/hungry.mp3" },
  { id: "thirsty", text: "Thirsty", audioSrc: "/audio/thirsty.mp3" },
  { id: "scared", text: "Scared", audioSrc: "/audio/scared.mp3" },
  { id: "excited", text: "Excited", audioSrc: "/audio/excited.mp3" },
];

const BASE_RIGHT_WORDS = [
  // ================= DAILY ACTIVITIES =================
  { id: "wake", text: "Bangun tidur" },
  { id: "bath", text: "Mandi" },
  { id: "breakfast", text: "Sarapan" },
  { id: "goschool", text: "Pergi ke sekolah" },
  { id: "study", text: "Belajar" },

  { id: "homework", text: "Pekerjaan Rumah" },
  { id: "play", text: "Bermain" },
  { id: "lunch", text: "Makan siang" },
  { id: "watchtv", text: "Menonton TV" },
  { id: "sleep", text: "Tidur" },

  // ================= SCHOOL =================
  { id: "school", text: "Sekolah" },
  { id: "teacher", text: "Guru" },
  { id: "student", text: "Siswa" },
  { id: "classroom", text: "Ruang kelas" },
  { id: "library", text: "Perpustakaan" },

  { id: "canteen", text: "Kantin" },
  { id: "playground", text: "Halaman bermain" },
  { id: "english", text: "Bahasa Inggris" },
  { id: "math", text: "Matematika" },
  { id: "science", text: "Ilmu Pengetahuan Alam" },

  // ================= WEATHER =================
  { id: "sunny", text: "Cerah" },
  { id: "cloudy", text: "Berawan" },
  { id: "rainy", text: "Hujan" },
  { id: "windy", text: "Berangin" },
  { id: "stormy", text: "Badai" },

  { id: "hot", text: "Panas" },
  { id: "cold", text: "Dingin" },
  { id: "dryseason", text: "Musim kemarau" },
  { id: "rainyseason", text: "Musim hujan" },

  // ================= FEELINGS =================
  { id: "happy", text: "Senang" },
  { id: "sad", text: "Sedih" },
  { id: "angry", text: "Marah" },
  { id: "tired", text: "Lelah" },
  { id: "sick", text: "Sakit" },

  { id: "hungry", text: "Lapar" },
  { id: "thirsty", text: "Haus" },
  { id: "scared", text: "Takut" },
  { id: "excited", text: "Bersemangat" },
];

/* FUNGSI UNTUK MENGACAK ARRAY (Fisher–Yates shuffle) */
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const PAIRS_PER_PAGE = 5;

export default function Section1() {
  const navigate = useNavigate();

  // 🔹 Bikin "slide" dari data dasar: tiap slide berisi 5 id yang sama di kiri & kanan
  const [slides] = useState(() => {
    const allIds = BASE_LEFT_WORDS.map((w) => w.id); // ['wake','bath',...]
    const result = [];

    for (let i = 0; i < allIds.length; i += PAIRS_PER_PAGE) {
      const pageIds = allIds.slice(i, i + PAIRS_PER_PAGE); // 5 id per halaman

      const leftGroup = BASE_LEFT_WORDS.filter((w) =>
        pageIds.includes(w.id)
      );
      const rightGroup = BASE_RIGHT_WORDS.filter((w) =>
        pageIds.includes(w.id)
      );

      result.push({
        left: shuffleArray(leftGroup),
        right: shuffleArray(rightGroup),
      });
    }

    return result;
  });

  const [currentPage, setCurrentPage] = useState(0); // halaman aktif
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [selectedRight, setSelectedRight] = useState(null);
  const [matchedIds, setMatchedIds] = useState([]); // pair yang benar di halaman ini
  const [wrongPair, setWrongPair] = useState(null); // {leftId, rightId}
  const [popup, setPopup] = useState(null); // {type: "success" | "error"}

  const currentSlide = slides[currentPage];
  const leftWords = currentSlide.left;
  const rightWords = currentSlide.right;

  const isLastPage = currentPage === slides.length - 1;
  const isPageComplete = matchedIds.length === leftWords.length; // semua 5 sudah benar

  const goHome = () => navigate("/menu");

  // ketika klik Next / Finish
  const handleNext = () => {
    if (!isLastPage) {
      setCurrentPage((prev) => prev + 1);
      setSelectedLeft(null);
      setSelectedRight(null);
      setMatchedIds([]);
      setWrongPair(null);
      setPopup(null);
    } else {
      navigate("/menu");
    }
  };

  // 🔊 fungsi play audio kata
  const playAudio = (src) => {
    if (!src) return;
    const audio = new Audio(src);
    audio.play().catch((err) => {
      console.warn("Tidak bisa memutar audio:", err);
    });
  };

  // 🔊 fungsi play SFX benar/salah
  const playSfx = (type) => {
    const src =
      type === "success"
        ? "/audio/correct.mp3"
        : "/audio/wrong_5.mp3"; // pastikan file ini ada di public/audio

    const audio = new Audio(src);
    audio.play().catch((err) => {
      console.warn("Tidak bisa memutar SFX:", err);
    });
  };

  // fungsi umum ketika tombol diklik
  const handleSelect = (side, id) => {
    // kalau sudah benar, jangan bisa dipilih lagi
    if (matchedIds.includes(id)) return;

    let newLeft = selectedLeft;
    let newRight = selectedRight;

    if (side === "left") {
      newLeft = id;
      setSelectedLeft(id);
    } else {
      newRight = id;
      setSelectedRight(id);
    }

    // kalau dua-duanya sudah terpilih → cek
    if (newLeft && newRight) {
      if (newLeft === newRight) {
        // ✅ benar
        setMatchedIds((prev) => [...prev, newLeft]);
        setWrongPair(null);
        setPopup({ type: "success" });
        playSfx("success"); // 🔊 SFX jawaban benar
      } else {
        // ❌ salah
        setWrongPair({ leftId: newLeft, rightId: newRight });
        setPopup({ type: "error" });
        playSfx("error"); // 🔊 SFX jawaban salah

        // hapus highlight merah setelah 1 detik
        setTimeout(() => {
          setWrongPair(null);
        }, 1000);
      }

      // reset pilihan untuk percobaan berikutnya
      setSelectedLeft(null);
      setSelectedRight(null);
    }
  };

  return (
    <div className="section1-screen">
      {/* HEADER KUNING */}
      <header className="section1-header">
        <div className="section1-header-inner">
          <p className="section1-title-en">Daily Activities</p>
          <p className="section1-title-id">(Kegiatan Sehari-hari)</p>
        </div>

        {/* KARTU PUTIH INSTRUKSI */}
        <div className="section1-instruction">Ketuk Pasangan Yang Cocok</div>
      </header>

      {/* ISI */}
      <main className="section1-body">
        {/* INFO HALAMAN */}
        <p className="section1-progress">
          Halaman {currentPage + 1} dari {slides.length}
        </p>

        <div className="section1-grid">
          {/* KOLUMN KIRI (ENGLISH) */}
          <div className="section1-col">
            {leftWords.map((item) => {
              const isMatched = matchedIds.includes(item.id);
              const isWrong =
                wrongPair && wrongPair.leftId === item.id;

              return (
                <button
                  key={item.id}
                  className={`section1-pair ${
                    isMatched ? "pair-correct" : ""
                  } ${isWrong ? "pair-wrong" : ""}`}
                  onClick={() => {
                    playAudio(item.audioSrc); // 🔊 audio kata Inggris
                    handleSelect("left", item.id);
                  }}
                  disabled={isMatched}
                >
                  {item.text}
                </button>
              );
            })}
          </div>

          {/* KOLUMN KANAN (INDONESIA) */}
          <div className="section1-col">
            {rightWords.map((item) => {
              const isMatched = matchedIds.includes(item.id);
              const isWrong =
                wrongPair && wrongPair.rightId === item.id;

              return (
                <button
                  key={item.id}
                  className={`section1-pair ${
                    isMatched ? "pair-correct" : ""
                  } ${isWrong ? "pair-wrong" : ""}`}
                  onClick={() => handleSelect("right", item.id)}
                  disabled={isMatched}
                >
                  {item.text}
                </button>
              );
            })}
          </div>
        </div>

        {/* TOMBOL NEXT / FINISH */}
        <div className="section1-next-wrapper">
          <button
            className="section1-next"
            onClick={handleNext}
            disabled={!isPageComplete} // harus selesai 5/5 dulu
          >
            {isLastPage ? "Finish" : "Next"}
          </button>
        </div>
      </main>

      {/* FOOTER + HOME */}
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

      {/* POPUP BENAR / SALAH */}
      {popup && (
        <div
          className="section1-popup-backdrop"
          onClick={() => setPopup(null)}
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
                ? "Jawaban benar, hebat!"
                : "Jawaban belum tepat, coba lagi ya."}
            </p>
            <button
              className="popup-close-btn"
              onClick={() => setPopup(null)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
