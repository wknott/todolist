import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: JSON.parse(localStorage.getItem("tasks")) || [],
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

export default tasksSlice.reducer;