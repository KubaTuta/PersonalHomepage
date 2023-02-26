import { GridWrapper } from "./styled";
import face from "./face.jpg";
import { Image } from "./styled";

const About = () => (
  <GridWrapper>
    <div>
      <Image src={face} alt="Kuba"></Image>
    </div>
    <div> 
    <p>THIS IS</p>
    <h1>Kuba Tuta</h1>
    <p>jakiś tekst o mnie</p>
    </div>
    
  </GridWrapper>
);

export default About;