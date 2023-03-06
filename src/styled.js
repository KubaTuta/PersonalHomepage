import styled from "styled-components";


export const Wrapper = styled.div`
 background-color: ${({theme})=>theme.color.white};
 border-radius: 4px;
 box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
`;

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 32px; 
`;

export const StyledHeader = styled.header`
  
  border-bottom: 1px solid #E5E5E5;
  margin: 32px;
`;

export const Footer = styled.div`

`;

export const Svg = styled.img`
  margin-right: 24px;
`;