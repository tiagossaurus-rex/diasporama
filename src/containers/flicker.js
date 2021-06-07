import React from "react";
// import FlickerData from "../fixtures/diaporama.json";
import Flicker from "../components/flicker";

export function FlickerContainer() {
  return (
    <Flicker.Container>
      {/* {FlickerData.map((item) => (
        <Flicker key={item.id} direction={item.direction}>
          <Flicker.Pane>
          <Flicker.Title>{item.title}</Flicker.Title>
          </Flicker.Pane>
          <Flicker.Pane>
          <Flicker.Image src={item.image} alt={item.alt} />
          <Flicker.Pane>
        </Flicker>
      ))} */}
      <Flicker.Title>Flick flick fffff phewwww!!</Flicker.Title>
    </Flicker.Container>
  );
}
