import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { selectDarkTheme } from "./Features/themeSlice";
import { lightTheme, darkTheme } from "./themes";
import { GlobalStyle } from "./GlobalStyles";
import { Container } from "./styled";
import { skills, skillsToLearn } from "./skills";
import About from "./Components/About";
import Section from "./Components/Common/Section/index";
import Skillset from "./Components/Common/Skillset";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

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