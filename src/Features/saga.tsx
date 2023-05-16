import {all} from "redux-saga/effects";
import { repositoriesSaga } from "./repoSaga";

export default function* saga() {
  yield all([
     repositoriesSaga(),
  ]);
}