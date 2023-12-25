import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MainProvider } from "./components/context/MainContext";
import { TaskProvider } from "./components/context/TaskContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </MainProvider>
  </React.StrictMode>
);
