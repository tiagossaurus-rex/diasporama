import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  height: 100vh;
  justify-content: space-between;
  flex-direction: row-reverse;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

export const Wrapper = styled.section`
  // background-color: black;
  // margin: 0;
  position: relative;
  width: 50vw;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

export const Figure = styled.figure`
  margin: 0;
  position: relative;
  width: 50%;
  @media (max-width: 900px) {
    // flex-grow: 1;
    width: 30vw;
  }
`;
export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 15px;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0);
  color: white;
  z-index: 1;
  visibility: ${(props) => (props.flip ? "visible" : "hidden")};
  @media (max-width: 900px) {
    width: 100vw;
  }
`;

export const TextDisplay = styled.h2`
  background-color: black;
`;

export const Image = styled.img`
  padding-top: 0;
  height: 100vh;
  // // position: fixed;
  object-fit: cover;
  border-radius: 15px;
  width: 100%;
  @media (max-width: 900px) {
    width: 200%;
  }
`;
export const Figcaption = styled.figcaption`
  color: white;
  font-size: 20px;
  z-index: 1;
`;

export const Header = styled.header`
  width: 50vw;
  height: 50vh;
`;

export const Textwrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
`;
export const H1 = styled.h1`
  font-weight: 900;
  font-size: 2rem;
  font-family: "Voyage-Regular", sans-serif;
`;

export const P = styled.p`
  font-size: 1em;
`;

export const H2 = styled.h2`
  font-weight: 900;
  font-size: 10vh;
  color: #eae2d2;
  text-decoration: underline overline;
  font-family: "Voyage-Regular", sans-serif;
`;

export const Play = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:after {
    //play button
    // position: absolute;
    top: 12px;
    left: 12px;
    margin-right: -6px;
    display: block;
    content: "";
    box-sizing: border-box;
    border-color: transparent transparent transparent black;
    border-style: solid;
    border-width: 13px 0 13px 20px;
  }
`;
export const Pause = styled.button`
  border: none;
  background-color: transparent;
  top: 12px;
  left: 12px;
  display: block;
  content: "";
  box-sizing: border-box;
  border-color: black;
  width: 20px;
  height: 20px;
  border-style: double;
  border-width: 0px 0px 0px 15px;
  margin-right: -10px;
`;

export const Close = styled.button`
  background: none;
  border: 0;
  left: 2px;
  bottom: 2px;
  height: 24px;
  width: 24px;
  padding: 0;
  position: relative;
  &::before,
  &::after {
    background-color: black;
    content: "";
    height: 24px;
    width: 2px;
    position: absolute;
    top: 0;
    left: 9px;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;

export const CloseWrapper = styled.div`
  background: transparent;
  border: 2px solid black;
  border-radius: 30px;
  height: 20px;
  width: 20px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  display: flex;
  position: fixed;
  z-index: 4;
  top: unset;
  bottom: 20px;
  right: 20px;
`;

export const ButtonWrapper = styled.div`
  background: transparent;
  border: 2px solid black;
  border-radius: 30px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  display: flex;
  align-items: center;
  position: fixed;
  height: 20px;
  width: 20px;
  z-index: 4;
  top: unset;
  bottom: 20px;
  right: 80px;
`;

export const Controlswrapper = styled.div`
  display: flex;
`;
export const Columnwrapper = styled.div`
  display: flex;
  width: 50vw;
  flex-direction: row;

  @media (max-width: 900px) {
    flex-direction: row;
  }
`;
export const Columnlayout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  @media (max-width: 900px) {
    width: 50%;
  }
`;
export const Columnleft = styled.div`
  align-items: flex-start;
  font-size: 1em;
  color: black;
`;
export const Columnright = styled.div`
  align-items: flex-end;
  font-size: 1em;
  color: black;
`;
