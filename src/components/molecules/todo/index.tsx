import { TodoTypes } from "../../../types";
import styled from "styled-components";
import Button from "../../atoms/button";

interface TodoProps {
  todo: TodoTypes;
  onRemove: (id: string) => void;
  isChecked: (id: string) => void;
}

interface TextProps{
  checked: boolean;
}

const TodoStyle = styled.article`
  width: 400px;
  font-size: 24px;
  margin-bottom: 16px;
  justify-content: center;
  white-space: nowrap;
  overflow: auto;
  min-width: 0;
`;

const CheckedStyle = styled.input`
  width: 20px;
  height: 20px;
  display: inline;
`

const TextStyle = styled.section<TextProps>`
  display: inline;
  margin-left: 8px;
  text-decoration: ${(props) => props.checked && "line-through"};
  color: ${(props) => props.checked && "gray"};
`;

const Todo = ({ todo, onRemove, isChecked }: TodoProps) => {
  return (
    <TodoStyle>
      <label>
        <li id={todo.id}>
          <CheckedStyle type="checkbox" onClick={() => isChecked(todo.id)}/>
          <TextStyle checked={todo.checked}>{todo.title}</TextStyle>
          <Button onClick={() => {onRemove(todo.id)}}>x</Button>
        </li>
      </label>
    </TodoStyle>
  );
};

export default Todo;
