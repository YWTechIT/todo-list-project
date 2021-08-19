import { TodoTypes } from "../../../types";
import Todo from "../../molecules/todo";
import styled from "styled-components";

interface Todos {
  todos: TodoTypes[];
  onRemove: (id: string) => void;
  isChecked: (id: string) => void;
}

const TodoWrapper = styled.article`
  width: 680px;
  border: 1px solid black;
  padding: 10px 20px;
  margin: 32px 0px;
`;

const TodoGroup = ({ todos, onRemove, isChecked }: Todos) => {
  return (
    <TodoWrapper>
      <ol>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onRemove={onRemove} isChecked={isChecked}></Todo>
        ))}
      </ol>
    </TodoWrapper>
  );
};

export default TodoGroup;
