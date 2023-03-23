import { Link, Description, GridWrapper, Header, Image, Prefix, ZoneAbout, Border } from "./styled";
import face from "./face.jpg";
import { ThemeSwitcher } from "../../Features/About/ThemeSwitcher";
import {ReactComponent as Hire} from "./hire.svg";

const About = () => (
  <>
    <GridWrapper>
      <Image src={face} alt="Kuba"></Image>
      <ZoneAbout>
        <Prefix>THIS IS</Prefix>
        <Header>Kuba Tuta</Header>
        <Description>
          Wannabe physiotherapist, electronic,
          sailor, dog lover and hopefully soon Frontend.
          In addition to my new passion, which is programming,
          I am interested in nature, physics, guitar,
          kick sports and functional movement.
        </Description>
        <Link href="mailto:tuta.jakub@gmail.com"><Border><Hire /></Border></Link>
      </ZoneAbout>
      <ThemeSwitcher />
    </GridWrapper>
  </>
);

export default About;