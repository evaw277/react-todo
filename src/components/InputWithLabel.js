import React, { useEffect } from "react";
import styles from "../styles/InputWithLabel.module.css";
import PropTypes from "prop-types";

export default function InputWithLabel({
  todoTitle,
  handleTitleChange,
  children,
}) {
  const inputRef = React.useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <label htmlFor="todoTitle">{children}</label>
      <input
        className={styles.FormInputField}
        id="todoTitle"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
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
