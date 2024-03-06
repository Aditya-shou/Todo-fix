import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import "./todo-results.scss";

export const TodoResults = () => {
  const { todos } = useContext(TodoContext);

  const calculateChecked = () => {
    const completedTasks = todos.filter((todo) => todo.checked);
    return completedTasks.length;
  };

  return (
    <div className="todo-results">
      Done: {calculateChecked()}
    </div>
  );
};
