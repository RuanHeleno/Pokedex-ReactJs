import { createGlobalStyle } from "styled-components";

import bg from "../assets/bg.png";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    list-style: none;
    text-decoration: none;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  ::-webkit-scrollbar {
    display: none;
  }
  
  body {
    background: url(${bg}) no-repeat center center;
    background-size: cover;
    aspect-ratio: 1;
    scroll-behavior: smooth;
    font-family: "Poppins";
  }

  .Not-Found {
    width: 95vw;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
  }
`;

export default GlobalStyle;
