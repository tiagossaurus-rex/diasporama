import React from "react";
import Tooltip from "@reach/tooltip";
import "@reach/tooltip/styles.css";
import { Link } from "react-router-dom";
import DiaporamaData from "../fixtures/diaporama.json";
import "./header.css";

function Header() {
  return (
    <header>
      <ul className="project-list">
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
          <li className="project-list__item" key={diaporama.title}>
            {/* <Tooltip
              className="under"
              aria-label={diaporama.slugAlt}
              label={<img src={process.env.PUBLIC_URL + diaporama.slugImage} />}
            >
              <Link to={`/${diaporama.slug}`}>{diaporama.title}</Link>
            </Tooltip> */}
            <Link className="project-list__item-link" to={`/${diaporama.slug}`}>
              {diaporama.title}
            </Link>
            <img
              className="project-list__item-image"
              src={process.env.PUBLIC_URL + diaporama.slugImage}
            />
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
