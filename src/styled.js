import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  gap: 72px;
  max-width: 1216px;
  width: 100%;
`;

export const Wrapper = styled.div`
 background-color: ${({theme})=>theme.color.tile};
 border-radius: 4px;
 box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
`;

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 32px; 
`;