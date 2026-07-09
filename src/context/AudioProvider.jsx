import { useRef, useState, useEffect } from "react";
import { AudioContext } from "./AudioContext";

export function AudioProvider({ children }) {

    const audioRef = useRef(new Audio("/audio/backsound.mp3"));

    const [isMuted, setIsMuted] = useState(
        JSON.parse(localStorage.getItem("musicMute")) || false
    );

    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    useEffect(() => {
        audioRef.current.muted = isMuted;
        localStorage.setItem("musicMute", JSON.stringify(isMuted));
    }, [isMuted]);

    const playMusic = async () => {
        try {
            await audioRef.current.play();
        } catch (err) {
            console.log(err);
        }
    };

    const pauseMusic = () => {
        audioRef.current.pause();
    };

    const toggleMute = () => {
        setIsMuted(prev => !prev);
    };

    return (
        <AudioContext.Provider
            value={{
                playMusic,
                pauseMusic,
                toggleMute,
                isMuted,
            }}
        >
            {children}
        </AudioContext.Provider>
    );
}