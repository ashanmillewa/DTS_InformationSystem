import React from "react";
import Details from "./pages/details";
<<<<<<< Updated upstream

const App = () => {
  return (
    <div>
      <Details />
    </div>
=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = ({}) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Details />} />
      </Routes>
    </Router>
>>>>>>> Stashed changes
  );
};

export default App;
