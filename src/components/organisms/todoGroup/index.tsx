import { TodoTypes } from "../../../types";
import Todo from "../../molecules/todo";
import styled from "styled-components";
import Footer from "../footer";
import { Ol } from "../../../typhography/ol";

interface Todos {
  todos: TodoTypes[];
  onRemove: (id: string) => void;
  isChecked: (id: string) => void;
}

const TodoGroupWrapper = styled.article`
  width: 512px;
  border: 2px solid #3d8ddc;
  margin: 32px 0px;
  padding: 8px;
  border-radius: 5px;
  box-shadow: 0px 10px 15px rgba(0,0,0,0.1);
`;

const TodoGroup = ({ todos, onRemove, isChecked }: Todos) => {
  return (
    <TodoGroupWrapper>
      <Ol>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onRemove={onRemove} isChecked={isChecked}></Todo>
        ))}
      </Ol>
      <Footer todos={todos} />
    </TodoGroupWrapper>
  );
};

export default TodoGroup;
