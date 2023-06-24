import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import { Comment } from "@mui/icons-material";



function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/comment" element={<Comment />} />
        <Route path="/" element={<Home />} />
      </Routes>

    </>
  );
}

export default App;
