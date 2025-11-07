import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Mainbloghomepage from "./mainbloghomepage";
import About from "./about";
import RPSGame from "./game"
import FlexPlayground from "./blank";

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Menu */}
        <nav>
          <Link to="/">home</Link> | <Link to="/about">about</Link> | <Link to="/game">game</Link> {/* | <Link to="/blank">test67</Link> */}
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Mainbloghomepage/>} />
          <Route path="/about" element={<About />} />
          <Route path="/game" element={<RPSGame />} />
          {/* <Route path="/blank" element={<FlexPlayground />} /> */}
          <Route path="*" element={<Mainbloghomepage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
