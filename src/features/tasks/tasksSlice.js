import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDoneTasks: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    toggleHideDoneTasks: state => {
      state.hideDoneTasks = !state.hideDoneTasks;
    },
    markAllTasksAsDone: state => {
      state.tasks = state.tasks.map(task => ({
        ...task,
        done: true,
      }))
    },
  }
});

export const { addTask, toggleHideDoneTasks, markAllTasksAsDone } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;