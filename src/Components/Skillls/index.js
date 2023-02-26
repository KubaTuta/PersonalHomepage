import { skills } from "../../skills";
import { ListWrapper } from "../../styled";
import { StyledUl, StyledLi } from "./styled";

const Skills = () => {
  return (
    <ListWrapper>
      
      <StyledUl>
        {skills.map(({ skill, id }) => (
          <StyledLi key={id}>
            {skill}
          </StyledLi>
        )

        )}
      </StyledUl>
      
    </ListWrapper>

  )
};

export default Skills;