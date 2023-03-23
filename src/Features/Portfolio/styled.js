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

export const GitSvg = styled(github)`
  margin: 12px;
  max-width: 40px;
`;

export const H2 = styled.h2`
  margin: 0;
  @media(max-width: ${({theme})=>theme.breakpoint.mobile}) {
    font-size: 18px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  margin: 8px;
  text-align: center;
  @media(max-width: ${({theme})=>theme.breakpoint.mobile}) {
    font-size: 17px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
`;