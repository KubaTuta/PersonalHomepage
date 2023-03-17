import styled from "styled-components";
import { firstColumnToLearn, firstOfTwoToLearn, secondColumnToLearn, thirdColumnToLearn } from "../../skills";

export const StyledUl = styled.ul`
  padding: 0;
  margin-top: 0;
  margin-left: -16px;
  color: ${({theme})=>theme.color.smallText};

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
  
  @media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
    grid-template-columns: repeat(2, 1fr);
    & > :nth-child(-n+${firstOfTwoToLearn}) {
    grid-column: 1;
    };
    & > :nth-child(n+${thirdColumnToLearn}) {
    grid-column: unset;
    };
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledLi = styled.li`
  padding-top: 5px;
  font-size: 18px;
  line-height: 140%;
  list-style-type: none;
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  margin-left: 16px;
  margin-right: 16px;
`;