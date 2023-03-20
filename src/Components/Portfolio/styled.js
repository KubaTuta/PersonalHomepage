import styled from "styled-components";
import { ReactComponent as github } from "../svg/github.svg";

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 72px;
  margin-bottom: 24px;
  @media(max-width: ${({theme})=>theme.breakpoint.mobile}) {
    margin-top: 50px;
    }
`;

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

export const GitSvg = styled(github)`
  margin: 12px;
  max-width: 40px;
`;

export const H2 = styled.h2`
  margin: 0;

`;

export const Description = styled.p`
  font-size: 20px;
  margin: 8px;
`;