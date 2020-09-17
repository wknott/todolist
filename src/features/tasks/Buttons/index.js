import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ButtonsContainer } from "./styled";
import Button from "../Button/"
import {
  selectTasksState,
  toggleHideDoneTasks,
  markAllTasksAsDone,
  toggleSortDirection,
} from "../tasksSlice";

const Buttons = () => {
  const { tasks, hideDoneTasks, sortDirection } = useSelector(selectTasksState);
  const dispatch = useDispatch();

  return (
    <ButtonsContainer>
      {tasks.length > 0 &&
        <>
          <Button onClick={() => dispatch(toggleSortDirection())}>
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