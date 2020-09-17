import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../Button";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";

const ExampleTasksButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  return (
    <Button disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
      {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
    </Button>
  )
}

export default ExampleTasksButton;