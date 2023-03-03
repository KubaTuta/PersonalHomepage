import { Footer, Svg } from "../../styled";
import { Description, Email, Heading } from "./styled";
import github  from "../svg//git.svg";
import facebook from "../svg/Facebook.svg";
import instagram  from "../svg/Instagram.svg";
import linked  from "../svg/Linked.svg";

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
      <p>
        <Svg src={github} alt={"github"}></Svg>
        <Svg src={facebook} alt={"facebook"}></Svg>
        <Svg src={linked} alt={"linkedin"}></Svg>
        <Svg src={instagram} alt={"instagram"}></Svg>
      </p>
      
    </Footer>
  
  )
};

export default Contact;