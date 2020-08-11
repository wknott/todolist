import React from "react";
import { ButtonsContainer, Button } from "./styled";

const Buttons = ({ directionOfSort, hideDoneTasks, tasks, togglehHideDoneTasks, markAllTasksAsDone, sortTasks }) => (
  <ButtonsContainer>
    {tasks.length > 0 &&
      <>
        <Button onClick={sortTasks}>
          Posortuj zadania {directionOfSort === null ? "" : directionOfSort === "asc" ? "↓" : "↑"}
        </Button>
        <Button onClick={togglehHideDoneTasks}>
          {hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
        </Button>
        <Button
          onClick={markAllTasksAsDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </Button>
      </>
    }
  </ButtonsContainer>
)

export default Buttons;