import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ButtonsContainer, Button } from "./styled";
import { selectTasks, toggleHideDoneTasks } from "../tasksSlice";

const Buttons = ({ directionOfSort, markAllTasksAsDone, sortTasks }) => {
  const { tasks, hideDoneTasks } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <ButtonsContainer>
      {tasks.length > 0 &&
        <>
          <Button onClick={sortTasks}>
            Posortuj zadania {directionOfSort === null ? "" : directionOfSort === "asc" ? "↓" : "↑"}
          </Button>
          <Button onClick={() => dispatch(toggleHideDoneTasks())}>
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
    </ButtonsContainer >
  )
}

export default Buttons;