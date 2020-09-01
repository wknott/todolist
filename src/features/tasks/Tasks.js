import React from "react";
import Header from "../../common/Header";
import Form from "./Form";
import Buttons from "./Buttons";
import TaskList from "./TaskList";
import Section from "../../common/Section";
import Container from "../../common/Container";
import { useTasks } from "../../useTasks";
import { GlobalStyle } from "../../GlobalStyle";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../theme";

const Tasks = () => {

  const {
    // tasks,
    directionOfSort,
    sortTasks
  } = useTasks();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <GlobalStyle />
        <Header title="Lista zadań" />
        <Section
          title="Dodaj nowe zadanie"
          sectionBody={<Form />}
        />
        <Section
          title="Lista zadań"
          extraHeaderContent={
            <Buttons
              directionOfSort={directionOfSort}
              sortTasks={sortTasks}
            />
          }
          sectionBody={<TaskList />}
        />
      </Container>
    </ThemeProvider>
  );
}

export default Tasks;
