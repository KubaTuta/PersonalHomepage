import { skillsToLearn } from "../../skills";
import { ListWrapper } from "../../styled";
import { Img, StyledLi, StyledUl } from "./styled";
import circle from "../svg/circle.svg";

const WantToLearn = () => (
  <ListWrapper>
      
      <StyledUl>
        {skillsToLearn.map(({ skill, id }) => (
          <StyledLi key={id}>
            <Img src={circle} alt="point"></Img>{skill}
          </StyledLi>
        )

        )}
      </StyledUl>
      
    </ListWrapper>
  
);

export default WantToLearn;