import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 66px;
  transition: 0.5s;
  @media(max-width: ${({theme})=>theme.breakpoint.mobile}) {
    display: flex;
    flex-direction: column;
  };
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  min-width: 132px;
  border-radius: 100%;
`;