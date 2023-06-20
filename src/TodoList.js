import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList() {
  const todoList = [
    {
      id: 1,
      title: "code",
    },
    {
      id: 2,
      title: "go to store",
    },
    {
      id: 3,
      title: "attend group session",
    },
  ];

  return (
    <div>
      <ul>
        {todoList.map(function (item) {
          return <TodoListItem key={todoList.id} todo={item.title} />;
        })}
      </ul>
    </div>
  );
}
