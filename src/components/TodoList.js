import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";

export default function TodoList({ todoList, removeTodo }) {
  return (
    <div>
      <ul>
        {todoList.map(function (item) {
          return (
            <TodoListItem key={item.id} todo={item} removeTodo={removeTodo} />
          );
        })}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  removeTodo: PropTypes.func,
};
