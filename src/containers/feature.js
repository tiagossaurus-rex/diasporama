import React from "react";
import featureData from "../fixtures/diaporama.json";
import { Link } from "react-router-dom";
import Feature, { Container } from "../components/feature";
// import Photo from "../images/animinage1.jpg";

export default function FeatureContainer() {
  return (
    <Feature.Container>
      {featureData.map((diaporama) => (
        <Link to={`/${diaporama.id}`} key={diaporama.id}>
          <Feature
            direction={diaporama.direction}
            color={diaporama.color}
            border={diaporama.border}
          >
            <Feature.Pane>
              <Feature.Title>{diaporama.title}</Feature.Title>
              <Feature.Paragraph>{diaporama.paragraph}</Feature.Paragraph>
            </Feature.Pane>
            <Feature.Pane>
              <Feature.Image
                src={process.env.PUBLIC_URL + diaporama.diapo[0].image}
                alt={diaporama.diapo[0].alt}
              />
            </Feature.Pane>
          </Feature>
        </Link>
      ))}
    </Feature.Container>
  );
}
