
import { StyledHeader } from "../../../styled";
import { Wrapper } from "../../../styled";



const Section = ({header, body}) => (
  <Wrapper>
    <StyledHeader><h2>{header}</h2></StyledHeader>
    {body}
  </Wrapper>

);

export default Section;