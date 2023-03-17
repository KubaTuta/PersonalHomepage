import styled from "styled-components";

export const Block = styled.div`
  background-color: ${({theme})=>theme.color.tile};
  padding: 56px;
  color: ${({theme})=>theme.color.smallText};
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  &:hover {
    border: 6px solid ${({theme})=>theme.color.border}
  }
`;

export const ApiType = styled.div`
  &:not(:last-child) {
    margin-top: 24px;
  }
  font-size: 18px;
`;

export const H3 = styled.h3`
  color: ${({theme})=>theme.color.scienceBlue};
`;

export const Link = styled.a`
  color: ${({theme})=>theme.color.scienceBlue};
  text-decoration-color: ${({theme})=>theme.color.underline};

  &:hover {
    text-decoration-color: ${({theme})=>theme.color.scienceBlue};
  }
`;