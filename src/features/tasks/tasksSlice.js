import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: JSON.parse(localStorage.getItem("tasks")) || [],
    hideDoneTasks: false,
    sortDirection: null,
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
      tasks[indexToggleTaskDone].done = !state.tasks[indexToggleTaskDone].done;
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
  }
});

export const {
  addTask,
  removeTask,
  toggleTaskDone,
  toggleHideDoneTasks,
  markAllTasksAsDone,
  toggleSortDirection
} = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;