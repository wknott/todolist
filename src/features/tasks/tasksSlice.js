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
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter(task => task.id !== payload.id)
    },
    toggleTaskDone: (state, { payload }) => {
      state.tasks = state.tasks.map(task => {
        return task.id === payload.id ? ({
          ...task,
          done: !task.done
        }) : (task);
      })
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

export const {
  addTask,
  removeTask,
  toggleTaskDone,
  toggleHideDoneTasks,
  markAllTasksAsDone
} = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;