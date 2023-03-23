import { StyledHeader, Wrapper } from "./styled";

const Section = ({header, body}) => (
  <Wrapper>
    <StyledHeader>{header}</StyledHeader>
    {body}
  </Wrapper>
);

export default Section;