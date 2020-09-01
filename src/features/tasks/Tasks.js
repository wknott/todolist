import React from "react";
import Header from "../../common/Header";
import Form from "./Form";
import Buttons from "./Buttons";
import TaskList from "./TaskList";
import Section from "../../common/Section";
import Container from "../../common/Container";


const Tasks = () => (
  <Container>
    <Header title="Lista zadań" />
    <Section
      title="Dodaj nowe zadanie"
      sectionBody={<Form />}
    />
    <Section
      title="Lista zadań"
      extraHeaderContent={<Buttons />}
      sectionBody={<TaskList />}
    />
  </Container>
);


export default Tasks;
