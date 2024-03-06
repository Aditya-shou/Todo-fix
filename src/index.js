// index.js
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { TodoProvider } from "./context/TodoContext";

ReactDOM.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
