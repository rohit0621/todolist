const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const todos = [
  {
    id: Math.random(),
    name: "Item 1",
    completed: false,
    edit: false,
  },
  {
    id: Math.random(),
    name: "Item 2",
    completed: false,
    edit: false,
  },
  {
    id: Math.random(),
    name: "Item 3",
    completed: false,
    edit: false,
  },
];

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
// app.get("/express_backend", (req, res) => {
//   res.send({
//     express: {
//       id: Math.random(),
//       name: "hello",
//       completed: false,
//       edit: false,
//     },
//   });
// });

app.post("/addTodo", (req, res) => {
  // console.log(req, req.body, "req @@##");
  let todoObj = {
    id: Math.random(),
    name: req.body.name,
    completed: false,
    edit: false,
  };
  todos.push(todoObj);
  res.send({
    todos,
  });
});

app.get("/todos", (req, res) => {
  res.send({
    todos,
  });
});

app.get("/todos/:id", (req, res) => {
  const index = todos.findIndex((todo) => todo.id == req.params.id);
  console.log(index, req.params, "delBackend");
  // todos.filter((todo) => todo.id !== req.params.id);
  todos.splice(index, 1);
  res.send(todos);
});
