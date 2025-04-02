import "./App.css";
import React, { useMemo, useState } from "react";
import NavBar from "./components/NavBar";
import TicTacToe from "./components/TicTacToe";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import DarkModeContext from "./context/DarkModeContext";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const handleThemeMode = (event) => {
    setDarkMode(event.target.checked ? true : false);
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  return (
    <DarkModeContext.Provider value={handleThemeMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <NavBar />
        <Container>
          <TicTacToe />
        </Container>
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
}

export default App;
