import React, { useRef, useState } from 'react';
import { Howl } from 'howler';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const sound = useRef(null);

  const setupSound = () => {
    const audio = new Howl({
      src: ['/music/Spider-Man.mp3'], // Adjust the path to your music file
      onload: () => {
        setIsPlaying(true);
      },
      onend: () => {
        setIsPlaying(false);
      },
    });

    return audio;
  };

  const togglePlayback = () => {
    if (!sound.current) {
      sound.current = setupSound();
    }

    if (sound.current) {
      if (isPlaying) {
        sound.current.pause();
      } else {
        sound.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="center-container">
      <button onClick={togglePlayback} className="play-button">
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default BackgroundMusic;
