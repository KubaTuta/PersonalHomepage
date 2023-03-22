import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getRepo } from "./api";
import { fetchRepositories, fetchRepositoriesError, fetchRepositoriesSuccess } from "./repoSlice";

function* fetchRepositoriesHandler() {
  try {
    yield delay(5000);
    const repositories = yield call(getRepo);
    yield put(fetchRepositoriesSuccess(repositories));
  } catch (error) {
    yield put(fetchRepositoriesError());
  }
}

export function* repositoriesSaga() {
  yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}