import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globalStyles";
import useDarkMode from "./hooks/useDarkMode";
import Main from "./pages/main";
import { darkTheme, lightTheme } from "./typhography/theme";

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const isLight = theme === "light" ? "light" : "dark";
  
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle/>
      <Main isLight={isLight} toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

export default App;