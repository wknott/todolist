import React from "react";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Container from "../../common/Container";

const AuthorPage = () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Wojciech Knott"
      sectionBody={
        <>
          Obecnie kończę studia magisterskie na kierunku Automatyka i Robotyka.
          Programowaniem zajmuję się od wielu lat. W tym czasie poznałem podstawy kilku
          języków programowania i technologii, ale to programowanie <strong>aplikacji webowych </strong>
          sprawia mi największą frajdę!
        </>
      }
    />
  </Container>
);

export default AuthorPage;
