import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Buttons from "./Buttons";
import Tasks from "./Tasks";
import Section from "./Section";
import Container from "./Container";

const directionOfSort = null;
const hideDoneTasks = false;

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Dodać interakcję do aplikacji", done: false },
    { id: 2, name: "Przenieść aplikację do React.js", done: true },
  ]);

  const addTask = (name) => {
    setTasks(tasks => [
      ...tasks,
      {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        name,
        done: false,
      }
    ]);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id))
  }

  return (
    <Container>
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
          />
        }
        sectionBody={
          <Tasks
            tasks={tasks}
            hideDoneTasks={hideDoneTasks}
            removeTask={removeTask}
          />
        }
      />
    </Container>
  );
}

export default App;
