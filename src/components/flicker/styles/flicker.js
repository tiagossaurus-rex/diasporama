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
export const Pane = styled.div`
  width: 50%;
`;

export const BoxBlack = styled.div`
  height: 100vh;
  background: black;
  position: absolute;

  padding: 100%;
  font-weight: 900;
  font-size: 40px;
  font-style: bold;
  text-decoration: underline overline;
  cursor: none;
`;

export const BoxClear = styled.div`
  margin-top: 0;
  background: white;
`;

export const ImageFit = styled.img`
  margin-top: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

export const Text = styled.h2`
  width: 100%;
  height: 100%;
  background-color: black;
  position: absolute;
  padding: 25%;
  margin: 0 auto;
  font-family: "YoungSerif", sans-serif;
  font-weight: 900;
  font-size: 40px;
  font-style: bold;
  text-decoration: underline overline;
`;

export const NoText = styled.h2`
  display: none;
  visibility: hidden;
`;

export const ArgonauteText = styled.h1`
  font-size: 6rem;
  color: black;
  line-height: 2em;
`;

export const DiapoText = styled.h2`
  height: 100px;
  background-color: white;
  color: black;
  font-size: 10px;
`;
