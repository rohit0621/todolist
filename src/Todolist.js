import React from "react";
import { connect } from "react-redux";

function Todolist({
  todos,
  deleteTodo,
  editTodo,
  editTodoRef,
  handleEditTodo,
  completedTodo,
  filter,
}) {
  if (filter == "Total Todos") {
    console.log(todos, editTodoRef, "123 Todolist");
    return (
      <div>
        {todos.map((todo) => (
          <div key={Math.random()}>
            <input
              type="checkbox"
              onChange={completedTodo}
              id={todo.id}
              checked={todo.completed}
            />
            {todo.name}
            <button onClick={deleteTodo} id={todo.id}>
              X
            </button>
            <button onClick={editTodo} id={todo.id}>
              Edit
            </button>
            <input
              style={{ display: todo.edit ? "block" : "none" }}
              type="text"
              value={todo.name}
              onChange={handleEditTodo}
              id={todo.id}
              ref={editTodoRef}
            />
          </div>
        ))}
      </div>
    );
  } else return null;
}

const mapStateToProps = (state) => {
  console.log(state, "@@@stateTodoList");
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(Todolist);
