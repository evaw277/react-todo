import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import styles from "../styles/TodoView.module.css";

export default function TodoView({
  onAddTodo,
  removeTodo,
  isLoading,
  sortedTodos,
  handleToggleSortDirection,
  isSortedAscending,
}) {
  return (
    <div className={styles.Container}>
      <h1 className={styles.MainHeader}>Todo List</h1>

      <AddTodoForm onAddTodo={onAddTodo} />
      <button className={styles.SortButton} onClick={handleToggleSortDirection}>
        {isSortedAscending ? "Sort Descending" : "Sort Ascending"}
      </button>
      {isLoading ? (
        <p className={styles.Loading}>Loading...</p>
      ) : (
        <TodoList todoList={sortedTodos} removeTodo={removeTodo} />
      )}
    </div>
  );
}
