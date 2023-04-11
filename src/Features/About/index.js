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
          Fascynuje mnie zabawa z kodem, rozwiązywanie problemów i mnogość zagadnień z tym związanych.
          Czekam i liczę na to, aby zajmować się tym na wyłączność.
        </Description>
        <Link href="mailto:tuta.jakub@gmail.com"><Border><Hire /></Border></Link>
      </ZoneAbout>
      <ThemeSwitcher />
    </GridWrapper>
);

export default About;