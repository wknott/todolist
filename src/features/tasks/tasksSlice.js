import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: JSON.parse(localStorage.getItem("tasks")) || [],
    hideDoneTasks: false,
    sortDirection: null,
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    removeTask: (state, { payload }) => {
      const removeTaskIndex = state.tasks.findIndex(task => task.id === payload);
      state.tasks.splice(removeTaskIndex, 1);
    },
    toggleTaskDone: (state, { payload }) => {
      const indexToggleTaskDone = state.tasks.findIndex(task => task.id === payload);
      state.tasks[indexToggleTaskDone].done = !state.tasks[indexToggleTaskDone].done;
    },
    toggleHideDoneTasks: state => {
      state.hideDoneTasks = !state.hideDoneTasks;
    },
    markAllTasksAsDone: state => {
      state.tasks.forEach(task => task.done = true)
    },
    sortTasks: state => {
      state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";
      state.tasks = state.tasks.sort(
        (a, b) => state.sortDirection === "asc" ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)
      )
    },
  }
});

export const {
  addTask,
  removeTask,
  toggleTaskDone,
  toggleHideDoneTasks,
  markAllTasksAsDone,
  sortTasks
} = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;