import React from "react";
import styled from "styled-components";
import raccoon from "../../icons/raccoon.gif";
import FadeIn from "../FadeIn";

const Loader = styled.div`
  padding: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  color: crimson;
`;

const Image = styled.img`
  transition: transform 250ms, opacity 400ms;
`;

export default () => (
  <FadeIn delay={250} duration={1000}>
    {" "}
    <Image src={raccoon} alt="raccoon" width="490" height="247" />
  </FadeIn>
);

//{reviewNumber + 1} / {reviews.length}
//{revLoaded < reviews.length && (
//<Loader calculatedWidth={(revLoaded / reviews.length) * 100} />
//)}
