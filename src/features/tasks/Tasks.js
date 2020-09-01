import React from "react";
import { useSelector } from "react-redux";
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
import { selectTasks } from "./tasksSlice";

const Tasks = () => {
  const { tasks } = useSelector(selectTasks);

  const {
    // tasks,
    directionOfSort,
    addTask,
    removeTask,
    toggleTaskDone,
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
              tasks={tasks}
              sortTasks={sortTasks}
            />
          }
          sectionBody={
            <TaskList
              tasks={tasks}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />
          }
        />
      </Container>
    </ThemeProvider>
  );
}

export default Tasks;
