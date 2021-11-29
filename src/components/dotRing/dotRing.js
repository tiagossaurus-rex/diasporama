import React, { useContext } from "react";
import "./dotRing.css";
import useMousePosition from "../../hooks/useMousePosition";
import { MouseContext } from "../../context/mouse-context";

// export const DotRing = () => {
//   // 1.
//   const { x, y } = useMousePosition();
//   return <div style={{ left: `${x}px`, top: `${y}px` }} className="ring"></div>;
// };

export const DotRing = () => {
  // 1.
  const { cursorType } = useContext(MouseContext);

  const { x, y } = useMousePosition();
  return (
    <>
      {/* 2. */}
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={"ring " + cursorType}
      ></div>
      <div
        className={"dot " + cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};
