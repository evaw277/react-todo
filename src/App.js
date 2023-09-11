import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoContainer from "./components/TodoContainer";
// import { FontAwesomeIcon } from "@fortawesome/react-font-awesome";

// const icon = <FontAwesomeIcon icon={faSquareCheck} />;
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/new" element={<h1>New Todo List</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
