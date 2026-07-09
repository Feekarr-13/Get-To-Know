import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Splash from "./Pages/Splash";
import Start from "./Pages/Start";
import Menu from "./Pages/Menu";
import Section1 from "./Pages/Section1";
import Section2 from "./Pages/Section2";
import Section3 from "./Pages/Section3";
import Section4 from "./Pages/Section4";
import Score from "./Pages/Score";

import AudioManager from "./utils/AudioManager";

export default function App() {

  useEffect(() => {
    // Nanti kita panggil backsound di sini
    // AudioManager.play();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/start" element={<Start />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/section1" element={<Section1 />} />
      <Route path="/section2" element={<Section2 />} />
      <Route path="/section3" element={<Section3 />} />
      <Route path="/section4" element={<Section4 />} />
      <Route path="/score" element={<Score />} />
    </Routes>
  );
}