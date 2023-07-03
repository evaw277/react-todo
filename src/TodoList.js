import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList(props) {
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
        {props.todoList.map(function (item) {
          return <TodoListItem key={item.id} todo={item.title} />;
        })}
      </ul>
    </div>
  );
}
