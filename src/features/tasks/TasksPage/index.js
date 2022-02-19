import React from "react";
import Header from "../../../common/Header";
import Form from "./Form";
import Buttons from "./Buttons";
import TaskList from "./TaskList";
import Section from "../../../common/Section";
import ExampleTasksButton from "./ExampleTasksButton";
import Search from "./Search";
import { Container } from '../../../common/Container/styled';

const Tasks = () => (
  <Container>
    <Header title="Lista zadań" />

    <Section
      title="Dodaj nowe zadanie"
      extraHeaderContent={<ExampleTasksButton />}
      sectionBody={<Form />}
    />

    <Section
      title="Wyszukiwarka"
      sectionBody={<Search />}
    />

    <Section
      title="Lista zadań"
      extraHeaderContent={<Buttons />}
      sectionBody={<TaskList />}
    />

  </Container>
);

export default Tasks;
