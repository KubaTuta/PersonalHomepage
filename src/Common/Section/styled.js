import styled from "styled-components";

export const Wrapper = styled.div`
 background-color: ${({ theme }) => theme.color.tile};
 border-radius: 4px;
 box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
 transition: 0.5s;
 padding: 32px;
 margin-top: 72px;
 padding-bottom: 0;
 
 @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 16px;
    padding-bottom: 0;
    margin-top: 50px;
  };
`;

export const StyledHeader = styled.h2`
  font-size: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.color.underline};
  margin-top: 0;
  padding-bottom: 15px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 18px;
  };
`;