import { takeLatest, call, put, delay } from "redux-saga/effects";
import { fetchExampleTasks, setLoading, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";

function* fetchExampleTasksHandler() {
  try {
    yield put(setLoading(true));
    yield delay(2000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak! Spróbuj ponownie później.");
  }
  yield put(setLoading(false));
}

export function* watchFetchExamlpeTasks() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
}