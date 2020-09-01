import { useState, useEffect } from "react";

export const useTasks = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [directionOfSort, setDirectionOfSort] = useState(null);
  const getHighestId = () => Math.max(...tasks.map(({ id }) => id));

  const addTask = (name) => {
    setTasks(tasks => [
      ...tasks,
      {
        id: tasks.length ? getHighestId() + 1 : 1,
        name,
        done: false,
      }
    ]);
  };


  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      return task.id === id ? ({
        ...task,
        done: !task.done
      }) : (task);
    }));
  };


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
    addTask,
    toggleTaskDone,
    sortTasks
  };
};