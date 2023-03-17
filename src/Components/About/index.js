import { GridWrapper, Image } from "./styled";
import face from "./face.jpg";
import { ThemeSwitcher } from "./ThemeSwitcher";

const About = () => (
  <GridWrapper>
    <Image src={face} alt="Kuba"></Image>
    <div>
      <ThemeSwitcher />
      <p>THIS IS</p>
      <h1>Kuba Tuta</h1>
      <p>jakiś tekst o mnie</p>
    </div>
  </GridWrapper>
);

export default About;