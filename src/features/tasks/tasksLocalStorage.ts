import { Task } from './TaskInterface';

const localStorageKey = 'tasks';

export const saveTasksInLocalStorage = (tasks: Array<Task>): void => {
  localStorage.setItem(localStorageKey, JSON.stringify(tasks));
};

export const getTasksFromLocalStorage = (): Array<Task> => {
  const tasksFromLocalStorage = localStorage.getItem(localStorageKey);
  if (tasksFromLocalStorage !== null) {
    return JSON.parse(tasksFromLocalStorage);
  }

  return [];
};
