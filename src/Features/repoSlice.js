import { createSlice } from "@reduxjs/toolkit";

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
    fetchRepositoriesSuccess: (_, {payload: repositories}) => ({
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

const selectReposState = state => state.repositories;

export const selectRepos = state => selectReposState(state).repositories;
export const selectReposStatus = state => selectReposState(state).status;

export default repoSlice.reducer;



