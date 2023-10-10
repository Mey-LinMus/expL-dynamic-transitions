import React, { useState } from "react";
import { Howl } from "howler";

const BackgroundMusic = () => {
  const [isMuted, setIsMuted] = useState(false);
  const musicUrl = "/music/Spider-Man.mp3";

  const sound = new Howl({
    src: [musicUrl],
    loop: true, 
    volume: 0.5, 
    mute: isMuted, 
  });

  const toggleMute = () => {
    sound.mute(!isMuted);
    setIsMuted(!isMuted);
  };

  return (
    <div className="music-controls">
      <button onClick={toggleMute}>
        {isMuted ? "Unmute" : "Mute"}
      </button>
    </div>
  );
};

export default BackgroundMusic;
