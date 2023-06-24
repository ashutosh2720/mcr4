import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dis from "./pages/Dis";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-black text-white">Hello world!</h1>
      <Routes>
        <Route path="/dis" element={<Dis />} />
      </Routes>
    </>
  );
}

export default App;
