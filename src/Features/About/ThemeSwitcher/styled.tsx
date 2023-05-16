import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 12px;
`;

export const Mode = styled.span`
  @media(max-width: ${({theme})=>theme.breakpoint.mobile}) {
    display: none;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  height: 25px;
`