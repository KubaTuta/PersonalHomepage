import { Description, Wrapper } from "../../styled";
import { Spinner } from "./styled";

const GitLoading = () => (
  <Wrapper>
    <Description>Please wait, projects are being loaded...</Description>
    <Spinner />
  </Wrapper>
);

export default GitLoading;