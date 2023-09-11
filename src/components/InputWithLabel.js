import React, { useEffect } from "react";
import styles from "../TodoListItem.module.css";

export default function InputWithLabel(props) {
  const inputRef = React.useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <label htmlFor="todoTitle">{props.children}</label>
      <input
        className={styles.FormInputField}
        id="todoTitle"
        name="title"
        value={props.todoTitle}
        onChange={props.handleTitleChange}
        ref={inputRef}
      ></input>
    </>
  );
}
