import { skills } from "../../skills";
import { ListWrapper } from "../../styled";
import { StyledUl, StyledLi, Img } from "./styled";
import circle from "../svg/circle.svg";

const Skills = () => {
  return (
    <ListWrapper>
      <StyledUl>
        {skills.map(({ skill, id }) => (
          <StyledLi key={id}>
            <Img src={circle} alt="point"></Img> {skill}
          </StyledLi>
        ))}
      </StyledUl>
    </ListWrapper>
  )
};

export default Skills;