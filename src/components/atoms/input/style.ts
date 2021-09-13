import styled from "styled-components";

export const InputStyle = styled.input`
  width: 256px;
  height: 24px;
  font-size: 16px;
  border: 1px solid ${(props) => props.theme.borderColor};
  box-shadow: 0px 10px 15px rgba(0,0,0,0.1);
`