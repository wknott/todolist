import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ButtonsContainer, Button } from "./styled";
import { selectTasks, toggleHideDoneTasks, markAllTasksAsDone, sortTasks } from "../tasksSlice";

const Buttons = () => {
  const { tasks, hideDoneTasks, sortDirection } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <ButtonsContainer>
      {tasks.length > 0 &&
        <>
          <Button onClick={() => dispatch(sortTasks())}>
            Posortuj zadania {sortDirection === null ? "" : sortDirection === "asc" ? "↑" : "↓"}
          </Button>
          <Button onClick={() => dispatch(toggleHideDoneTasks())}>
            {hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
          </Button>
          <Button
            onClick={() => dispatch(markAllTasksAsDone())}
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