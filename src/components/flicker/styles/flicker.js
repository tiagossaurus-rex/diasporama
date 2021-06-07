import styled from "styled-components";

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: row;
  }
`;

export const Item = styled.div`
  display: flex;
`;

export const Container = styled.div``;

export const Title = styled.h1`
  font-family: "YoungSerif", Helvetica, Arial, sans-serif;
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;
`;

export const Section = styled.section`
  display: flex;
  height: 100vh;
  justify-content: space-between;
`;

export const Paragraph = styled.p`
  color: black;
  font-size: 36px;
`;

export const Figure = styled.figure`
  background: #fff;
  margin: 0;
  position: relative;
  width: 50vw;
`;

export const FigCaption = styled.figcaption`
  color: red;
  font-size: 30px;
  z-index: 1;
`;
export const TextFit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0);
  z-index: 1;
`;

export const ImageFit = styled.img`
.imageFit {
  height: 100vh;
  object-fit: cover;
  position: fixed;
  width: 50%;
`;

export const NoTextFit = styled.div`
  display: none;
  visibility: hidden;
`;

export const InnerTitle = styled.h2`
  font-weight: 900;
  font-size: 10vh;
  text-decoration: underline overline;
  font-family: "YoungSerif", sans-serif;
`;

// .notext {

// }
//new styles

// p {

// }

// .text {

// }

// }

// h2 {

// }
