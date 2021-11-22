import React from "react";
import "./dotRing.css";
import useMousePosition from "../../hooks/useMousePosition";

export const DotRing = () => {
  // 1.
  const { x, y } = useMousePosition();
  return (
    <>
      {/* 2. */}
      <div style={{ left: `${x}px`, top: `${y}px` }} className="ring"></div>
      {/* 3. */}
      <div className="dot" style={{ left: `${x}px`, top: `${y}px` }}></div>
    </>
  );
};
