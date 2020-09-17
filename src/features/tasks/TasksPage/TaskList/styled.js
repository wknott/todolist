import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  list-style-type: none;
  padding: 20px;
  margin: 0;
`;

export const Item = styled.li`
  padding: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  
  ${({ hide }) => hide && css`
    display: none;
  `}
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  height: 35px;
  flex: 0 0 35px;
  transition: 0.5s;
`;

export const ToggleDoneButton = styled(Button)`
  background-color: hsl(120, 100%, 25%);

  &:hover {
    background-color: hsl(120, 100%, 30%);
  }

  &:active {
    background-color: hsl(120, 100%, 35%);
  }
`;

export const DeleteButton = styled(Button)`
  background-color: hsl(0, 100%, 50%);

  &:hover {
    background-color: hsl(0, 100%, 60%);
  }

  &:active {
    background-color: hsl(0, 100%, 70%);
  }
`;

export const Content = styled.p`
  padding: 5px 10px;
  margin: 0px;
  flex-grow: 1;

  ${({ done }) => done && css`
    text-decoration: line-through;
  `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  transition: 0.5s;

  &:hover {
    filter: brightness(115%);
  }

  &:active {
    filter: brightness(130%);
  }
`;