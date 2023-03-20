import styled from "styled-components";

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

export const ApiType = styled.div`
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

export const H3 = styled.h3`
  font-size: 24px;
  margin: 0;
  color: ${({theme})=>theme.color.scienceBlue};
  @media(max-width: ${({theme})=>theme.breakpoint.mobile}) {
    font-size: 16px;
  };
`;

export const Link = styled.a`
  color: ${({theme})=>theme.color.scienceBlue};
  text-decoration-color: ${({theme})=>theme.color.linkUnderline};
  transition: 0.3s;
  &:hover {
    text-decoration-color: ${({theme})=>theme.color.scienceBlue};
  }
`;