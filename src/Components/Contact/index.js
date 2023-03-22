import { Footer } from "./styled";
import { Description, Email, Heading, SvgLink } from "./styled";
import { ReactComponent as Github } from "../svg//git.svg";
import { ReactComponent as Facebook } from "../svg/Facebook.svg";
import { ReactComponent as Instagram } from "../svg/Instagram.svg";
import { ReactComponent as Linked } from "../svg/Linked.svg";

const Contact = () => {
  return (
    <Footer>
      <Heading>
        LET'S TALK!
      </Heading>
      <Email href="mailto:tuta.jakub@gmail.com"  rel="noopener noreferrer">
        tuta.jakub@gmail.com
      </Email>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique temporibus expedita voluptatibus distinctio tenetur debitis, itaque, voluptate mollitia libero eligendi placeat natus modi! Consequatur voluptatibus placeat dolor libero architecto quidem?
      </Description>
      <>
        <SvgLink href="https://google.pl" rel="noopener noreferrer"><Github /></SvgLink>
        <SvgLink href="https://google.pl" rel="noopener noreferrer"><Facebook /></SvgLink>
        <SvgLink href="https://google.pl" rel="noopener noreferrer"><Instagram /></SvgLink>
        <SvgLink href="https://google.pl" rel="noopener noreferrer"><Linked /></SvgLink>
      </>
    </Footer>

  )
};

export default Contact;