import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { Task } from "./TaskInterface";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

interface TasksState {
  tasks: Array<Task>,
  hideDoneTasks: boolean,
  sortDirection: string | null,
  loading: boolean,
}

const initialState: TasksState = {
  tasks: getTasksFromLocalStorage(),
  hideDoneTasks: false,
  sortDirection: null,
  loading: false,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: ({ tasks }, { payload: task }: PayloadAction<Task>) => {
      tasks.push(task);
    },
    removeTask: ({ tasks }, { payload: taskId }) => {
      const removeTaskIndex = tasks.findIndex(task => task.id === taskId);
      tasks.splice(removeTaskIndex, 1);
    },
    toggleTaskDone: ({ tasks }, { payload: taskId }) => {
      const indexToggleTaskDone = tasks.findIndex(task => task.id === taskId);
      tasks[indexToggleTaskDone].done = !tasks[indexToggleTaskDone].done;
    },
    toggleHideDoneTasks: state => {
      state.hideDoneTasks = !state.hideDoneTasks;
    },
    markAllTasksAsDone: state => {
      state.tasks.forEach(task => task.done = true);
    },
    toggleSortDirection: state => {
      state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";
    },
    fetchExampleTasks: state => {
      state.loading = true;
    },
    fetchExampleTasksSuccess: (state, { payload: tasks }) => {
      state.tasks = tasks;
      state.loading = false;
    },
    fetchExampleTasksError: state => {
      state.loading = false;
    }
  }
});

export const {
  addTask,
  removeTask,
  toggleTaskDone,
  toggleHideDoneTasks,
  markAllTasksAsDone,
  toggleSortDirection,
  fetchExampleTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksError
} = tasksSlice.actions;

export const selectTasksState = (state: RootState): TasksState => state.tasks;
export const selectTasks = (state: RootState): Array<Task> => selectTasksState(state).tasks;
export const selectLoading = (state: RootState): boolean => selectTasksState(state).loading;

export const getTaskById = (state: RootState, taskId: string | undefined): Task | undefined => selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state: RootState, query: string): Array<Task> => {
  const tasks = selectTasks(state);

  if (!query || query.trim() === "") {
    return tasks;
  }

  return tasks.filter(({ content }) =>
    content.toUpperCase().includes(query.trim().toUpperCase()));
}

export default tasksSlice.reducer;