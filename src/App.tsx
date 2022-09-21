import { createTheme, ThemeProvider } from "@mui/material";
import React, { FC } from "react";
import Header from "./components/Header/Header";
import Routing from "./Routing";
import "./App.css";

const App: FC = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Header />
        <Routing />
      </ThemeProvider>
    </div>
  );
};

export default App;
