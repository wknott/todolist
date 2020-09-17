import React from "react";
import { Item, List, StyledLink, StyledNav } from "./styled";

const Navigation = () => (
  <StyledNav>
    <List>
      <Item>
        <StyledLink to="/zadania">
          Zadania
        </StyledLink>
      </Item>
      <Item>
        <StyledLink to="/autor">
          O autorze
        </StyledLink>
      </Item>
    </List>
  </StyledNav>
)

export default Navigation;