import styled from "styled-components";

export const ButtonsContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: grid;
    grid-gap: 20px;
  }
`;