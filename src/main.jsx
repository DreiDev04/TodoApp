import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AddItemProvider } from "./components/context/AddItemContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AddItemProvider>
      <App />
    </AddItemProvider>
  </React.StrictMode>
);
