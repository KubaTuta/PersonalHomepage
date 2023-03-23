import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { selectDarkTheme } from "./Features/themeSlice";
import { lightTheme, darkTheme } from "./themes";
import { GlobalStyle } from "./GlobalStyles";
import { Container } from "./styled";
import { skills, skillsToLearn } from "./skills";
import About from "./Features/About";
import Section from "./Common/Section/";
import Skillset from "./Common/Skillset";
import Portfolio from "./Features/Portfolio";
import Contact from "./Features/Contact";

function App() {
  const isDarkTheme = useSelector(selectDarkTheme);
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <About />
        <Section
          header={"My skillset includes"}
          body={<Skillset props={skills} />}
        />
        <Section
          header={"What I want to learn"}
          body={<Skillset props={skillsToLearn} />}
        />
        <Portfolio />
        <Contact />
      </Container>
    </ThemeProvider>
  );
}

export default App;