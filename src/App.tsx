import React from "react";
import epcot from "./photos/Epcot_mono_5x2.png";
import "./App.css";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import { Typography } from "@material-ui/core";

// TODO: Convert all this to typescript
// TODO: Add support for routing for sign-in
// TODO: Add support for Storybook
function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <img src={epcot} className="App-epcot" alt="epcot" />
      <Typography variant="h6">Your Ultimate WDW Planning Resource</Typography>
    </div>
  );
}

export default App;
