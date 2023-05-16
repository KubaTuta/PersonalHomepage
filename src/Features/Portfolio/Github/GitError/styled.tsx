import styled from "styled-components";

export const H3 = styled.h3`
  font-size: 24px;
  margin-top: 24px;
  margin-bottom: 24px;
  color: ${({theme})=>theme.color.text};

  @media(max-width: ${({theme})=>theme.breakpoint.mobile}) {
    font-size: 16px;
  };
`;

export const Button = styled.button`
  font-size: 20px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  width: 168px;
  height: 49px;
  color: ${({theme})=>theme.color.tile};
  background-color: ${({theme})=>theme.color.scienceBlue};
  margin-top: 32px;
  
  &:hover {
    cursor: pointer;
    outline: 4px solid ${({theme})=>theme.color.border};
  }
`;

export const Link = styled.a`
  text-decoration: none;
`;