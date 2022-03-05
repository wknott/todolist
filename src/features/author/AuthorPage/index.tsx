import React from 'react';
import Container from '../../../common/Container';
import Header from '../../../common/Header';
import Section from '../../../common/Section';

function AuthorPage() {
  return (
    <Container>
      <Header title="O autorze" />
      <Section
        title="Wojciech Knott"
        sectionBody={(
          <>
            Obecnie pracuję jako Fullstack Web Developer.
            Programowaniem zajmuję się od wielu lat. W tym czasie poznałem podstawy kilku
            języków programowania i technologii, ale to programowanie
            {' '}
            <strong>aplikacji webowych </strong>
            sprawia mi największą frajdę!
          </>
        )}
      />
    </Container>
  );
}

export default AuthorPage;
