import React from "react";
import diaporamaData from "./../fixtures/diaporama.json";
import { useParams } from "react-router-dom";
import Flicker from "./flicker";

export default function Shuffle() {
  const { slug } = useParams();

  const diaporama = diaporamaData.find((diaporama) => diaporama.slug === slug);
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

// export default function Shuffle() {
//   const { slug } = useParams();
//   const diaporama = diaporamaData.find((d) => d.slug === slug);
//   return diaporama ? (
//     <Flicker
//       diaporama={diaporama.diapo}
//       title={diaporama.title}
//       paragraph={diaporama.paragraph}
//     />
//   ) : (
//     <h2>This page doesn't exist</h2>
//   );
// }
