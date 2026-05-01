import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Mainbloghomepage from "./mainbloghomepage";
import About from "./about";
import RPSGame from "./rpsgame"
import Hangman from "./hangman"
import GuestBook from "./guestBook";
import FlexPlayground from "./blank";

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Menu */}
        <nav>
          <Link to="/">home</Link> | <Link to="/about">about</Link> | <Link to="/rpsgame">RPSgame</Link> | <Link to="/hangman">hangmanGame</Link> {/* | <Link to="/blank">test67</Link> */} | <Link to="/guestbook">guestBook</Link>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Mainbloghomepage/>} />
          <Route path="/about" element={<About />} />
          <Route path="/rpsgame" element={<RPSGame />} />
          <Route path="/hangman" element={<Hangman />} />
          {/* <Route path="/blank" element={<FlexPlayground />} /> */}
          <Route path="/guestbook" element={<GuestBook />} />
          <Route path="*" element={<Mainbloghomepage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
