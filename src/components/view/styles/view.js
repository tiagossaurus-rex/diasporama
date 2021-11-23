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

export const Wrapper = styled.div`
  background-color: black;
  margin: 0;
  position: relative;
  width: 50vw;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

export const Figure = styled.figure`
  margin: 0;
  position: relative;
  width: 50vw;
  @media (max-width: 900px) {
    flex-grow: 1;
    width: 100vw;
  }
`;
export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  position: fixed;
  object-fit: cover;
  border-radius: 15px;
  width: 50%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

// export const ImageFit = styled.div`
//   height: 100vh;
//   object-fit: cover;
//   position: fixed;
//   width: 50%;
// `;

export const Header = styled.header`
  width: 50vw;
  height: 50vh;
`;

export const Figcaption = styled.figcaption`
  color: red;
  font-size: 20px;
  z-index: 1;
`;

export const H2 = styled.h2`
  font-weight: 900;
  font-size: 10vh;
  text-decoration: underline overline;
  font-family: "YoungSerif", sans-serif;
`;

export const Play = styled.button`
  //circle
  // position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 50px);
  width: 100px;
  height: 100px;

  display: block;
  border: 2px solid black;
  border-radius: 50%;
  padding: 0;
  margin: 0 auto;
  background-color: transparent;

  &:after {
    //play button
    // position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 14px);
    display: block;
    content: "";
    box-sizing: border-box;
    border-color: transparent transparent transparent black;
    border-style: solid;
    border-width: 26px 0 26px 40px;
  }
`;
export const Close = styled.button`
  background: none;
  border: 0;
  left: 2px;
  bottom: 2px;
  cursor: pointer;
  height: 24px;
  width: 24px;
  padding: 0;
  position: relative;
  &::before,
  &::after {
    background-color: #000;
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
  border: 2px solid #000;
  border-radius: 30px;
  height: 20px;
  width: 20px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  display: flex;
  cursor: pointer;
  position: fixed;
  z-index: 4;
  top: unset;
  bottom: 20px;
  right: 20px;
`;
