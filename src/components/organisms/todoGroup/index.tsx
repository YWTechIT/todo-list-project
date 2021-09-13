import { TodoTypes } from "../../../types";
import {Todo, Footer} from "../../index";
import {TodoGroupWrapper} from "./style";

interface Todos {
  todos: TodoTypes[];
  onRemove: (id: string) => void;
  isChecked: (id: string) => void;
}

const TodoGroup = ({ todos, onRemove, isChecked }: Todos) => {
  return (
    <TodoGroupWrapper>
      <ol>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onRemove={onRemove} isChecked={isChecked}></Todo>
        ))}
      </ol>
      <Footer todos={todos} />
    </TodoGroupWrapper>
  );
};

export default TodoGroup;
