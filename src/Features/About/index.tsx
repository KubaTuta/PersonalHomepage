import { Link, Description, GridWrapper, Header, Image, Prefix, ZoneAbout, Border } from "./styled";
import faceWhite from "./faceWhite.jpg";
import faceBlack from "./faceBlack.jpg";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ReactComponent as Hire } from "./hire.svg";
import { useSelector } from "react-redux"
import { selectDarkTheme } from "../themeSlice";

const About = () => {
  const darkTheme = useSelector(selectDarkTheme);

  return (
  <GridWrapper>
    <Image src={darkTheme ? faceWhite : faceBlack} alt="Kuba"></Image>
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
}
export default About;