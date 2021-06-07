import React from "react";
import flickerData from "../fixtures/diaporama.json";
import Flicker from "../components/flicker";

export function FlickerContainer() {
  return (
    <Flicker.Section>
      {flickerData.map((diaporama) => (
        <Flicker key={diaporama.id}>
          <Flicker.Title>{diaporama.title}</Flicker.Title>
          <Flicker.Paragraph>{diaporama.paragraph}</Flicker.Paragraph>
          <Flicker.ImageFit alt={diaporama.alt} src={diaporama.image} />
        </Flicker>
      ))}
    </Flicker.Section>
  );
}
