import React, { useRef, useEffect, useState } from "react";
import { Howl } from "howler";
import "../styles/section.css";

const BackgroundMusic = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const sound = useRef(null);

  const toggleMute = () => {
    if (sound.current) {
      sound.current.mute(!isMuted);
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (sound.current) {
      if (isPlaying) {
        sound.current.pause();
      } else {
        sound.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const setupSound = () => {
    const audio = new Howl({
      src: ["/music/Spider-Man-Song-Original.mp3"],
      autoplay: false, // Start paused
      mute: isMuted,
      onend: () => {
        // ...
      },
    });

    return audio;
  };

  useEffect(() => {
    sound.current = setupSound();

    return () => {
      if (sound.current) {
        sound.current.unload();
      }
    };
  }, [isMuted]);

  return (
    <div className="music-control">
      <button onClick={toggleMute} className="mute-button">
        {isMuted ? "Unmute" : "Mute"}
      </button>
      <button onClick={togglePlay} className="play-pause-button">
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default BackgroundMusic;
