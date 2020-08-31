import React from "react";
import "./App.css";

import { SelectRouter } from "./routes/SelectRouter";

// TODO: Add support for storybook tests
// TODO: Integrate the new Style guide in
function App() {
  return (
    <div className="App">
      <SelectRouter />
    </div>
  );
}

export default App;

// Fast passes - those available now (today); those not available
// Wait times for rides
//    Could get the current wait times
//    Could update the wait times
//    Maybe list all per park - to make it a more comprehensive form
//    Let's go with this one
// Dining - those available now (today); those not available
