import About from "./Components/About";
import Skills from "./Components/Skills";
import WantToLearn from "./Components/WantToLearn/index";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import { Container } from "./styled";
import Section from "./Common/Section/index";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { selectDarkTheme } from "./Features/themeSlice";
import { lightTheme, darkTheme } from "./themes";
import { GlobalStyle } from "./GlobalStyles";

function App() {
  const isDarkTheme = useSelector(selectDarkTheme);
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <About />
        <Section
          header={"My skillset includes "}
          body={<Skills />}
        />
        <Section
          header={"What I want to learn"}
          body={<WantToLearn />}
        />
        <Portfolio />
        <Contact />
      </Container>
    </ThemeProvider>
  );
}

export default App;
