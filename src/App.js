import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

// const useSemiPersistentState = () => {
//   const [todoList, setTodoList] = useState(
//     JSON.parse(localStorage.getItem("savedTodoList")) || []
//   );

//   useEffect(() => {
//     localStorage.setItem("savedTodoList", JSON.stringify(todoList));
//   }, [todoList]);

//   return [todoList, setTodoList];
// };

function App() {
  // const [todoList, setTodoList] = useSemiPersistentState("savedTodoList");

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("check 1");
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          {
            data: {
              todoList: JSON.parse(localStorage.getItem("savedTodoList")),
            },
          },
          2000
        );
      });
    }).then((result) => {
      console.log(result);
      setTodoList(result.data.todoList);
      setIsLoading(false);
    });
  });

  useEffect(() => {
    if (isLoading === false) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList]);

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }
  const removeTodo = (id) => {
    const removeItem = todoList.filter((todo) => todo.id !== id);

    setTodoList(removeItem);
  };

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} removeTodo={removeTodo} />
    </>
  );
}

export default App;
