import { TodoTypes } from "../../../types";
import styled from "styled-components";
import Button from "../../atoms/button";

interface TodoProps {
  todo: TodoTypes;
  onRemove: (id: string) => void;
  isChecked: (id: string) => void;
}

interface TitleProps{
  checked: boolean;
}

const TodoStyle = styled.article`
  display: flex;
  font-size: 24px;
  margin-bottom: 16px;
  justify-content: center;
`;

const CheckedStyle = styled.input`
  width: 20px;
  height: 20px;
`

const TitleStyle = styled.section<TitleProps>`
  display: inline;
  margin: 0px 8px;
  text-decoration: ${(props) => props.checked && "line-through"};
  color: ${(props) => props.checked && "gray"};
`;

const Todo = ({ todo, onRemove, isChecked }: TodoProps) => {
  return (
    <TodoStyle>
      <label>
        <li id={todo.id}>
          <CheckedStyle type="checkbox" onClick={() => isChecked(todo.id)}/>
          <TitleStyle checked={todo.checked}>{todo.title}</TitleStyle>
          <Button onClick={() => {onRemove(todo.id)}}>-</Button>
        </li>
      </label>
    </TodoStyle>
  );
};

export default Todo;
