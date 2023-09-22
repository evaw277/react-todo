import React, { useEffect, useState } from "react";
import TodoView from "./TodoView";

export default function TodoContainer() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSortedAscending, setIsSortAscending] = useState(true);

  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
    };

    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
      }
      const data = await response.json();

      const todos = data.records.map((data) => {
        const newTodo = {
          title: data.fields.title,
          id: data.id,
        };

        return newTodo;
      });

      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addTodo = async (newTodo) => {
    try {
      const airtableData = {
        fields: {
          title: newTodo.title,
        },
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
        },
        body: JSON.stringify(airtableData),
      };
      const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME} `;

      const response = await fetch(url, options);

      if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
      }
      const jsonResponse = await response.json();

      const airtableTodo = {
        title: jsonResponse.fields.title,
        id: jsonResponse.id,
      };

      setTodoList([...todoList, airtableTodo]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const removeTodo = (id) => {
    const removeItem = todoList.filter((todo) => todo.id !== id);

    setTodoList(removeItem);
  };

  const handleToggleSortDirection = () => {
    setIsSortAscending(!isSortedAscending);
  };

  const sortedTodos = [...todoList].sort((objectA, objectB) => {
    const titleA = objectA.title ?? "";
    const titleB = objectB.title ?? "";
    if (isSortedAscending) {
      return titleA.localeCompare(titleB);
    } else return titleB.localeCompare(titleA);
  });

  return (
    <TodoView
      onAddTodo={addTodo}
      removeTodo={removeTodo}
      isLoading={isLoading}
      isSortedAscending={isSortedAscending}
      sortedTodos={sortedTodos}
      handleToggleSortDirection={handleToggleSortDirection}
    />
  );
}
