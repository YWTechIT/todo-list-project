import { ThemeProvider } from "styled-components";
import Main from "./pages/main";
import { theme } from "./typhography/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main /> 
    </ThemeProvider>
  )
}

export default App;