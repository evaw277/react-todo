import React, { useEffect } from "react";
import styles from "../TodoListItem.module.css";
import PropTypes from "prop-types";

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

InputWithLabel.propTypes = {
  todoTitle: PropTypes.string,
  handleTitleChange: PropTypes.func,
  children: PropTypes.string,
};
