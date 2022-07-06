import React from "react";
import "./App.css";
import LandingPageTabs from "./LandingPageTabs";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <h1>Booking App</h1>
        </header>
        <LandingPageTabs />
      </div>
    </ThemeProvider>
  );
}

export default App;
