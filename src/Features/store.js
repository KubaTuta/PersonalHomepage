import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import repoSlice from "./repoSlice";
import saga from "./saga";
import themeSlice from "./themeSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    repositories: repoSlice,
    theme: themeSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;