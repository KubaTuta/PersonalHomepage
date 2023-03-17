import Github from "./Github";
import { Description, GridWrapper, H2, Heading, Img } from "./styled";
import github from "../svg/github.svg";

const Portfolio = () => {

  return (
    <>
      <Heading>
        <Img src={github} alt="github icon"></Img>
        <H2>Portfolio</H2>
        <Description>My recent projects</Description>
      </Heading>
      <GridWrapper>
        <Github />
      </GridWrapper>
    </>
  )
};

export default Portfolio;