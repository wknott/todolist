import { configureStore } from "@reduxjs/toolkit";
import tasksReducer, { selectTasks } from "./features/tasks/tasksSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

store.subscribe(() => {
  const { tasks } = selectTasks(store.getState());
  localStorage.setItem("tasks", JSON.stringify(tasks));
})

export default store;