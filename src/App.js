import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoContainer from "./components/TodoContainer";
import LandingPage from "./components/LandingPage";
// import { FontAwesomeIcon } from "@fortawesome/react-font-awesome";

// const icon = <FontAwesomeIcon icon={faSquareCheck} />;
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/todolist" element={<TodoContainer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
