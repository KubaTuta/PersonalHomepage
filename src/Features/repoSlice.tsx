import { createSlice } from "@reduxjs/toolkit";
import { Rootstate } from "./store";

const repoSlice = createSlice({
  name: "repositories",
  initialState: {
    repositories: null,
    status: "initial",
  },
  reducers: {
    fetchRepositories: () => ({
      repositories: null,
      status: "loading",
    }),
    fetchRepositoriesSuccess: (_, { payload: repositories }) => ({
      repositories,
      status: "success",
    }),
    fetchRepositoriesError: () => ({
      repositories: null,
      status: "error",
    }),
  }
});

export const {
  fetchRepositories,
  fetchRepositoriesError,
  fetchRepositoriesSuccess
} = repoSlice.actions;

const selectReposState = (state: Rootstate) => state.repositories;

export const selectRepos = (state: Rootstate) => selectReposState(state).repositories;
export const selectReposStatus = (state: Rootstate) => selectReposState(state).status;

export default repoSlice.reducer;



