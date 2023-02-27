import styled from "styled-components";
import { firstColumnToLearn, secondColumnToLearn, thirdColumnToLearn } from "../../skills";

export const StyledUl = styled.ul`
  padding: 0;
  margin-top: 0;
  margin-left: 32px;
  color: #6E7E91;
  li::marker {
    color: #0366D6;
  }
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(3, 1fr);
  & > :nth-child(-n+${firstColumnToLearn}) {
    grid-column: 1;
  }
  & > :nth-child(n+${secondColumnToLearn}) {
    grid-column: 2;
  }
  & > :nth-child(n+${thirdColumnToLearn}) {
    grid-column: 3;
  }
`;

export const StyledLi = styled.li`
  padding-top: 5px;
  font-size: 18px;
  line-height: 140%;
  margin-left: -10px;
  margin-right: 5px;
  
`;