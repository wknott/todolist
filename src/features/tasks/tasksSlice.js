import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: JSON.parse(localStorage.getItem("tasks")) || [],
    hideDoneTasks: false,
    directionOfSort: null,
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
    sortTasks: state => {
      console.log("dudu")
      state.directionOfSort = state.directionOfSort === "asc" ? "desc" : "asc";
      state.tasks = state.tasks.sort(
        (a, b) => state.directionOfSort === "asc" ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)
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