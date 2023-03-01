
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectRepos, selectReposStatus } from "../../../Features/repoSlice";
import GitSucceess from "./GitSuccess/index";


const Github = () => {
  const dispatch = useDispatch();

  const repositories = useSelector(selectRepos);
  const repoStatus = useSelector(selectReposStatus);

  useEffect(() => { dispatch(fetchRepositories()) }, [dispatch]);

 switch (repoStatus) {
  case "initial":
    return null;
  case "loading":
    return (
      <div>loading</div>
    )
  case "error":
    return <div>erorr</div>;
  case "success":
    return (
    <GitSucceess repositories={repositories}/>
    )
    
    default:
      return null
 }
};

export default Github;