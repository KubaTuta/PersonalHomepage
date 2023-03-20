import { ListWrapper, StyledUl, StyledLi, Circle } from "./styled";

const Skillset = ({ props }) => {

  return (
    <ListWrapper>
      <StyledUl props={props}>
        {props.map(({ skill, id }) => (
          <StyledLi key={id}>
            <Circle /> {skill}
          </StyledLi>
        ))}
      </StyledUl>
    </ListWrapper>
  )
};

export default Skillset;