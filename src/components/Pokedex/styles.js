import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;
`;

export const Top = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Load = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Cards = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;
