import { Task } from "./TaskInterface";

export const getExampleTasks = async (): Promise<Array<Task>> => {
  const response = await fetch("/to-do-list-react/exampleTasks.json");

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
}