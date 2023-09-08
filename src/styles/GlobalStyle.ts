import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  body, html {
    height: 100%;
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme.black};
}

  body {
    overflow-x: hidden;
  }

  *, *::before, *::after {
    box-sizing: border-box; 
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 10px;
    height: 100%;
  }
  
  #root {
    height: 100%;
  }
  
`;
