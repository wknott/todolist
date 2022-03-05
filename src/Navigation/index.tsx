import React from 'react';
import { toAuthor, toTasks } from '../routes';
import {
  Item, List, StyledLink, StyledNav,
} from './styled';

function Navigation() {
  return (
    <StyledNav>
      <List>
        <Item>
          <StyledLink to={toTasks()}>
            Zadania
          </StyledLink>
        </Item>
        <Item>
          <StyledLink to={toAuthor()}>
            O autorze
          </StyledLink>
        </Item>
      </List>
    </StyledNav>
  );
}

export default Navigation;
