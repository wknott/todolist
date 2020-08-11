import styled from "styled-components";

export const ButtonsContainer = styled.div`
  @media (max-width: 767px) {
    display: grid;
    grid-gap: 20px;
  }
`;

export const Button = styled.button`
  padding: 0 10px;
  border: none;
  background-color: transparent;
  color: hsl(180, 100%, 25%);
  transition: 0.5s;

  &:hover {
    color: hsl(180, 100%, 30%);
  }

  &:active {
    color: hsl(180, 100%, 35%);
  }

  &:disabled {
    color: #ddd;
  }
`;