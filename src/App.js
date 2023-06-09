import React from "react";

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

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(function (item) {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
