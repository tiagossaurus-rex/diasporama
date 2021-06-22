import React from "react";
import diaporamaData from "./../fixtures/diaporama.json";
import { useParams } from "react-router-dom";
import Flicker from "./flicker";

export default function Shuffle() {
  // return diaporamaData.map((diaporama) => (
  //   <div key={diaporama.id}>
  //     <Flicker
  //       diaporama={diaporama.diapo}
  //       title={diaporama.title}
  //       paragraph={diaporama.paragraph}
  //     />
  //   </div>
  // ));
  const { id } = useParams();
  const diaporama = diaporamaData.find(
    (diaporama) => diaporama.id === Number(id)
  );
  if (!diaporama) {
    return <h2>This page doesn't exist</h2>;
  }
  return (
    <Flicker
      diaporama={diaporama.diapo}
      title={diaporama.title}
      paragraph={diaporama.paragraph}
    />
  );
}
