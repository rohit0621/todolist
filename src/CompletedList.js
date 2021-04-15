import React from "react";

export default function CompletedList({ updatedTodos, filter }) {
  // console.log("todo.js", updatedTodos);
  if (filter == "Completed Todos") {
    const newTodos = [...updatedTodos];
    const list = newTodos.filter((todo) => todo.completed == true);
    return (
      <div>
        {list.map((todo) => (
          <li key={Math.random()}>{todo.name}</li>
        ))}
      </div>
    );
  } else return null;
}

// import React from "react";

// export default function CompletedList({ updatedTodos, filter }) {
//   console.log("todo.js", updatedTodos);
//   const newTodos = [...updatedTodos];
//   const list = newTodos.filter((todo) => todo.completed == true);
//   if (filter == "Completed Todos") {
//     return (
//       <div>
//         {list.map((todo) => (
//           <li key={Math.random()}>{todo.name}</li>
//         ))}
//       </div>
//     );
//   } else return null;
// }
