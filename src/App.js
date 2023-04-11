import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { selectDarkTheme } from "./features/themeSlice";
import { lightTheme, darkTheme } from "./themes";
import { GlobalStyle } from "./GlobalStyles";
import { Container } from "./styled";
import { skills, skillsToLearn } from "./skills";
import About from "./features/About";
import Section from "./common/Section";
import SkillSet from "./common/SkillSet";
import Portfolio from "./features/Portfolio";
import Contact from "./features/Contact";

function App() {
  const isDarkTheme = useSelector(selectDarkTheme);
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <About />
        <Section
          header={"My skillset includes"}
          body={<SkillSet props={skills} />}
        />
        <Section
          header={"What I want to learn"}
          body={<SkillSet props={skillsToLearn} />}
        />
        <Portfolio />
        <Contact />
      </Container>
    </ThemeProvider>
  );
}

export default App;