import { skillsToLearn } from "../../skills";
import { ListWrapper } from "../../styled";
import { StyledLi, StyledUl } from "./styled";

const WantToLearn = () => (
  <ListWrapper>
      
      <StyledUl>
        {skillsToLearn.map(({ skill, id }) => (
          <StyledLi key={id}>
            {skill}
          </StyledLi>
        )

        )}
      </StyledUl>
      
    </ListWrapper>
  
);

export default WantToLearn;