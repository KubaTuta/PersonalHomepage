const { createGlobalStyle } = require("styled-components");

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    margin: 20px;
    color: ${({theme})=>theme.color.text};
    background-color: ${({theme})=>theme.color.background};
    transition: 0.5s;
    @media(max-width: ${({theme})=>theme.breakpoint.mobile}) {
      margin: 14px;
    }
  }

  #root {
    font-family: 'Inter', sans-serif;
    letter-spacing: 0.05em;
    line-height: 1.4;
  }
`;
