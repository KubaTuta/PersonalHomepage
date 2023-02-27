import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectRepos, selectReposStatus } from "../../Features/repoSlice";
import { Wrapper } from "../../styled";


const Portfolio = () => {
  const dispatch = useDispatch();

  const repositories = useSelector(selectRepos);
  const repoStatus = useSelector(selectReposStatus);

  useEffect(() => { dispatch(fetchRepositories()) }, [dispatch]);

  return (
    <Wrapper>
      
      
      {repoStatus} 
    
    </Wrapper>

  )
};

export default Portfolio;