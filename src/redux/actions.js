function addTodoAction(todos) {
  console.log(todos, "@@## todos");
  return {
    type: "ADD_TODO",
    payload: { id: todos.id, name: todos.name, completed: false, edit: false },
  };
}

// async function getTodos(dis) {
//   const response = await fetch("/todos");
//   const body = await response.json();
//   if (response.status !== 200) {
//     // throw Error(body.message);

//   }

//   return {
//     type: "GET_TODOS",
//     payload: { body },
//   };
// }
function fetchedTodosAction(todos) {
  return {
    type: "FETCHED_TODOS",
    payload: todos,
  };
}
function fetchingTodosAction() {
  return (dispatch) => {
    fetch("/todos")
      .then((res) => res.json())
      .then((todos) => dispatch(fetchedTodosAction(todos)));
  };
}
/**
 * 1. dispatch(fetchedTodosAction(todos)) => dispatch({ type: "FETCHED_TODOS", payload: todos })
 * 
 * 2. dispatch(fetchingTodosAction()) ==> dispatch((dispatch) => {
    fetch("/todos").then((res) => res.json()).then((todos) => dispatch(fetchedTodosAction(todos)));
  })

 * 3. dispatch(getTodos) ==> dispatch(async (dispatch) {
   await
 })
 * 4. dispatch(getTodos()) ==> dispatch(undefined) 
 */
function deleteTodoAction(key) {
  // console.log(key, "@@## rohit");
  return {
    type: "DELETE_TODO",
    payload: key,
  };
}
function editTodoAction(key) {
  // console.log(key, "@@## editTodoAction");
  return {
    type: "EDIT_TODO",
    payload: key,
  };
}
function handleEditTodoAction(key, editTodoRef, editTodoObj) {
  console.log(editTodoRef, "@@## editTodoAction");
  return {
    type: "HANDLE_EDIT_TODO",
    payload: key,
    ref: editTodoRef,
    data: editTodoObj,
  };
}
function completedTodoAction(key) {
  return {
    type: "COMPLETED_TODO",
    payload: key,
  };
}
function completedTodosListAction() {
  return {
    type: "COMPLETEDTODOSLIST_TODO",
  };
}
function leftTodosListAction(key) {
  return {
    type: "LEFTTODOSLIST_TODO",
  };
}
function totalTodosListAction(todos) {
  console.log(todos, "@@## rohit");
  return {
    type: "TOTALTODOS_TODO",
  };
}

export {
  addTodoAction,
  deleteTodoAction,
  editTodoAction,
  handleEditTodoAction,
  completedTodoAction,
  completedTodosListAction,
  leftTodosListAction,
  totalTodosListAction,
  fetchingTodosAction,
  // getTodos,
};
