import React from "react";
export default TodoList;

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

function TodoList() {
  return (
    <div>
      <ul>
        {todoList.map(function (item) {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}
