import { Footer } from "./styled";
import { Description, Email, Heading, SvgLink } from "./styled";
import { ReactComponent as Github } from "../svg//git.svg";
import { ReactComponent as Facebook } from "../svg/Facebook.svg";
import { ReactComponent as Instagram } from "../svg/Instagram.svg";
import { ReactComponent as Linked } from "../svg/Linked.svg";

const Contact = () => (
  <Footer>
    <Heading>
      LET'S TALK!
    </Heading>
    <Email href="mailto:tuta.jakub@gmail.com" rel="noopener noreferrer">
      tuta.jakub@gmail.com
    </Email>
    <Description>
      I am currently looking for a job opportunity in IT, so if you have any proposition, I encourage you to contact me
    </Description>
    <>
      <SvgLink href="https://github.com/KubaTuta" rel="noopener noreferrer"><Github /></SvgLink>
      <SvgLink href="https://github.com/KubaTuta" rel="noopener noreferrer"><Facebook /></SvgLink>
      <SvgLink href="https://github.com/KubaTuta" rel="noopener noreferrer"><Instagram /></SvgLink>
      <SvgLink href="https://www.linkedin.com/in/jakub-tuta-51774b165/" rel="noopener noreferrer"><Linked /></SvgLink>
    </>
  </Footer>

);

export default Contact;