import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import Input from "../../components/atoms/input";
import Container from "../../components/container";
import Footer from "../../components/organisms/footer";
import Header from "../../components/organisms/header";
import TodoGroup from "../../components/organisms/todoGroup";
import { LOCAL_STORAGE_NAME } from "../../config";
import { TodoTypes } from "../../types";

const Main = () => {
  const [todos, setTodos] = useState<TodoTypes[]>([]);
  
  const onInsert = useCallback(
    (title: string) => {
      const newTodo = {
        id: String(todos.length + 1),
        title: title,
        checked: false,
      };
      setTodos(todos.concat(newTodo));
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

  const isChecked = useCallback((id: string) => {
    const newState = todos.map((todo) => todo.id === id ? {...todo, checked: !todo.checked} : todo);
    setTodos(newState);
  }, [todos]);

  // 화면이 DOM에 그려지기 전 LOCAL_STORAGE에 있는 값 가져오기
  useLayoutEffect(() => {
      const loadedTodos = localStorage.getItem(LOCAL_STORAGE_NAME);
      if (loadedTodos){
          setTodos(JSON.parse(loadedTodos));
      }
  }, [setTodos])

  // 화면이 업데이트 된 이후, LOCAL_STORAGE에 값 저장하기
  useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(todos));
  }, [todos]);

  return (
    <Container>
      <Header />
      <Input onInsert={onInsert}></Input>
      <TodoGroup todos={todos} onRemove={onRemove} isChecked={isChecked}></TodoGroup>
      
    </Container>
  );
};

export default Main;
