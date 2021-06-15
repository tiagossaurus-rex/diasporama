import React from "react";
import flickerData from "../fixtures/diaporama.json";
import Flicker from "../components/flicker";
// import Photo from "../images/animinage1.jpg";

export function FlickerContainer() {
  return (
    <Flicker.Container>
      {flickerData.map((diaporama) => (
        <Flicker key={diaporama.id} direction={diaporama.direction}>
          <Flicker.Pane>
            <Flicker.Title>{diaporama.title}</Flicker.Title>
            <Flicker.Paragraph>{diaporama.paragraph}</Flicker.Paragraph>
          </Flicker.Pane>
          <Flicker.Pane>
            <Flicker.Image
              src={process.env.PUBLIC_URL + diaporama.diapo[0].image}
              alt={diaporama.diapo[0].alt}
            />
          </Flicker.Pane>
        </Flicker>
      ))}
    </Flicker.Container>
  );
}
