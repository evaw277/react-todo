import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  // const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState("");

  function onAddTodo(event) {
    // setNewTodo(event.target.value);
    // console.log(setNewTodo);
  }

  function addTodo(newTodo) {
    setTodoList(...todoList, newTodo);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {/* <p>{newTodo}</p> */}
      <TodoList todoList={[todoList]} />
    </div>
  );
}

export default App;
