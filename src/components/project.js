import React from "react";
import { Link } from "react-router-dom";
import DiaporamaData from "../fixtures/diaporama.json";
import { CustomLink } from "./customLink";
// import slide from ".././icons/slide4.png";
import "./project.css";

function Project() {
  return (
    <header>
      <ul className="project-list">
        {DiaporamaData.map((diaporama) => (
          <CustomLink>
            <li className="project-list__item" key={diaporama.title}>
              <Link
                className="project-list__item-link"
                to={`Projects/${diaporama.slug}`}
              >
                {diaporama.title}
              </Link>
              {/* <img src={slide} /> */}
              <img
                className="project-list__item-image"
                src={process.env.PUBLIC_URL + diaporama.slugImage}
                alt={diaporama.diapo.alt}
              />
            </li>
          </CustomLink>
        ))}
      </ul>
    </header>
  );
}

export default Project;
