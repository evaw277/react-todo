import React from "react";

export default function InputWithLabel(props) {
  return (
    <>
      <label htmlFor="todoTitle">Title </label>
      <input
        id="todoTitle"
        name="title"
        value={props.todoTitle}
        onChange={props.handleTitleChange}
      ></input>
    </>
  );
}
