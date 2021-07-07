import React from "react";
// import Images from "../images.js"
import useSound from "use-sound";
import click from "../sound/click.mp3";
import { useState, useEffect, useRef } from "react";
import View from "./view";
export default function Flicker(props) {
  const [flip, setFlip] = useState(true);
  const [imageNumber, setImageNumber] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound] = useSound(click, { volume: 0.03 });
  //   const sound = new Audio("/diasporama/sound/single-click-slide-pojector.mp3");
  const timer = useRef(null); // we can save timer in useRef and pass it to child
  const Images = props.diaporama;

  useEffect(() => {
    const imagesLength = Images.length;
    const id = setInterval(() => {
      if (isPlaying) {
        setFlip((flip) => !flip);
        timer.current = setTimeout(() => setFlip(false), 5000);
        console.log(isPlaying);
        setImageNumber((imageNumber) => (imageNumber + 1) % imagesLength);
        sound();
      }
    }, 4500);
    return () => clearInterval(id);
  }, [Images.length, isPlaying, sound]);

  // const boxClass = flip ? "boxFlickerBlack" : "boxFlickerClear";
  const diaporama = Images[imageNumber];
  // const diaporama = Images[0];
  const TextDisplay = flip ? View.Text : View.NoText;
  return (
    <>
      <section>
        <header>
          <h1>{props.title}</h1>
          <p>{props.paragraph}</p>
        </header>
        <View.Wrapper
          onMouseEnter={() => {
            setIsPlaying(true);
          }}
          onMouseLeave={() => {
            setFlip(true);
            setIsPlaying(false);
            clearTimeout(timer.current);

            // diaporama.image[0];
            //reset slide show to first text
            setImageNumber(0);
          }}
        >
          <img
            width="400px"
            alt={diaporama.alt}
            src={`/diasporama${diaporama.image}`}
          />
          <View.Figure>
            <View.Text flip={flip}>
              <View.TextDisplay>{diaporama.text}</View.TextDisplay>
            </View.Text>
            <p>{diaporama.paragraph}</p>
            <figcaption>
              {imageNumber + 1} / {Images.length}
            </figcaption>
          </View.Figure>
        </View.Wrapper>
      </section>
    </>
  );
}
