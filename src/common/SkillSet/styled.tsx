import styled from "styled-components";
import { ReactComponent as circle } from "../../features/svg/circle.svg";

interface Prop {
  id: Number;
  skill: String;
}

interface StyledProps {
  props: Prop[];
}

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const StyledUl = styled.ul<StyledProps>`
  padding: 0;
  margin-top: 0;
  margin-left: -16px;
  color: ${({ theme }) => theme.color.smallText};
  transition: 0.5s;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(3, 1fr);

  & > :nth-child(-n+${({ props }) => Math.ceil(Object.keys(props).length / 3)}) {
    grid-column: 1;
  };

  & > :nth-child(n+${({ props }) => Math.ceil(Object.keys(props).length / 3) + 1}) {
    grid-column: 2;
  };

  & > :nth-child(n+${({ props }) => Object.keys(props).length - (Math.floor(Object.keys(props).length / 3) - 1)}) {
    grid-column: 3;
  };

  @media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
    grid-template-columns: repeat(2, 1fr);

    & > :nth-child(-n+${({ props }) => Math.ceil(Object.keys(props).length / 2)}) {
    grid-column: 1;
    };
    
    & > :nth-child(n+${({ props }) => Object.keys(props).length - (Math.floor(Object.keys(props).length / 3) - 1)}) {
    grid-column: unset;
    };
  };

  @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
    display: flex;
    flex-direction: column;
  };

  @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: flex;
    flex-direction: column;
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

  @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 14px;
  };
`;

export const Circle = styled(circle)`
  margin-left: 16px;
  margin-right: 16px;
  
  @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 6px;
  };
`;