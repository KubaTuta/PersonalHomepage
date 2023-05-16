import styled from "styled-components";

export const Footer = styled.div`
  margin-top: 120px;
`;

export const Heading = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.color.smallText};
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const Email = styled.a`
  color: ${({ theme }) => theme.color.text};
  text-decoration: none;
  font-size: 32px;
  font-weight: 900;
  transition: 0.3s;
  width: fit-content;

  &:hover {
    color: ${({ theme }) => theme.color.scienceBlue};
    cursor: pointer;
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 18px;
    }
`;

export const Description = styled.p`
  font-size: 18px;
  max-width: 670px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 14px;
  }
`;

export const SvgLink = styled.a`
  margin-right: 24px;
  path {
    fill: ${({ theme }) => theme.color.icon};
    transition: 0.3s;
  }
  
  &:hover {
    path {
      fill: ${({ theme }) => theme.color.iconHover};
    }
  }
  @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    svg {
      width: 35px;
    }
  }
`;