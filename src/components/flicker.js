import React from "react";
// import Images from "../images.js"
import useSound from "use-sound";
import click from "../sound/click.mp3";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import View from "./view";
export default function Flicker(props) {
  const [flip, setFlip] = useState(true);
  const [imageNumber, setImageNumber] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound] = useSound(click, { volume: 0.9 });
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
  // const TextDisplay = flip ? View.Text : View.NoText;
  return (
    <>
      <View.Section>
        <View.Header>
          <h1>{props.title}</h1>
          <p>{props.paragraph}</p>

          <ul>
            <Link to="/">Home</Link>
          </ul>
        </View.Header>
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
          <View.Image
            alt={diaporama.alt}
            // src={`/diasporama${diaporama.image}`}
            src={process.env.PUBLIC_URL + `${diaporama.image}`}
          />

          <View.Text flip={flip}>
            <View.H2>{diaporama.text}</View.H2>

            <View.Figcaption>
              {imageNumber + 1} / {Images.length}
            </View.Figcaption>
          </View.Text>
          <p>{diaporama.paragraph}</p>
        </View.Wrapper>
      </View.Section>
    </>
  );
}
