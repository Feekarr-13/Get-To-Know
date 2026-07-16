import { useEffect, useState } from "react";
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

import usePWAInstall from "./hooks/usePWAInstall";
import InstallPopup from "./components/InstallPopup";

export default function App() {

  const { isInstallable, installApp } = usePWAInstall();

  const [showInstallPopup, setShowInstallPopup] = useState(false);

  useEffect(() => {
    // AudioManager.play();
  }, []);

  // Popup hanya muncul sekali
  useEffect(() => {

    const nextShow = localStorage.getItem(
        "install-next-show"
    );

    if (

        isInstallable &&

        (!nextShow || Date.now() > Number(nextShow))

    ) {

        setShowInstallPopup(true);

    }

}, [isInstallable]);

    const handleCloseInstall = () => {

      setShowInstallPopup(false);

      const nextShow = Date.now() + (3 * 24 * 60 * 60 * 1000);

      localStorage.setItem(
          "install-next-show",
          nextShow
      );

  };

  const handleInstall = async () => {

    await installApp();

    setShowInstallPopup(false);

  };

  return (

    <>

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

      <InstallPopup

        open={showInstallPopup}

        onClose={handleCloseInstall}

        onInstall={handleInstall}

      />

    </>

  );

}