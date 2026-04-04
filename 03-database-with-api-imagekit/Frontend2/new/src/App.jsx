import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Createpost from "./pages/Createpost.jsx";
import Feed from "./pages/Feed.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create-post" element={<Createpost />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  );
};

export default App;
