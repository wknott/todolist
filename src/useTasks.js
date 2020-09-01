import { useState, useEffect } from "react";

export const useTasks = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [directionOfSort, setDirectionOfSort] = useState(null);

  const sortTasks = () => {
    setDirectionOfSort(directionOfSort === "asc" ? "desc" : "asc");
    setTasks(tasks => [...tasks].sort(
      (a, b) => directionOfSort === "asc" ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)
    ));
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return {
    tasks,
    directionOfSort,
    sortTasks
  };
};