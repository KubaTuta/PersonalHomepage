import styled from "styled-components";

export const Block = styled.div`
  background-color: ${({theme})=>theme.color.white};
  padding: 56px;
  color: ${({theme})=>theme.color.slateGray};
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
`;

export const ApiType = styled.div`
  margin: 24px 0 24px 0;
  font-size: 18px;
`;

export const H3 = styled.h3`
  color: ${({theme})=>theme.color.scienceBlue};
`;