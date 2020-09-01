import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasksSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

store.subscribe(() => {
  console.log(store.getState().tasks.tasks)
  localStorage.setItem("tasks", JSON.stringify(store.getState().tasks.tasks))
})
export default store;