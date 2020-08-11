import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: white;
  margin-bottom: 10px;
  box-shadow: 0px 0px 2px 2px #ddd;
`;

export const SectionHeader = styled.header`
  padding: 20px;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  border-bottom: 1px solid #ddd;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  margin: 0;
`;
