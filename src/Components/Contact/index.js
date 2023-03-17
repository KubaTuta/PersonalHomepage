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
      <Email>
        tuta.jakub@gmail.com
      </Email>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique temporibus expedita voluptatibus distinctio tenetur debitis, itaque, voluptate mollitia libero eligendi placeat natus modi! Consequatur voluptatibus placeat dolor libero architecto quidem?
      </Description>
      <>
        <SvgLink href="google.pl"><Github /></SvgLink>
        <SvgLink href="google.pl"><Facebook /></SvgLink>
        <SvgLink href="google.pl"><Instagram /></SvgLink>
        <SvgLink href="google.pl"><Linked /></SvgLink>
      </>
    </Footer>

  )
};

export default Contact;