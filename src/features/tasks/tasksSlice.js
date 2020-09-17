import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDoneTasks: false,
    sortDirection: null,
    loading: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
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
    fetchExampleTasks: () => { },
    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
    },
    setLoading: (state, { payload: isLoading }) => {
      state.loading = isLoading;
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
  setTasks,
  setLoading,
} = tasksSlice.actions;

export const selectTasksState = state => state.tasks;
export const selectTasks = state => selectTasksState(state).tasks;
export const selectLoading = state => selectTasksState(state).loading;

export const getTaskById = (state, taskId) => selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
  const tasks = selectTasks(state);

  if (!query || query.trim() === "") {
    return tasks;
  }

  return tasks.filter(({ content }) =>
    content.toUpperCase().includes(query.trim().toUpperCase()));
}

export default tasksSlice.reducer;