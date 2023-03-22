import { ReactComponent as Wrong } from "../../../svg/wrong.svg";
import { Description, Wrapper } from "../../styled";
import { Button, H3, Link } from "./styled";

const GitError = () => (
  <Wrapper>
    <Wrong />
    <H3>Ooops! Something went wrong...</H3>
    <Description>Sorry, failed to load Github projects.</Description>
    <Description>You can check them directly on Github.</Description>
    <Link href="https://github.com/KubaTuta/" rel="noopener noreferrer"><Button>Go to Github</Button></Link>
  </Wrapper>
);
export default GitError;