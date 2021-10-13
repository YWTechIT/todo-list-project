import styled from "styled-components";

export const TodoGroupWrapper = styled.article`
  width: 512px;
  border: 2px solid ${(props) => props.theme.borderColor};
  margin: 32px 0px;
  padding: 8px;
  border-radius: 5px;
  box-shadow: 0px 10px 15px rgba(0,0,0,0.1);
`;