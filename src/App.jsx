import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Comment from "./pages/Comment";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/comment/:postId" element={<Comment />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
