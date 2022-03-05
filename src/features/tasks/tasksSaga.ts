import {
  takeLatest, call, put, takeEvery, select, CallEffect, PutEffect,
} from 'redux-saga/effects';
import { getExampleTasks } from './getExampleTasks';
import { Task } from './TaskInterface';
import { saveTasksInLocalStorage } from './tasksLocalStorage';
import {
  fetchExampleTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
  selectTasks,
} from './tasksSlice';

function* fetchExampleTasksHandler():
  Generator<CallEffect<Task[]> | CallEffect<void> | CallEffect<true> | PutEffect<{
    payload: any;
    type: string;
  }>, void, unknown> {
  try {
    const exampleTasks = yield call(getExampleTasks);
    yield put(fetchExampleTasksSuccess(exampleTasks));
  } catch (error) {
    yield call(alert, 'Coś poszło nie tak! Spróbuj ponownie później.');
    yield put(fetchExampleTasksError());
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* watchFetchExamlpeTasks() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery('*', saveTasksInLocalStorageHandler);
}
