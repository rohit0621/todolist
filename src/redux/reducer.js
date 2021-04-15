import { combineReducers } from "redux";

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          completed: action.payload.completed,
          edit: action.payload.edit,
        },
      ];
    }
    // case "GET_TODOS": {
    //   return [...state, ...action.payload.body];
    // }
    case "FETCHED_TODOS":
      // console.log(action.payload.todos, "reducer action.payload");
      return [...state, ...action.payload.todos];
    case "DELETE_TODO": {
      const newTodos = [...state];
      const index = newTodos.findIndex(
        (todo) => todo.id == action.payload.target.id
      );
      newTodos.splice(index, 1);
      // console.log(newTodos, action.payload.key, index, "@@## reducer delete");
      return [...newTodos];
    }
    case "EDIT_TODO": {
      const newTodos = [...state];
      const index = newTodos.findIndex(
        (todo) => todo.id == action.payload.target.id
      );
      newTodos[index].edit = !newTodos[index].edit;
      return [...newTodos];
    }
    case "HANDLE_EDIT_TODO": {
      const newTodos = [...state];
      const index = newTodos.findIndex(
        (todo) => todo.id == action.payload.target.id
      );
      console.log(newTodos, index, action.ref, "kjgrfcvdbfhjguythjfkrel");
      newTodos[index].name = action.ref.name;
      // action.ref.current.value = "";

      return [...newTodos];
    }
    case "COMPLETED_TODO": {
      const newTodos = [...state];
      const index = newTodos.findIndex(
        (todo) => todo.id == action.payload.target.id
      );
      newTodos[index].completed = !newTodos[index].completed;
      return [...newTodos];
    }

    case "TOTALTODOS_TODO": {
      // console.log(state, "@#@# 2345678o0");
      const newTodos = [...state];
      return [...newTodos];
    }
    default:
      return [...state];
  }
};
const updatedTodosReducer = (updatedState = [], action) => {
  switch (action.type) {
    case "ADD_TODO": {
      // console.log("2nd reducer");
      return [
        ...updatedState,
        {
          id: action.payload.id,
          name: action.payload.name,
          completed: action.payload.completed,
        },
      ];
    }
    // case "COMPLETEDTODOSLIST_TODO": {

    //   console.log(updatedState, list, "2nd reducer lisr");
    //   return [...list];
    // }
    // case "LEFTTODOSLIST_TODO": {
    //   // console.log(updatedState, "@#@# 2345678o0");
    //   const newTodos = [...updatedState];
    //   const list = newTodos.filter((todo) => todo.completed == false);
    //   return [...list];
    // }
    default:
      return [...updatedState];
  }
};

const rootReducer = combineReducers({
  todos: todosReducer,
  updatedTodos: updatedTodosReducer,
});

export default rootReducer;
