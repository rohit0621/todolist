import React from "react";

export default function LeftTodosList({ updatedTodos, filter }) {
  if (filter == "Left Todos") {
    const newTodos = [...updatedTodos];
    const list = newTodos.filter((todo) => todo.completed == false);
    return (
      <div>
        {list.map((todo) => (
          <li key={Math.random()}>{todo.name}</li>
        ))}
      </div>
    );
  } else {
    return null;
  }
}
