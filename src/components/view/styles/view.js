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
  color: teal;
  text-align: left;
`;
export const Close = styled.button`
  background: none;
  border: 0;
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

//     figcaption {
//       font-size: 30px;
//       right: 140px;
//     }
//     img {
//       width: 100%;
//     }
//     h2 {
//       font-size: 20px;
//       position: relative;
//     }
//     h1 {
//       font-size: 80px;
//     }
//   }
