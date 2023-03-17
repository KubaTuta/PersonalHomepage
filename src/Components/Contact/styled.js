import styled from "styled-components";

export const Footer = styled.div`
`;

export const Heading = styled.p`
  font-size: 12px;
  color: ${({theme})=>theme.color.smallText};
`;

export const Email = styled.p`
  font-size: 32px;
  font-weight: 900;
  &:hover {
    color: ${({theme})=>theme.color.scienceBlue};
  }
`;

export const Description = styled.p`
  font-size: 18px;
  max-width: 670px;
`;

export const SvgLink = styled.a`
  margin-right: 24px;
  path {
    fill: ${({theme})=>theme.color.icon};
  }
  &:hover {
    path {
      fill: ${({theme})=>theme.color.iconHover};
    }
  }
`;