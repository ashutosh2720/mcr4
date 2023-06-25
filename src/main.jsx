import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import { ForumProvider } from "./contexts/forum-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ForumProvider>
        <App />
      </ForumProvider>
    </BrowserRouter>
  </React.StrictMode>
);
