import React from "react";
import { useState } from "react";

export default function AddTodoForm(props) {
  const [todoTitle, setTodoTitle] = React.useState("");

  function handleTitleChange(event) {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }
  function handleAddTodo(event) {
    event.preventDefault();
    // const todoTitle = event.target.title.value;
    // console.log(todoTitle);
    props.onAddTodo(event);
    event.target.reset();
  }
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title </label>
      <input
        id="todoTitle"
        name="title"
        value={props.todoTitle}
        onChange={handleTitleChange}
      ></input>
      <button>Add</button>
    </form>
  );
}
