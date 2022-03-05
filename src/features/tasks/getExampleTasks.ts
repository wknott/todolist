import { Task } from './TaskInterface';

export const getExampleTasks = async (): Promise<Array<Task>> => {
  const response = await fetch('/todolist/exampleTasks.json');

  if (!response.ok) {
    Error(response.statusText);
  }

  return response.json();
};
