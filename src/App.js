import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  const [newTodo, setNewTodo] = React.useState("");
  const [todoList, setTodoList] = React.useState("");

  function onAddTodo(event) {
    setNewTodo(event.target.title.value);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAdd={onAddTodo} />
      <p>{newTodo}</p>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
