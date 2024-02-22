import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-items: start;
  grid-row-gap: 20px;
  grid-column-gap: 40px;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
