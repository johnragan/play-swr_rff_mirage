import React from "react";
import "./App.css";

import { SelectRouter } from "./routes/SelectRouter";
import Header from "./components/Header/Header";

// TODO: Add support for routing for sign-in
// TODO: Add support for Storybook
// TODO: Integrate the new Style guide in
function App() {
  return (
    <div className="App">
      <Header />
      <SelectRouter />
    </div>
  );
}

export default App;
