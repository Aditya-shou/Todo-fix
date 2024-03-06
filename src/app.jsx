import React from "react";
import { TodoList } from "./components/todo-list";
import { TodoResults } from "./components/todo-results";
import { TodoForm } from "./components/todo-form";
import "./index.scss";
import { TodoContext } from "./context/TodoContext";

export const App = () => {
  const { todos, setTodos } = React.useContext(TodoContext);

  return (
    <div className="app">
      <TodoList />
      <TodoResults />
      <TodoForm setTodos={setTodos} />
    </div>
  );
};