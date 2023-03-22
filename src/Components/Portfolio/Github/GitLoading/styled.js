import styled, { keyframes } from "styled-components";
import {ReactComponent as spinner} from "../../../svg/spinner.svg";

const anime = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled(spinner)`
  width: 160px;
  margin-top: 48px;
  animation: ${anime} 1s linear infinite;
`;