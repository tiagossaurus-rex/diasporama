import React from "react";
import styled from "styled-components";
import raccoon from "../../icons/racooneyes-5.png";
import FadeIn from "../FadeIn";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    top: 25%;
    bottom: 25%;
    transform: translate(-25%, -25%);
    width: 200%;
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
