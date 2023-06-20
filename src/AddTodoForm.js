import React from "react";
export default AddTodoForm;

function AddTodoForm() {
  return (
    <form>
      <label htmlFor="todoTitle">Title </label>
      <input id="todoTitle"></input>
      <button>Add</button>
    </form>
  );
}
