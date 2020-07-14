import React from "react";
import Header from "./Header";
import Form from "./Form";
import Buttons from "./Buttons";
import Tasks from "./Tasks";
import Section from "./Section";
import Container from "./Container";

const tasks = [
  {
    id: 1,
    name: "Dodać interakcję do aplikacji",
    done: false
  },
  {
    id: 2,
    name: "Przenieść aplikację do React.js",
    done: true
  },
];
const directionOfSort = null;
const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title={"Dodaj nowe zadanie"}
        sectionBody={<Form />}
      />
      <Section
        title={"Lista zadań"}
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
          />
        }
      />
    </Container>
  );
}

export default App;
