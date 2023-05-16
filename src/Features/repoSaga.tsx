import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getRepo } from "./api";
import { fetchRepositories, fetchRepositoriesError, fetchRepositoriesSuccess } from "./repoSlice";
import { Rootstate } from "./store";

const getRepositories = (state: Rootstate) => state.repositories;
type Repositories = ReturnType<typeof getRepositories>

function* fetchRepositoriesHandler() {
  try {
    yield delay(5000);
    const repositories: Repositories = yield call(getRepo);
    yield put(fetchRepositoriesSuccess(repositories));
  } catch (error) {
    yield put(fetchRepositoriesError());
  }
}

export function* repositoriesSaga() {
  yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}