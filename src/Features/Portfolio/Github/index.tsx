import { useQuery } from "@tanstack/react-query";
import { getRepo } from "../../api";
import GitError from "./GitError";
import GitLoading from "./GitLoading";
import GitSuccess from "./GitSuccess";

const Github = () => {
  const { isLoading, data } = useQuery(["repositories"], getRepo);

  if (data) {
    return <GitSuccess repositories={data} />;
  } else if (isLoading) {
    return <GitLoading />;
  } else {
    return <GitError />;
  }
};

export default Github;
