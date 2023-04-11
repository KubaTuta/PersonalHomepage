import { Link, Description, GridWrapper, Header, Image, Prefix, ZoneAbout, Border } from "./styled";
import face from "./face.jpg";
import { ThemeSwitcher } from "../../features/About/ThemeSwitcher";
import {ReactComponent as Hire} from "./hire.svg";

const About = () => ( 
    <GridWrapper>
      <Image src={face} alt="Kuba"></Image>
      <ZoneAbout>
        <Prefix>THIS IS</Prefix>
        <Header>Kuba Tuta</Header>
        <Description>
          Fascynuje mnie jak to działa,
        </Description>
        <Link href="mailto:tuta.jakub@gmail.com"><Border><Hire /></Border></Link>
      </ZoneAbout>
      <ThemeSwitcher />
    </GridWrapper>
);

export default About;