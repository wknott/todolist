import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Buttons from "./Buttons";
import Tasks from "./Tasks";
import Section from "./Section";
import Container from "./Container";
import { useTasks } from "./useTasks";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";
const App = () => {
  const [hideDoneTasks, setHideDoneTasks] = useState(false);

  const togglehHideDoneTasks = () => {
    setHideDoneTasks(!hideDoneTasks);
  };

  const {
    tasks,
    directionOfSort,
    addTask,
    removeTask,
    toggleTaskDone,
    markAllTasksAsDone,
    sortTasks
  } = useTasks();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <GlobalStyle />
        <Header title="Lista zadań" />
        <Section
          title="Dodaj nowe zadanie"
          sectionBody={<Form addTask={addTask} />}
        />
        <Section
          title="Lista zadań"
          extraHeaderContent={
            <Buttons
              directionOfSort={directionOfSort}
              hideDoneTasks={hideDoneTasks}
              tasks={tasks}
              togglehHideDoneTasks={togglehHideDoneTasks}
              markAllTasksAsDone={markAllTasksAsDone}
              sortTasks={sortTasks}
            />
          }
          sectionBody={
            <Tasks
              tasks={tasks}
              hideDoneTasks={hideDoneTasks}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />
          }
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
