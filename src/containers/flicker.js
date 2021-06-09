import React from "react";
import flickerData from "../fixtures/diaporama.json";
import Flicker from "../components/flicker";
// import Photo from "../images/animinage1.jpg";

export function FlickerContainer() {
  const requestImageFile = require.context("../images", true, /.jpg$/);
  return (
    <Flicker.Container>
      {flickerData.map((diaporama) => (
        <Flicker key={diaporama.id}>
          <Flicker.Section>
            <Flicker.Title>{diaporama.title}</Flicker.Title>
            <Flicker.Para>{diaporama.paragraph}</Flicker.Para>
          </Flicker.Section>
          <Flicker.Figure>
            {/* <img src={Photo} /> */}
            {/* <img src={require(diaporama.diapo[0].image)} /> */}
            {/* <img
              src={requestImageFile(`../${diaporama.diapo[0].image}.jpg`)}
              alt={diaporama.alt}
            /> */}
            <img src={process.env.PUBLIC_URL + diaporama.diapo[0].image} />
          </Flicker.Figure>
        </Flicker>
      ))}
    </Flicker.Container>
  );
}
