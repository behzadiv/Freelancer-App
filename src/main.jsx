import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <div className="bg-secondary-0 text-secondary-700">
        <App />
      </div>
    </React.StrictMode>
  </BrowserRouter>
);
