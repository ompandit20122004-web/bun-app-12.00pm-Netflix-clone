import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home.jsx";
import Login from "./components/pages/Login/Login.jsx";
import Player from "./components/pages/Player/Player.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
       <Route path="/player/:title" element={<Player />} />
    </Routes>
  );
};

export default App;
