import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 66px;
  transition: 0.5s;
  margin-right: 125px;

  @media(max-width: ${({theme})=>theme.breakpoint.small}) {
    display: flex;
    flex-direction: column;
    gap: 30px;
  };

  @media(max-width: ${({theme})=>theme.breakpoint.mobile}) {
    margin-right: unset;
  };
  `;

export const Image = styled.img`
  max-width: 384px;
  width: 31.5vw;
  border-radius: 100%;

  @media(max-width: ${({theme})=>theme.breakpoint.small}) {
   width: 132px;
  };
`;

export const ZoneAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 50px;

  @media(max-width: ${({theme})=>theme.breakpoint.small}) {
   padding-top: unset;
  };
`;

export const Prefix = styled.div`
 font-size: 12px;
 color: ${({theme})=>theme.color.smallText};
`;

export const Header = styled.h1`
  font-size: 38px;

  @media(max-width: ${({theme})=>theme.breakpoint.mobile}) {
   font-size: 22px;
  };
`;

export const Description = styled.div`
  font-size: 20px;
  color: ${({theme})=>theme.color.smallText};
  text-indent: 40px;

  @media(max-width: ${({theme})=>theme.breakpoint.mobile}) {
   font-size: 17px;
   text-indent: 20px;
  };
`;

export const Link = styled.a`
  border: none;
  align-self: flex-start;
  padding: 0;
  padding-top: 32px;

  &:hover {
    border-color:  ${({theme})=>theme.breakpoint.scienceBlue};
    cursor: pointer;
  }

  @media(max-width: ${({theme})=>theme.breakpoint.mobile}) {
    padding-top: 24px;
    svg {
      height: 43.9px;
      width: 138px;
    }
  }
`;

export const Border = styled.div`
  height: 49px;
  width: 154px;

  &:hover {
    outline: 4px solid ${({theme})=>theme.color.border};
    border-radius: 4px;
  }
  
  @media(max-width: ${({theme})=>theme.breakpoint.mobile}) {
    height: 43.9px;
    width: 138px;
  }
`;
