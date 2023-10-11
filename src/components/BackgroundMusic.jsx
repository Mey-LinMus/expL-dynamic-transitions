import React, { useRef, useEffect, useState } from "react";
import { Howl } from "howler";
import "../styles/section.css";

const BackgroundMusic = () => {
  const [isMuted, setIsMuted] = useState(false);
  const sound = useRef(null);

  const toggleMute = () => {
    if (sound.current) {
      sound.current.mute(!isMuted);
      setIsMuted(!isMuted);
    }
  };

  const setupSound = () => {
    const audio = new Howl({
      src: ["/music/Spider-Man-Song-Original.mp3"], 
      autoplay: true, 
      mute: isMuted, 
      onend: () => {
      },
    });

    return audio;
  };

  useEffect(() => {
    sound.current = setupSound(); 

    return () => {
      // Clean up and unload the audio when the component unmounts
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
    </div>
  );
};

export default BackgroundMusic;
