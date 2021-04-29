import { createGlobalStyle } from "styled-components";
import YoungSerif from "../../public/fonts/YoungSerif-Regular.otf";

export const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: "YoungSerif";
    src: url("./public/fonts/YoungSerif-Regular.otf") format("opentype");
  }
    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #000000;
        color: white;
        font-size: 16px;
        margin: 0;
    }
`;
