import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import styles from "../TodoListItem.module.css";
import PropTypes from "prop-types";
import { sort } from "semver";

export default function TodoContainer() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSortedAscending, setIsSortAscending] = useState(true);
  const [sortOrder, setSortOrder] = useState("ASC");
  const [sortedItems, setSortedItems] = useState([]);

  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
    };

    const sortField = "sort[0][field]";
    const sortDirection = "sort[0][direction]";

    const encodedSortField = encodeURIComponent(sortField);
    const encodedSortDirection = encodeURIComponent(sortDirection);

    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}?${encodedSortField}=Title&${encodedSortDirection}=asc`;
    const url2 = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;
    try {
      const response = await fetch(url2, options);

      if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
      }
      const data = await response.json();

      const todos = data.records.map((data) => {
        const newTodo = {
          title: data.fields.Title,
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

      console.log(airtableTodo);
      setTodoList([...todoList, airtableTodo]);
    } catch (error) {
      console.log(error.message);
    }
  };
  const removeTodo = (id) => {
    const removeItem = todoList.filter((todo) => todo.id !== id);

    setTodoList(removeItem);
  };

  function renderSortedTodos() {
    // const filteredProducts = fetchedProducts.filter((item, index) => {
    //   return true;
    // });

    const sortedTodos = data.records.sort((objectA, objectB) => {
      if (sortOrder === "TITLE_ASC") {
      } else if (sortOrder === "TITLE_DESC") {
      }

      if (isSortedAscending) {
        return objectA.title.localeCompare(objectB.title);
      } else return objectB.title.localeCompare(objectA.title);
    });

    // return sortedProducts.map((product) => {
    //   return (
    //     <div key={product.id}>
    //       <h2>
    //         {product.title} - {product.stock} in stock
    //       </h2>
    //       <h4>{product.category}</h4>
    //       <p>{product.description}</p>
    //     </div>
    //   );
    // });
  }

  const handleToggleSortDirection = () => {
    setIsSortAscending(!isSortedAscending);
    // setSortOrder("DATE_DESC");
  };

  return (
    <div className={styles.Container}>
      <h1 className={styles.MainHeader}>Todo List</h1>
      <button onClick={handleToggleSortDirection}>
        {isSortedAscending ? "sort descending" : "sort ascending"}
      </button>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (
        <p className={styles.Loading}>Loading...</p>
      ) : (
        <TodoList todoList={todoList} removeTodo={removeTodo} />
      )}
    </div>
  );
}

TodoContainer.propTypes = {
  props: PropTypes.func,
};
