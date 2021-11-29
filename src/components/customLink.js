import React, { useContext } from "react";
import { MouseContext } from "../context/mouse-context";

export function CustomLink({ children }) {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  return (
    <div className="container">
      <div
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        {children}
      </div>
    </div>
  );
}
