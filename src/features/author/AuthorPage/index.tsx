import React from "react";
import { Container } from '../../../common/Container/styled';
import Header from "../../../common/Header";
import Section from "../../../common/Section";

const AuthorPage = () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Wojciech Knott"
      sectionBody={
        <>
          Obecnie pracuję jako Fullstack Web Developer.
          Programowaniem zajmuję się od wielu lat. W tym czasie poznałem podstawy kilku
          języków programowania i technologii, ale to programowanie <strong>aplikacji webowych </strong>
          sprawia mi największą frajdę!
        </>
      }
    />
  </Container>
);

export default AuthorPage;
