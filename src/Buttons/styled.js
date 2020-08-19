import styled from "styled-components";

export const ButtonsContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: grid;
    grid-gap: 20px;
  }
`;

export const Button = styled.button`
  padding: 0 10px;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  transition: 0.5s;

  &:hover {
    color: ${({ theme }) => theme.colors.hoverPrimary};
  }

  &:active {
    color: ${({ theme }) => theme.colors.activePrimary};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;