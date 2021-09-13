import { useLayoutEffect, useState } from "react";

const useDarkMode = () => {
    const DEFAULT_THEME = window.localStorage.getItem('theme');
    const [theme, setTheme] = useState<string>(DEFAULT_THEME || "light");

    const toggleTheme = () => {
        if (theme === "light") {
            window.localStorage.setItem("theme", "dark");
            setTheme("dark");
        } else {
          window.localStorage.setItem("theme", "light");
            setTheme("light");
        }
    };
    // useLayoutEffect(() => {
    //   const loadedTodos = localStorage.getItem(LOCAL_STORAGE_NAME);
    //   const loadedTodosId = localStorage.getItem(LOCAL_STORAGE_ID);
    //   if (loadedTodos && loadedTodosId) {
    //     setTodos(JSON.parse(loadedTodos));
    //     nextId.current = +loadedTodosId;
    //   }
    // }, [setTodos]);
    
    useLayoutEffect(() => {
      const localTheme = window.localStorage.getItem("theme");
      localTheme && setTheme(localTheme);
    }, []);

    return [theme, toggleTheme] as const;
};

export default useDarkMode;