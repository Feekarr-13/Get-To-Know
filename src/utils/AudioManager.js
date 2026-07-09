class AudioManager {
    constructor() {
        this.audio = new Audio("/audio/backsound.mp3");
        this.audio.loop = true;
        this.audio.volume = 0.3;
    }

    play() {
        this.audio.play();
    }

    pause() {
        this.audio.pause();
    }

    stop() {
        this.audio.pause();
        this.audio.currentTime = 0;
    }

    setVolume(volume) {
        this.audio.volume = volume;
    }
}

export default new AudioManager();