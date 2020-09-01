import React from "react";
import ReactDOM from "react-dom";
import { SWRConfig } from "swr";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import makeServer from "./server";

export const createMirageServer = () => {
  if (
    process.env.NODE_ENV === "development" &&
    typeof makeServer === "function"
  ) {
    makeServer();
  } else if (process.env.NODE_ENV === "production") {
    makeServer();
  }
};

createMirageServer();

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.rides);

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher }}>
      <App />
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
