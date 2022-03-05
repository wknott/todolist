import styled from 'styled-components';

export default styled.button`
  padding: 0 10px;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  transition: 0.5s;

  &:hover {
    filter: brightness(115%);
  }

  &:active {
    filter: brightness(130%);
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.secondary};
    &:hover {
      filter: none;
    }

    &:active {
      filter: none;
    }
  }
`;
