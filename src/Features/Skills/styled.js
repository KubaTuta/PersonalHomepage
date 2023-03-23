import styled from "styled-components";
import { firstColumn, firstOfTwo, secondColumn, thirdColumn, } from "../../skills";

export const StyledUl = styled.ul`
  padding: 0;
  margin-top: 0;
  margin-left: -16px;
  color: ${({ theme }) => theme.color.smallText};
  transition: 0.5s;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(3, 1fr);
  & > :nth-child(-n+${firstColumn}) {
    grid-column: 1;
  };
  & > :nth-child(n+${secondColumn}) {
    grid-column: 2;
  };
  & > :nth-child(n+${thirdColumn}) {
    grid-column: 3;
  };

  @media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
    grid-template-columns: repeat(2, 1fr);
    & > :nth-child(-n+${firstOfTwo}) {
    grid-column: 1;
    };
    & > :nth-child(n+${thirdColumn}) {
    grid-column: unset;
    };
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
    display: flex;
    flex-direction: column;
  }
  @media(max-width: ${({theme})=>theme.breakpoint.mobile}) {
    
  };
`;

export const StyledLi = styled.li`
  padding-top: 5px;
  font-size: 18px;
  line-height: 140%;
  list-style-type: none;
  display: flex;
  align-items: center;
  transition: 0.5s;
`;

export const Img = styled.img`
  margin-left: 16px;
  margin-right: 16px;
`;