import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;

  @media(max-width: ${({theme})=>theme.breakpoint.medium}) {
    display: flex;
    flex-direction: column;
  }

  @media(max-width: ${({theme})=>theme.breakpoint.mobile}) {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export const Tile = styled.div`
  background-color: ${({theme})=>theme.color.tile};
  padding: 56px;
  color: ${({theme})=>theme.color.smallText};
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  transition: 0.3s;

  &:hover {
    border: 6px solid ${({theme})=>theme.color.border}
  }

  @media(max-width: ${({theme})=>theme.breakpoint.mobile}) {
    padding: 24px;
  }
`;

export const H3 = styled.h3`
  font-size: 24px;
  margin-top: 0;
  margin-bottom: 24px;
  color: ${({theme})=>theme.color.scienceBlue};

  @media(max-width: ${({theme})=>theme.breakpoint.mobile}) {
    font-size: 16px;
  };
`;

export const Text = styled.div`
  margin: 0;
  font-size: 18px;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  &:nth-child(3) {
    margin-bottom: 8px;
  }

  @media(max-width: ${({theme})=>theme.breakpoint.mobile}) {
    font-size: 14px;
    &:not(:last-child) {
      margin-bottom: 16px;
  }
  };
`;

export const Link = styled.a`
  color: ${({theme})=>theme.color.scienceBlue};
  text-decoration-color: ${({theme})=>theme.color.linkUnderline};
  word-break: break-all;
  transition: 0.3s;
  
  &:hover {
    text-decoration-color: ${({theme})=>theme.color.scienceBlue};
  }
`;