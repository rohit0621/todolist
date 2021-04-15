import React from "react";

export default function TotalTodosList({ todos, filter }) {
  // console.log("totalTodoList.js", todos);
  if (filter == "Total Todos List") {
    return (
      <div>
        {todos.map((todo) => (
          <li key={Math.random()}>{todo.name}</li>
        ))}
      </div>
    );
  } else return null;
}
