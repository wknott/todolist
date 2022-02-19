import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeclassname = "link-active";

export const StyledLink = styled(NavLink).attrs(() => ({ activeclassname }))`
  &.${activeclassname} {
    font-weight: bold;
  }
  
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;

  &:hover{
    border-bottom: 1px solid;
  }
`;

export const List = styled.ul`
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  list-style-type: none;
  display: inline-block;
  padding: 20px 40px;
`;

export const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
`;