import { Link, Description, GridWrapper, Header, Image, Prefix, ZoneAbout, Border } from "./styled";
import face from "./face.jpg";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ReactComponent as Hire } from "./hire.svg";

const About = () => (
  <GridWrapper>
    <Image src={face} alt="Kuba"></Image>
    <ZoneAbout>
      <Prefix>THIS IS</Prefix>
      <Header>Kuba Tuta</Header>
      <Description>
        I am fascinated by playing with code, solving problems and the multitude of issues related to it. I am waiting and counting on being able to do this exclusively.
      </Description>
      <Link href="mailto:tuta.jakub@gmail.com"><Border><Hire /></Border></Link>
    </ZoneAbout>
    <ThemeSwitcher />
  </GridWrapper>
);

export default About;