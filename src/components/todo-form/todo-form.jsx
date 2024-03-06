import React, { useState } from "react";
import "./todo-form.scss";

export const TodoForm = ({ setTodos }) => { 
  const [task, setTask] = useState("");

  const handleAddTodo = () => {
    if (task.trim() !== "") {
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          id: Date.now(),
          label: task,
          checked: false,
        },
      ]);
      setTask(""); 
    }
  };
  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
