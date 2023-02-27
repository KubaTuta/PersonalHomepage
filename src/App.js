import About from "./Components/About";
import Skills from "./Components/Skills";
import WantToLearn from "./Components/WantToLearn/index";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import { Container } from "./Components/Common/Container";
import Section from "./Components/Common/Section/index";


function App() {
  return (
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
  );
}

export default App;
