import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Input, Container, Navbar, TodoGroup, Header } from "../../components";
import { LOCAL_STORAGE_ID, LOCAL_STORAGE_NAME } from "../../config";
import { TodoTypes } from "../../types";

interface MainProps {
  isLight: "light" | "dark";
  toggleTheme: () => void;
}

const Main = ({isLight, toggleTheme}: MainProps) => {
  const [todos, setTodos] = useState<TodoTypes[]>([]);
  let nextId = useRef(1);

  const onInsert = useCallback(
    (title: string) => {
      const newTodo = {
        id: String(nextId.current),
        title: title,
        checked: false,
      };
      setTodos(todos.concat(newTodo));
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id: string) => {
      const newTodo = todos.filter((item) => item.id !== id);
      setTodos(newTodo);
    },
    [todos]
  );

  const isChecked = useCallback(
    (id: string) => {
      const newState = todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      );
      setTodos(newState);
    },
    [todos]
  );

  // 화면이 DOM에 그려지기 전 LOCAL_STORAGE에 있는 값 가져오기
  useLayoutEffect(() => {
    const loadedTodos = localStorage.getItem(LOCAL_STORAGE_NAME);
    const loadedTodosId = localStorage.getItem(LOCAL_STORAGE_ID);
    if (loadedTodos && loadedTodosId) {
      setTodos(JSON.parse(loadedTodos));
      nextId.current = +loadedTodosId;
    }
  }, [setTodos]);

  // 화면이 업데이트 된 이후, LOCAL_STORAGE에 값 저장하기
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(todos));
    if (!todos.length)
      localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(1));
    else localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(nextId.current));
  }, [todos]);

 
  return (
    <>
      <Navbar isLight={isLight} toggleTheme={toggleTheme} />
      <Container>
        <Header />
        <Input onInsert={onInsert} />
        <TodoGroup todos={todos} onRemove={onRemove} isChecked={isChecked} />
      </Container>
    </>
  );
};

export default Main;
