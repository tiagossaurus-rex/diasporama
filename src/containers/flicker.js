import React from "react";
import flickerData from "../fixtures/diaporama.json";
import Flicker from "../components/flicker";

export function FlickerContainer() {
  return (
    <Flicker.Container>
      {flickerData.map((diaporama) => (
        <Flicker key={diaporama.id}>
          <Flicker.Section>
            <Flicker.Title>{diaporama.title}</Flicker.Title>
            <Flicker.Para>{diaporama.paragraph}</Flicker.Para>
          </Flicker.Section>
        </Flicker>
      ))}
    </Flicker.Container>
  );
}
