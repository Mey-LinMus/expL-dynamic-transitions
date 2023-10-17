import React, { useRef } from "react";
import anime from "animejs";
import { InView } from "react-intersection-observer";
import "../styles/section.css";

const SectionTwo = () => {
  const textRef = useRef(null);

  const handleChange = (inView, entry) => {
    const textElement = textRef.current;

    const textAnimation = anime.timeline({
      targets: textElement,
      opacity: 1,
      duration: 1,
    });

    textAnimation.add({
      rotate: [10, 0],
      duration: 1000,
      easing: "easeOutElastic",
    });

    if (inView) {
      textAnimation.play();
    } else {
      textAnimation.pause();
    }
  };

  return (
    <InView onChange={handleChange} threshold={0.5}>
      <div className="info">
        <p ref={textRef}>
          Spider-Man, comic-book character who was the original everyman
          superhero. In Spider-Man’s first story, in Marvel Comics’ Amazing
          Fantasy, no. 15 (1962), American teenager Peter Parker, a poor sickly
          orphan, is bitten by a radioactivespider. As a result of the bite, he
          gains superhuman strength, speed, and agility along with the ability
          to cling to walls. Writer Stan Lee and illustrator Steve Ditko created
          Spider-Man as a filler story for a canceled anthology series. At the
          time, a teenage lead hero was unheard of in comic books. However,
          young readers responded powerfully to Peter Parker, prompting an
          ongoing title and, ultimately, a media empire, including video games,
          several animated and one live-action television series, a live-action
          film franchise, and a Broadway musical.
        </p>
      </div>
    </InView>
  );
};

export default SectionTwo;
