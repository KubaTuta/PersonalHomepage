import Github from "./Github";
import { Description, H2, Heading, GitSvg } from "./styled";

const Portfolio = () => {

  return (
    <>
      <Heading>
        <GitSvg />
        <H2>Portfolio</H2>
        <Description>My recent projects</Description>
      </Heading>
      <Github />
    </>
  )
};

export default Portfolio;