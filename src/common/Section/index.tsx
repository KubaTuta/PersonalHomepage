import { StyledHeader, Wrapper } from "./styled";

interface SectionProps {
  header: string;
  body: JSX.Element
}

const Section = ({header, body}: SectionProps) => (
  <Wrapper>
    <StyledHeader>{header}</StyledHeader>
    {body}
  </Wrapper>
);

export default Section;