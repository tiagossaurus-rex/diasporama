import React from "react";
import { Link } from "react-router-dom";
import DiaporamaData from "../fixtures/diaporama.json";

function Header() {
  return (
    <header>
      <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li> */}
        <li>
          <Link to="/">Home</Link>
        </li>
        {DiaporamaData.map((diaporama) => (
          <li key={diaporama.id}>
            <Link to={`/${diaporama.id}`}>{diaporama.title}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
