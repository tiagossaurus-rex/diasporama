import styled from "styled-components";

export const Inner = styled.div`
  background-color: ${({ color }) => color};
  padding: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  max-width: 1100px;
  // margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

export const Item = styled.div`
  display: flex;
  padding: 50px 5%;
  overflow: hidden;
  justify-content: center;
`;
export const Pane = styled.div`
  margin: 0 100px;
  @media (max-width: 1000px) {
    margin: 0;
  }
`;
export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;
export const Title = styled.h1`
  font-family: "YoungSerif", Trebuchet, Arial, sans-serif;
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Paragraph = styled.p`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Section = styled.section`
  display: flex;
  height: 100vh;
  justify-content: space-between;
`;

export const Figure = styled.figure`
  background: #fff;
  margin: 0;
  width: 100vw;
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

export const ImageFit = styled.div`
  height: 100vh;
  position: fixed;
  width: 50%;
`;

export const Image = styled.img`
  max-width: 500px;
  max-height: 500px;
  @media (max-width: 500px) {
    max-width: 90vw;
  }
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
