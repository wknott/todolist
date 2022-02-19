import React from 'react';

type Props = {
  title: string,
}

const Header = ({ title }: Props) => (
  <header>
    <h1>
      {title}
    </h1>
  </header>
)

export default Header;