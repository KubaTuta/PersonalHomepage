import { ListWrapper, StyledUl, StyledLi, Circle } from "./styled";

interface Prop {
  id: Number;
  skill: String;
}

interface Props {
  props: Prop[];
}

const Skillset = ({ props }: Props) => {
  return (
  <ListWrapper>
    <StyledUl props={props}>
      {props.map(({ skill, id }) => (
        <StyledLi key={id.toString()}>
          <Circle /> {skill}
        </StyledLi>
      ))}
    </StyledUl>
  </ListWrapper>
);}

export default Skillset;