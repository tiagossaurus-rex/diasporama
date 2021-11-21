import React from "react";
import styled from "styled-components";
import raccoon from "../../icons/racooneyes-5.png";
import FadeIn from "../FadeIn";

const Wrapper = styled.div`
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

  @media (max-width: 900px) {
    padding: 100px;
    width: 50%;
    heigh: 50%;
    top: 50%;
    left: 50%;
  }
`;

const Loader = () => (
  <Wrapper>
    <FadeIn delay={1} duration={500}>
      <Image src={raccoon} alt="raccoon" />
    </FadeIn>
  </Wrapper>
);

export default Loader;
