import Github from "./Github";
import { Description, GridWrapper, H2, Heading, GitSvg } from "./styled";

const Portfolio = () => {

  return (
    <>
      <Heading>
        <GitSvg />
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