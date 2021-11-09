import React from "react";
import { Link } from "react-router-dom";
import DiaporamaData from "../fixtures/diaporama.json";
import "./header.css";

function Header() {
  return (
    <header>
      <ul className="project-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        {DiaporamaData.map((diaporama) => (
          <li className="project-list__item" key={diaporama.title}>
            <Link className="project-list__item-link" to={`/${diaporama.slug}`}>
              {diaporama.title}
            </Link>
            <img
              className="project-list__item-image"
              src={process.env.PUBLIC_URL + diaporama.slugImage}
              alt={diaporama.diapo.alt}
            />
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
