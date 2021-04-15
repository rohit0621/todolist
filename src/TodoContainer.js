import React, { useState, useRef } from "react";
import Todolist from "./Todolist";
import CompletedList from "./CompletedList";
import LeftTodosList from "./LeftTodosList";
import {
  addTodoAction,
  deleteTodoAction,
  editTodoAction,
  handleEditTodoAction,
  completedTodoAction,
  completedTodosListAction,
  leftTodosListAction,
  totalTodosListAction,
} from "./redux/actions";
import { connect } from "react-redux";
import TotalTodosList from "./TotalTodosList";

function TodoContainer({
  todos,
  updatedTodos,
  addTodoAction,
  deleteTodoAction,
  editTodoAction,
  handleEditTodoAction,
  completedTodoAction,
  completedTodosListAction,
  leftTodosListAction,
  totalTodosListAction,
}) {
  const [filter, setFilter] = useState("Total Todos");
  // const [todos, setTodos] = useState([]);
  //   const [updatedTodos, setUpdatedTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [leftTodos, setLeftTodos] = useState([]);
  const todoRef = useRef("");
  const editTodoRef = useRef("");

  const addTodo = () => {
    setFilter("Total Todos");
    todoRef.current.focus();
    let inputValue = todoRef.current.value;
    if (todoRef.current.value != "") {
      let todoObj = { id: Math.random(), name: inputValue };
      //addTodoAction(todoObj) ;
      // Simple POST request with a JSON body using fetch
      const newTodo = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: inputValue }),
      };
      fetch("/addTodo", newTodo)
        .then((response) => response.json())
        .then((data) => addTodoAction(todoObj));
    }
    todoRef.current.value = "";
  };
  const totalTodosList = () => {
    setFilter("Total Todos List");
    totalTodosListAction();
  };

  const deleteTodo = (key) => {
    fetch("/todos/" + key.target.id, {
      method: "GET",
    }).then(() => deleteTodoAction(key));

    // const newTodo = {
    //   method: "DELETE",
    //   headers: { "Content-Type": "application/json" },
    // };
    // fetch("/todos:id", newTodo)
    //   .then((response) => response.json())
    //   .then((data) => deleteTodoAction(key));
  };
  const editTodo = (key) => {
    // setFilter("Edit Todos List");
    editTodoAction(key);
  };
  const handleEditTodo = (key) => {
    editTodoRef.current.focus();
    let editValue = editTodoRef.current.value;
    let editTodoObj = { id: Math.random(), name: editValue };
    console.log(editTodoRef, "editTodoRef.current.value");
    handleEditTodoAction(key, editTodoObj, editTodoRef);
  };

  const completedTodo = (key) => {
    completedTodoAction(key);
    // const newTodos = [...todos];
    // const index = newTodos.findIndex((todo) => todo.id == key.target.id);
    // newTodos[index].completed = !newTodos[index].completed;
    // setTodos(newTodos);
  };

  const completedTodosList = (updatedTodos) => {
    setFilter("Completed Todos");
    // console.log(todos, updatedTodos, "completedlist");
    completedTodosListAction(updatedTodos);
  };
  //   const completedTodosList = (updatedTodos) => {
  //     setFilter("Completed Todos");
  //     const newTodos = updatedTodos;
  //     const list = newTodos.filter((todo) => todo.completed == true);
  //     setCompletedTodos(list);
  //   };

  const leftTodosList = () => {
    setFilter("Left Todos");
    // console.log(todos, "leftlist");
    leftTodosListAction(todos);
  };

  return (
    <div>
      <h1>Todo list</h1>
      <input type="text" ref={todoRef} />
      <button onClick={addTodo}>add todo</button>
      <button onClick={() => completedTodosList()}>completed todos</button>
      <button onClick={() => leftTodosList()}>left todos</button>
      <button onClick={() => totalTodosList()}>total todos</button>
      <h2>{filter}</h2>
      <Todolist
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        handleEditTodo={handleEditTodo}
        completedTodo={completedTodo}
        filter={filter}
        editTodoRef={editTodoRef}
      />
      <CompletedList
        updatedTodos={updatedTodos}
        completedTodos={completedTodos}
        filter={filter}
      />
      <LeftTodosList
        updatedTodos={updatedTodos}
        leftTodos={leftTodos}
        filter={filter}
      />
      <TotalTodosList todos={todos} filter={filter} />
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state, "@@@state");
  return {
    todos: state.todos,
    updatedTodos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodoAction: (todos) => dispatch(addTodoAction(todos)),
    deleteTodoAction: (key) => dispatch(deleteTodoAction(key)),
    editTodoAction: (key) => dispatch(editTodoAction(key)),
    handleEditTodoAction: (key, editTodoRef) =>
      dispatch(handleEditTodoAction(key, editTodoRef)),
    completedTodoAction: (key) => dispatch(completedTodoAction(key)),
    completedTodosListAction: (key) => dispatch(completedTodosListAction(key)),
    leftTodosListAction: (key) => dispatch(leftTodosListAction(key)),
    totalTodosListAction: (key) => dispatch(totalTodosListAction(key)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
