import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

export default function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  function handleTitleChange(event) {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }
  function handleAddTodo(event) {
    event.preventDefault();
    onAddTodo({
      title: todoTitle,
      id: Date.now(),
    });
    setTodoTitle("");
  }

  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        label={"Title "}
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
      />
      <button>Add</button>
    </form>
  );
}
