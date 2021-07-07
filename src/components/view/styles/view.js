import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const Figure = styled.figure`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  height: 100%;
  align-items: center;
  margin: 0;
`;
export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 50vh;
  background-color: rgba(0, 0, 0);
  color: white;
  z-index: 1;
  visibility: ${(props) => (props.flip ? "visible" : "hidden")};
`;

export const TextDisplay = styled.h2`
  background-color: black;
`;

export const NoText = styled.div`
  display: none;
  visibility: hidden;
`;
