import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
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