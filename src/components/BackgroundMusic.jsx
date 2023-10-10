import React, { useRef, useEffect, useState } from 'react';
import { Howl } from 'howler';
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
      src: ['/music/Spider-Man.mp3'], // Adjust the path to your music file
      autoplay: true, // Automatically start playing
      mute: isMuted, // Initialize with mute status
      onend: () => {
        // Handle end of audio if needed
      },
    });

    return audio;
  };

  useEffect(() => {
    sound.current = setupSound(); // Initialize the audio when the component mounts

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
        {isMuted ? 'Unmute' : 'Mute'}
      </button>
    </div>
  );
};

export default BackgroundMusic;
