import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  position: absolute;
  left: 42vw;
  top: 25vh;

  animation: ${rotate360} 2s linear infinite;
  transform: translateZ(0);

  border-top: 5px solid red;
  border-right: 5px solid red;
  border-bottom: 5px solid red;
  background: transparent;
  width: 256px;
  height: 256px;
  border-radius: 50%;
`;

export default Spinner;
