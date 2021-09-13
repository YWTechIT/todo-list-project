import { TodoTypes } from "../../../types";
import { ButtonStyle, CheckedStyle, TextStyle, TodoStyle } from "./style";

interface TodoProps {
  todo: TodoTypes;
  onRemove: (id: string) => void;
  isChecked: (id: string) => void;
}

interface ButtonProps {
  children: string;
  onClick: () => void;
}


const Button = ({ children, onClick }: ButtonProps) => {
  return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>
};


const Todo = ({ todo, onRemove, isChecked }: TodoProps) => {
  return (
    <TodoStyle>
      <label id={todo.id}>
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
