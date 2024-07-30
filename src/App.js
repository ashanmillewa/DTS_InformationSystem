import React from "react";
import Details from "./pages/details";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = ({}) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;
