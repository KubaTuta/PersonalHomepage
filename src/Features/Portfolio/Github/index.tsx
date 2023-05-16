
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectRepos, selectReposStatus } from "../../repoSlice";
import GitError from "./GitError";
import GitLoading from "./GitLoading";
import GitSucceess from "./GitSuccess";

const Github = () => {
  const dispatch = useDispatch();

  const repositories = useSelector(selectRepos);
  const repoStatus = useSelector(selectReposStatus);

  useEffect(() => { dispatch(fetchRepositories()) }, [dispatch]);

  switch (repoStatus) {
    case "loading":
      return <GitLoading />
    case "error":
      return <GitError />;
    case "success":
      return (
        <GitSucceess repositories={repositories} />
      )
    default:
      return null
  }
};

export default Github;