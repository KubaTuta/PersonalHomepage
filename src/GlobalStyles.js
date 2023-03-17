const { createGlobalStyle } = require("styled-components");

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    margin: 0;
    color: ${({theme})=>theme.color.text};
    background-color: ${({theme})=>theme.color.background};
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  #root {
    font-family: 'Inter', sans-serif;
    letter-spacing: 0.05em;
    line-height: 1.4;
    margin: 10px;
    word-break: break-all;
  }

  h1 {
    font-size: 38px;
  }

  h2 {
    font-size: 30px;
  }

  h3 {
    font-size: 24px;
  }
`;
