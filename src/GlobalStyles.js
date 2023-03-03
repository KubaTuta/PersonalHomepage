const { createGlobalStyle } = require("styled-components");

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    margin: 0;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  #root {
    font-family: 'Inter', sans-serif;
    background-color: #E5E5E5;
    letter-spacing: 0.05em;
    line-height: 1.4;
    display: flex;
    justify-content: center;
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
