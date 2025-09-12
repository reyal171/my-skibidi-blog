import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Mainbloghomepage from "./mainbloghomepage";
import About from "./about";

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Menu */}
        <nav>
          <Link to="/">home</Link> | <Link to="/about">about</Link>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Mainbloghomepage/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
