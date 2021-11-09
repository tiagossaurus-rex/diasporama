import React from "react";
import styled from "styled-components";
import raccoon from "../../icons/raccoon.gif";
import FadeIn from "../FadeIn";

const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  color: crimson;
`;

const Image = styled.img`
  align-items: center;
  justify-content: center;
  padding: 100px;
  top: 50%;
  left: 50%;
  width: 900px;
  height: 500px;
  opacity: transparent;

  @media (max-width: 900px) {
    padding: 200px;
    width: 450px;
    height: 250px;
  }
`;

export default () => (
  <Loader>
    <FadeIn delay={1} duration={1000}>
      {" "}
      <Image src={raccoon} alt="raccoon" />
    </FadeIn>
  </Loader>
);

//{reviewNumber + 1} / {reviews.length}
//{revLoaded < reviews.length && (
//<Loader calculatedWidth={(revLoaded / reviews.length) * 100} />
//)}
