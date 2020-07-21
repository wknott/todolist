import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Buttons from "./Buttons";
import Tasks from "./Tasks";
import Section from "./Section";
import Container from "./Container";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Dodać interakcję do aplikacji", done: false },
    { id: 2, name: "Przenieść aplikację do React.js", done: true },
  ]);
  const [hideDoneTasks, setHideDoneTasks] = useState(false);
  const [directionOfSort, setDirectionOfSort] = useState(null);

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
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      return task.id === id ? ({
        ...task,
        done: !task.done
      }) : (task);
    }))
  };

  const togglehHideDoneTasks = () => {
    setHideDoneTasks(!hideDoneTasks);
  };

  const markAllTasksAsDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  };

  const sortTasks = () => {
    setDirectionOfSort(directionOfSort === "asc" ? "desc" : "asc");
    setTasks(tasks => tasks.sort(
      (a, b) => directionOfSort === "asc" ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)
    ));
  };

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
  );
}

export default App;
