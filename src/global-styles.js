import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@font-face {font-family: "YoungSerif"; 
src: url("//db.onlinewebfonts.com/t/d18acb2db67fb3aae1ccd198d37a10e9.eot"); 
src: url("//db.onlinewebfonts.com/t/d18acb2db67fb3aae1ccd198d37a10e9.eot?#iefix") 
format("embedded-opentype"), 
url("//db.onlinewebfonts.com/t/d18acb2db67fb3aae1ccd198d37a10e9.woff2") format("woff2"), 
url("//db.onlinewebfonts.com/t/d18acb2db67fb3aae1ccd198d37a10e9.woff") format("woff"),
 url("//db.onlinewebfonts.com/t/d18acb2db67fb3aae1ccd198d37a10e9.ttf") format("truetype"), 
 url("//db.onlinewebfonts.com/t/d18acb2db67fb3aae1ccd198d37a10e9.svg#YoungSerif") format("svg"); }
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
