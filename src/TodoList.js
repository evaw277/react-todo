import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList({ todoList }) {
  return (
    <div>
      <ul>
        {todoList.map(function (item) {
          return <TodoListItem key={item.id} todo={item.title} />;
        })}
      </ul>
    </div>
  );
}
