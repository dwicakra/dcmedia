import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Togel from "./pages/Togel";
// import Togel from "./pages/tools/Togel";
import "./assets/style.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Togel />} />
      </Routes>
    </Router>
  );
}

export default App;
